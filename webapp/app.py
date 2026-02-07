from flask import Flask, render_template, Response, jsonify, request
from flask_cors import CORS
from ultralytics import YOLO
import cv2
import numpy as np
import base64
import io
from PIL import Image
import os

app = Flask(__name__)
# Enable CORS for all origins (allows Next.js app to connect)
CORS(app, resources={r"/*": {"origins": "*", "methods": ["GET", "POST", "OPTIONS"], "allow_headers": ["Content-Type"]}})

# Load model - use relative path from webapp folder
MODEL_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), 
                          "runs", "segment", "runs", "segment", "coral_detector", 
                          "yolov8m_seg_final", "weights", "best.pt")
print(f"Loading model from: {MODEL_PATH}")
model = YOLO(MODEL_PATH)

# Class names from training
CLASS_NAMES = ["seagrass", "trash", "other coral dead", "other coral bleached", "sand", "other coral alive", "human", "transect tools", "fish", "algae covered substrate", "other animal", "unknown hard substrate", "background", "dark", "transect line", "massive/meandering bleached", "massive/meandering alive", "rubble", "branching bleached", "branching dead", "millepora", "branching alive", "massive/meandering dead", "clam", "acropora alive", "sea cucumber", "turbinaria", "table acropora alive", "sponge", "anemone", "pocillopora alive", "table acropora dead", "meandering bleached", "stylophora alive", "sea urchin", "meandering alive", "meandering dead", "crown of thorn", "dead clam"]

# Categories for health analysis
HEALTHY_CLASSES = ["massive/meandering alive", "other coral alive", "branching alive", "acropora alive", "pocillopora alive", "table acropora alive", "stylophora alive", "meandering alive", "millepora", "turbinaria"]
BLEACHED_CLASSES = ["other coral bleached", "branching bleached", "massive/meandering bleached", "meandering bleached"]
DEAD_CLASSES = ["other coral dead", "massive/meandering dead", "branching dead", "table acropora dead", "meandering dead"]

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/analyze", methods=["POST"])
def analyze_image():
    """Analyze uploaded or captured image"""
    try:
        img = None
        
        # Method 1: File upload
        if "image" in request.files:
            file = request.files["image"]
            img = Image.open(file.stream)
            print("Image received via file upload")
        
        # Method 2: JSON with base64 image
        elif request.json:
            image_data = request.json.get("image_data") or request.json.get("image")
            
            if image_data:
                print(f"Received image_data, length: {len(image_data)}")
                print(f"Data starts with: {image_data[:50]}...")
                
                # Handle data URL format: "data:image/jpeg;base64,/9j/4AAQ..."
                if "," in image_data:
                    # Split and get the base64 part after the comma
                    header, base64_data = image_data.split(",", 1)
                    print(f"Header: {header}")
                else:
                    # Already just base64 data
                    base64_data = image_data
                
                # Decode base64
                try:
                    img_bytes = base64.b64decode(base64_data)
                    print(f"Decoded {len(img_bytes)} bytes")
                    
                    # Check if it looks like an image (JPEG starts with FF D8 FF)
                    if len(img_bytes) > 3:
                        print(f"First bytes (hex): {img_bytes[:4].hex()}")
                    
                    img = Image.open(io.BytesIO(img_bytes))
                    print(f"Image opened: {img.size}, format: {img.format}")
                except Exception as decode_error:
                    print(f"Base64 decode error: {decode_error}")
                    return jsonify({"error": f"Failed to decode image: {str(decode_error)}"}), 400
            else:
                return jsonify({"error": "No image_data in JSON"}), 400
        
        # Method 3: Form data
        elif request.form and "image_data" in request.form:
            image_data = request.form["image_data"]
            if "," in image_data:
                base64_data = image_data.split(",", 1)[1]
            else:
                base64_data = image_data
            img_bytes = base64.b64decode(base64_data)
            img = Image.open(io.BytesIO(img_bytes))
            print("Image received via form data")
        
        else:
            return jsonify({"error": "No image provided. Send 'image' file or 'image_data' in JSON"}), 400
        
        if img is None:
            return jsonify({"error": "Could not process image"}), 400
        
        # Convert to RGB numpy array
        img_rgb = img.convert("RGB")
        img_np = np.array(img_rgb)
        
        print(f"Running detection on image: {img_np.shape}")
        
        # Run detection
        results = model.predict(img_np, conf=0.25, retina_masks=True, verbose=False)
        
        # Get annotated image
        annotated = results[0].plot()
        
        # Calculate health metrics
        health_analysis = analyze_coral_health(results[0])
        
        # Convert annotated image to base64
        annotated_bgr = cv2.cvtColor(annotated, cv2.COLOR_RGB2BGR)
        _, buffer = cv2.imencode(".jpg", annotated_bgr, [cv2.IMWRITE_JPEG_QUALITY, 90])
        img_base64 = base64.b64encode(buffer).decode("utf-8")
        
        return jsonify({
            "success": True,
            "annotated_image": f"data:image/jpeg;base64,{img_base64}",
            "health_analysis": health_analysis
        })
        
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500

def analyze_coral_health(result):
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
    
    names = result.names  # Get names from model
    
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
        
        # Health score: 100 = all healthy, 0 = all dead
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

if __name__ == "__main__":
    import socket
    import argparse
    
    parser = argparse.ArgumentParser(description='Coral Bleach Detector Web App')
    parser.add_argument('--https', action='store_true', help='Enable HTTPS with self-signed cert')
    parser.add_argument('--port', type=int, default=5000, help='Port to run on')
    args = parser.parse_args()
    
    # Get local IP
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(('8.8.8.8', 80))
        local_ip = s.getsockname()[0]
    except:
        local_ip = '127.0.0.1'
    finally:
        s.close()
    
    protocol = 'https' if args.https else 'http'
    
    print("\n🌊 Coral Bleach Detector Web App")
    print("=" * 50)
    print(f"\n📱 Access URL: {protocol}://{local_ip}:{args.port}")
    print(f"💻 Local URL: {protocol}://localhost:{args.port}")
    if args.https:
        print("\n  Accept the security warning in your browser:")
        print("   Chrome: Click 'Advanced' → 'Proceed to site'")
        print("   Safari: Click 'Show Details' → 'visit this website'")
    print("=" * 50)
    
    if args.https:
        # Use adhoc SSL (generates temporary self-signed cert)
        app.run(host="0.0.0.0", port=args.port, debug=False, ssl_context='adhoc')
    else:
        # Run without SSL for local development
        app.run(host="0.0.0.0", port=args.port, debug=True)