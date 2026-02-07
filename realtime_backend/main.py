"""
Real-time Coral Bleaching Detection Backend
FastAPI + PyTorch + OpenCV + WebSocket Streaming
"""

import asyncio
import base64
import json
import os
import time
from typing import Dict, List, Optional
from contextlib import asynccontextmanager

import cv2
import numpy as np
from fastapi import FastAPI, WebSocket, WebSocketDisconnect, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse, JSONResponse
import torch
from ultralytics import YOLO

# ============== Configuration ==============
MODEL_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), 
                          "runs", "segment", "runs", "segment", "coral_detector",
                          "yolov8m_seg_final", "weights", "best.pt")

# Fallback paths
FALLBACK_MODEL_PATHS = [
    os.path.join(os.path.dirname(os.path.dirname(__file__)), "yolov8m-seg.pt"),
    os.path.join(os.path.dirname(os.path.dirname(__file__)), "yolo26n.pt"),
]

# Class categories for health analysis
HEALTHY_CLASSES = ["massive/meandering alive", "other coral alive", "branching alive", 
                   "acropora alive", "pocillopora alive", "table acropora alive", 
                   "stylophora alive", "meandering alive", "millepora", "turbinaria"]
BLEACHED_CLASSES = ["other coral bleached", "branching bleached", 
                    "massive/meandering bleached", "meandering bleached"]
DEAD_CLASSES = ["other coral dead", "massive/meandering dead", "branching dead", 
                "table acropora dead", "meandering dead"]

# ============== Global State ==============
model: Optional[YOLO] = None
active_connections: List[WebSocket] = []
frame_processors: Dict[str, asyncio.Task] = {}

# ============== Model Loading ==============
def load_model():
    """Load YOLO model with GPU support if available"""
    global model
    
    # Check for CUDA
    device = "cuda" if torch.cuda.is_available() else "cpu"
    print(f"🔧 Using device: {device}")
    
    if torch.cuda.is_available():
        print(f"🎮 GPU: {torch.cuda.get_device_name(0)}")
        print(f"💾 GPU Memory: {torch.cuda.get_device_properties(0).total_memory / 1e9:.2f} GB")
    
    # Try loading model from different paths
    model_path = MODEL_PATH
    if not os.path.exists(model_path):
        for fallback in FALLBACK_MODEL_PATHS:
            if os.path.exists(fallback):
                model_path = fallback
                break
        else:
            print("⚠️ No model found, using default yolov8n-seg")
            model_path = "yolov8n-seg.pt"
    
    print(f"📦 Loading model from: {model_path}")
    model = YOLO(model_path)
    model.to(device)
    
    # Warmup inference
    dummy = np.zeros((640, 640, 3), dtype=np.uint8)
    model.predict(dummy, verbose=False)
    print("✅ Model loaded and warmed up!")
    
    return model

# ============== Lifespan ==============
@asynccontextmanager
async def lifespan(app: FastAPI):
    """Load model on startup"""
    load_model()
    yield
    # Cleanup
    for task in frame_processors.values():
        task.cancel()

# ============== FastAPI App ==============
app = FastAPI(
    title="Coral Reef Real-time Detection API",
    description="Real-time coral bleaching detection with WebSocket streaming",
    version="1.0.0",
    lifespan=lifespan
)

# CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ============== Health Analysis ==============
def analyze_coral_health(result) -> dict:
    """Analyze coral health from detection results"""
    health_stats = {
        "total_corals": 0,
        "healthy_count": 0,
        "bleached_count": 0,
        "dead_count": 0,
        "health_score": 0,
        "status": "Unknown",
        "detections": []
    }
    
    if result.boxes is None or len(result.boxes) == 0:
        health_stats["status"] = "No corals detected"
        return health_stats
    
    names = result.names
    
    for i, box in enumerate(result.boxes):
        cls_id = int(box.cls[0])
        conf = float(box.conf[0])
        cls_name = names.get(cls_id, f"Class {cls_id}")
        
        detection = {"class": cls_name, "confidence": round(conf * 100, 1)}
        health_stats["detections"].append(detection)
        
        if cls_name in HEALTHY_CLASSES:
            health_stats["healthy_count"] += 1
            health_stats["total_corals"] += 1
        elif cls_name in BLEACHED_CLASSES:
            health_stats["bleached_count"] += 1
            health_stats["total_corals"] += 1
        elif cls_name in DEAD_CLASSES:
            health_stats["dead_count"] += 1
            health_stats["total_corals"] += 1
    
    # Calculate health score
    if health_stats["total_corals"] > 0:
        healthy_pct = health_stats["healthy_count"] / health_stats["total_corals"]
        bleached_pct = health_stats["bleached_count"] / health_stats["total_corals"]
        health_stats["health_score"] = round((healthy_pct * 100) + (bleached_pct * 50), 1)
        
        if healthy_pct > 0.7:
            health_stats["status"] = "🟢 Healthy Reef"
        elif healthy_pct > 0.4:
            health_stats["status"] = "🟡 Moderate Stress"
        elif bleached_pct > 0.3:
            health_stats["status"] = "🟠 Significant Bleaching"
        else:
            health_stats["status"] = "🔴 Critical Condition"
    
    return health_stats

# ============== Frame Processing ==============
def process_frame(frame: np.ndarray, conf_threshold: float = 0.25) -> tuple:
    """Process a single frame and return annotated frame + health data"""
    global model
    
    if model is None:
        return frame, {"error": "Model not loaded"}
    
    # Run inference
    results = model.predict(
        frame, 
        conf=conf_threshold, 
        retina_masks=True, 
        verbose=False
    )
    
    # Get annotated frame
    annotated = results[0].plot()
    
    # Analyze health
    health = analyze_coral_health(results[0])
    
    return annotated, health

