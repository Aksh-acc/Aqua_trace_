from crewai.tools import BaseTool
from typing import Type, Optional
from pydantic import BaseModel, Field
import requests
import json
import os
import base64
from io import BytesIO
from pathlib import Path

import torch
import torch.nn.functional as F
from PIL import Image
import numpy as np

# --- Input Schemas ---

class OceanDataInput(BaseModel):
    """Input schema for fetching ocean data."""
    latitude: float = Field(..., description="Latitude of the coral site.")
    longitude: float = Field(..., description="Longitude of the coral site.")


class CoralClassificationInput(BaseModel):
    """Input schema for coral bleaching classification."""
    image_source: str = Field(
        ..., 
        description="Path to the image file OR base64-encoded image string."
    )

class GamificationInput(BaseModel):
    """Input schema for calculating user rewards."""
    bleaching_severity: str = Field(..., description="Detected severity: 'High', 'Medium', or 'Low'.")
    data_completeness: str = Field(..., description="How complete the user submission is (e.g., 'Full', 'Partial').")

# --- Tools ---

class SSTDataFetcherTool(BaseTool):
    name: str = "Sea Surface Temperature Fetcher"
    description: str = (
        "Fetches real-time Sea Surface Temperature (SST) and Degree Heating Weeks (DHW) "
        "for a specific geolocation to monitor thermal stress on corals."
    )
    args_schema: Type[BaseModel] = OceanDataInput

    def _run(self, latitude: float, longitude: float) -> str:
        url = "https://sea-surface-temperature.p.rapidapi.com/current"
        querystring = {"lat": str(latitude), "lon": str(longitude)}
        
        # NOTE: Configure RAPIDAPI_KEY in environment (.env)
        rapidapi_key = os.getenv("RAPIDAPI_KEY")
        headers = {
            "X-RapidAPI-Key": rapidapi_key or "",
            "X-RapidAPI-Host": "sea-surface-temperature.p.rapidapi.com"
        }

        try:
            if rapidapi_key:
                response = requests.get(url, headers=headers, params=querystring, timeout=20)
                response.raise_for_status()
                data = response.json()
                return json.dumps(data)

            # Fallback simulated return when no key is configured
            return json.dumps(
                {
                    "location": {"lat": latitude, "lon": longitude},
                    "sst_celsius": 29.5,
                    "dhw": 4.2,
                    "anomaly": 1.1,
                    "status": "Warning: Thermal stress detected.",
                    "source": "simulated_no_rapidapi_key",
                }
            )
        except Exception as e:
            return f"Error fetching SST data: {str(e)}"

class GamificationManagerTool(BaseTool):
    name: str = "Gamification & Rewards Calculator"
    description: str = (
        "Calculates points, assigns badges, and generates reward coupons based on the "
        "value of the user's contribution to the coral database."
    )
    args_schema: Type[BaseModel] = GamificationInput

    def _run(self, bleaching_severity: str, data_completeness: str) -> str:
        points = 0
        badges = []
        
        # Logic for points
        if data_completeness == "Full":
            points += 50
        else:
            points += 20
            
        if bleaching_severity in ["High", "Medium"]:
            points += 50 # Bonus for identifying critical areas
            badges.append("Crisis Spotter")

        badges.append("Reef Guardian")
        
        return json.dumps({
            "user_points_awarded": points,
            "badges_unlocked": badges,
            "coupon_code": "OCEAN20-SAVE",
            "message": f"Great job! You earned {points} points and the {badges[-1]} badge."
        })