def frame_to_base64(frame: np.ndarray, quality: int = 80) -> str:
    """Convert frame to base64 JPEG"""
    encode_params = [cv2.IMWRITE_JPEG_QUALITY, quality]
    _, buffer = cv2.imencode('.jpg', frame, encode_params)
    return base64.b64encode(buffer).decode('utf-8')

# ============== REST Endpoints ==============
@app.get("/")
async def root():
    return {"message": "Coral Reef Real-time Detection API", "status": "running"}

@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "model_loaded": model is not None,
        "gpu_available": torch.cuda.is_available(),
        "device": "cuda" if torch.cuda.is_available() else "cpu"
    }

@app.post("/analyze")
async def analyze_image(image_data: dict):
    """Analyze a single image (REST endpoint)"""
    try:
        # Decode base64 image
        img_data = image_data.get("image_data", "")
        if "," in img_data:
            img_data = img_data.split(",", 1)[1]
        
        img_bytes = base64.b64decode(img_data)
        nparr = np.frombuffer(img_bytes, np.uint8)
        frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        
        if frame is None:
            raise HTTPException(status_code=400, detail="Invalid image data")
        
        # Process frame
        annotated, health = process_frame(frame)
        
        # Convert to base64
        annotated_b64 = frame_to_base64(annotated)
        
        return {
            "success": True,
            "annotated_image": f"data:image/jpeg;base64,{annotated_b64}",
            "health_analysis": health
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# ============== WebSocket Real-time Streaming ==============
@app.websocket("/ws/stream")
async def websocket_stream(websocket: WebSocket):
    """
    WebSocket endpoint for real-time video streaming.
    Client sends frames, server processes and returns annotated frames + health data.
    """
    await websocket.accept()
    active_connections.append(websocket)
    
    print(f"🔌 Client connected. Total connections: {len(active_connections)}")
    
    # Processing stats
    frame_count = 0
    start_time = time.time()
    
    try:
        while True:
            # Receive frame from client
            data = await websocket.receive_text()
            message = json.loads(data)
            
            if message.get("type") == "frame":
                frame_data = message.get("data", "")
                
                # Decode frame
                if "," in frame_data:
                    frame_data = frame_data.split(",", 1)[1]
                
                try:
                    img_bytes = base64.b64decode(frame_data)
                    nparr = np.frombuffer(img_bytes, np.uint8)
                    frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
                    
                    if frame is not None:
                        # Process frame
                        annotated, health = process_frame(
                            frame, 
                            conf_threshold=message.get("conf", 0.25)
                        )
                        
                        # Convert to base64
                        annotated_b64 = frame_to_base64(
                            annotated, 
                            quality=message.get("quality", 70)
                        )
                        
                        # Calculate FPS
                        frame_count += 1
                        elapsed = time.time() - start_time
                        fps = frame_count / elapsed if elapsed > 0 else 0
                        
                        # Send response
                        await websocket.send_json({
                            "type": "processed_frame",
                            "frame": f"data:image/jpeg;base64,{annotated_b64}",
                            "health": health,
                            "fps": round(fps, 1),
                            "frame_count": frame_count
                        })
                except Exception as e:
                    await websocket.send_json({
                        "type": "error",
                        "message": str(e)
                    })
            
            elif message.get("type") == "ping":
                await websocket.send_json({"type": "pong"})
                
    except WebSocketDisconnect:
        print(f"🔌 Client disconnected")
    except Exception as e:
        print(f"❌ WebSocket error: {e}")
    finally:
        if websocket in active_connections:
            active_connections.remove(websocket)
        print(f"📊 Session stats: {frame_count} frames processed")

# ============== MJPEG Stream (Alternative) ==============
class MJPEGCamera:
    """Camera capture for MJPEG streaming"""
    def __init__(self, source: int = 0):
        self.cap = cv2.VideoCapture(source)
        self.cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1280)
        self.cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 720)
        self.cap.set(cv2.CAP_PROP_FPS, 30)
    
    def get_frame(self) -> Optional[np.ndarray]:
        ret, frame = self.cap.read()
        return frame if ret else None
    
    def release(self):
        self.cap.release()

camera: Optional[MJPEGCamera] = None

def generate_mjpeg():
    """Generate MJPEG stream with real-time detection"""
    global camera
    
    if camera is None:
        camera = MJPEGCamera(0)
    
    while True:
        frame = camera.get_frame()
        if frame is None:
            continue
        
        # Process frame
        annotated, _ = process_frame(frame)
        
        # Encode as JPEG
        _, buffer = cv2.imencode('.jpg', annotated, [cv2.IMWRITE_JPEG_QUALITY, 70])
        frame_bytes = buffer.tobytes()
        
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')

@app.get("/mjpeg")
async def mjpeg_stream():
    """MJPEG stream endpoint for direct camera feed with detection"""
    return StreamingResponse(
        generate_mjpeg(),
        media_type="multipart/x-mixed-replace; boundary=frame"
    )

# ============== Run Server ==============
if __name__ == "__main__":
    import uvicorn
    
    print("\n🌊 Coral Reef Real-time Detection Server")
    print("=" * 50)
    print("📡 WebSocket: ws://localhost:8000/ws/stream")
    print("🎥 MJPEG Stream: http://localhost:8000/mjpeg")
    print("📊 REST API: http://localhost:8000/analyze")
    print("=" * 50)
    
    uvicorn.run(
        app,
        host="0.0.0.0",
        port=8000,
        log_level="info"
    )