class CoralBleachingClassifierTool(BaseTool):
    """Tool for classifying coral images as healthy or bleached using trained TorchScript model."""
    
    name: str = "Coral Bleaching Classifier"
    description: str = (
        "Analyzes coral images using a trained YOLOv8 classification model to detect bleaching. "
        "Returns classification result (CORAL/healthy or CORAL_BL/bleached) with confidence score "
        "and estimated bleaching severity."
    )
    args_schema: Type[BaseModel] = CoralClassificationInput
    
    # Class labels from the trained model
    CLASS_NAMES: dict = {0: "CORAL", 1: "CORAL_BL"}
    IMG_SIZE: tuple = (224, 224)
    
    # Model path - relative to the project root
    MODEL_PATH: str = os.path.join(
        os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(__file__)))))),
        "best.torchscript", "best"
    )
    
    _model: Optional[torch.jit.ScriptModule] = None
    
    def _load_model(self) -> torch.jit.ScriptModule:
        """Load the TorchScript model if not already loaded."""
        if self._model is None:
            if not os.path.exists(self.MODEL_PATH):
                raise FileNotFoundError(f"Model not found at: {self.MODEL_PATH}")
            
            self._model = torch.jit.load(self.MODEL_PATH)
            self._model.eval()
        return self._model
    
    def _preprocess_image(self, image: Image.Image) -> torch.Tensor:
        """Preprocess image for model inference."""
        # Convert to RGB if necessary
        if image.mode != "RGB":
            image = image.convert("RGB")
        
        # Resize to expected input size
        image = image.resize(self.IMG_SIZE, Image.Resampling.BILINEAR)
        
        # Convert to numpy array and normalize to [0, 1]
        img_array = np.array(image).astype(np.float32) / 255.0
        
        # Convert from HWC to CHW format
        img_array = np.transpose(img_array, (2, 0, 1))
        
        # Add batch dimension and create tensor
        tensor = torch.from_numpy(img_array).unsqueeze(0)
        
        return tensor
    
    def _load_image(self, image_source: str) -> Image.Image:
        """Load image from file path or base64 string."""
        # Check if it's a base64 string
        if image_source.startswith("data:image"):
            # Extract base64 data from data URL
            base64_data = image_source.split(",")[1]
            image_bytes = base64.b64decode(base64_data)
            return Image.open(BytesIO(image_bytes))
        elif len(image_source) > 500 and not os.path.exists(image_source):
            # Likely a raw base64 string
            try:
                image_bytes = base64.b64decode(image_source)
                return Image.open(BytesIO(image_bytes))
            except Exception:
                pass
        
        # Treat as file path
        if not os.path.exists(image_source):
            raise FileNotFoundError(f"Image not found at: {image_source}")
        
        return Image.open(image_source)
    
    def _determine_severity(self, class_id: int, confidence: float) -> str:
        """Determine bleaching severity based on classification and confidence."""
        if class_id == 0:  # CORAL (healthy)
            return "None"
        else:  # CORAL_BL (bleached)
            if confidence >= 0.85:
                return "High"
            elif confidence >= 0.65:
                return "Medium"
            else:
                return "Low"
    
    def _run(self, image_source: str) -> str:
        """Run coral bleaching classification on the provided image."""
        try:
            # Load the model
            model = self._load_model()
            
            # Load and preprocess the image
            image = self._load_image(image_source)
            input_tensor = self._preprocess_image(image)
            
            # Run inference
            with torch.no_grad():
                outputs = model(input_tensor)
                
                # Apply softmax to get probabilities
                probabilities = F.softmax(outputs, dim=1)
                
                # Get the predicted class and confidence
                confidence, predicted_class = torch.max(probabilities, dim=1)
                predicted_class = predicted_class.item()
                confidence = confidence.item()
            
            # Get class name
            class_name = self.CLASS_NAMES.get(predicted_class, "Unknown")
            is_bleached = predicted_class == 1
            health_status = "Bleached" if is_bleached else "Healthy"
            severity = self._determine_severity(predicted_class, confidence)
            
            # Calculate bleaching percentage estimate
            bleaching_percentage = 0.0
            if is_bleached:
                # Estimate based on confidence
                bleaching_percentage = min(confidence * 100, 100.0)
            
            # Get probabilities for both classes
            healthy_prob = probabilities[0][0].item()
            bleached_prob = probabilities[0][1].item()
            
            result = {
                "classification": class_name,
                "health_status": health_status,
                "is_bleached": is_bleached,
                "confidence": round(confidence * 100, 2),
                "bleaching_severity": severity,
                "estimated_bleaching_percentage": round(bleaching_percentage, 2),
                "class_probabilities": {
                    "CORAL_healthy": round(healthy_prob * 100, 2),
                    "CORAL_BL_bleached": round(bleached_prob * 100, 2)
                },
                "analysis_summary": (
                    f"The coral appears to be {health_status.lower()} with {round(confidence * 100, 1)}% confidence. "
                    f"{'Bleaching severity is ' + severity + '.' if is_bleached else 'No significant bleaching detected.'}"
                ),
                "model_info": {
                    "model_type": "YOLOv8-cls TorchScript",
                    "input_size": list(self.IMG_SIZE),
                    "classes": list(self.CLASS_NAMES.values())
                }
            }
            
            return json.dumps(result, indent=2)
            
        except FileNotFoundError as e:
            return json.dumps({"error": str(e), "status": "failed"})
        except Exception as e:
            return json.dumps({
                "error": f"Classification failed: {str(e)}",
                "status": "failed"
            })