"""
YOLO Training Script for Coral Bleach Detection
Run this script directly from terminal for stable training on Windows.
"""

import os
# MUST be set BEFORE importing any other libraries
os.environ['KMP_DUPLICATE_LIB_OK'] = 'TRUE'
os.environ['OMP_NUM_THREADS'] = '1'
os.environ['MKL_NUM_THREADS'] = '1'

import torch
import gc

def main():
    # Clear GPU memory
    gc.collect()
    torch.cuda.empty_cache()
    
    print("="*60)
    print("CORAL BLEACH DETECTOR - YOLOv8 TRAINING")
    print("="*60)
    
    # Check GPU
    if torch.cuda.is_available():
        print(f"✅ GPU: {torch.cuda.get_device_name(0)}")
        print(f"   Memory: {torch.cuda.get_device_properties(0).total_memory / 1e9:.1f} GB")
    else:
        print("⚠️ No GPU available, using CPU")
    
    from ultralytics import YOLO
    
    # Load the YOLOv8 medium segmentation model
    print("\n📦 Loading YOLOv8m-seg model...")
    model = YOLO('yolov8m-seg.pt')
    
    # Train the model
    print("\n🚀 Starting training...")
    results = model.train(
        data='coral_dataset.yaml',
        epochs=50,                   # Training epochs
        imgsz=512,                   # Image size
        batch=2,                     # Small batch for stability
        device=0,                    # Use GPU
        project='runs/segment/coral_detector',
        name='yolov8m_seg_final',
        exist_ok=True,
        workers=0,                   # Disable multiprocessing (Windows)
        amp=True,                    # Mixed precision
        cache=False,                 # Don't cache images
        patience=15,                 # Early stopping patience
        verbose=True,
        save=True,                   # Save checkpoints
        save_period=5,               # Save every 5 epochs
        plots=True,                  # Generate plots
    )
    
    print("\n" + "="*60)
    print("✅ TRAINING COMPLETED!")
    print("="*60)
    print(f"📁 Results saved to: {results.save_dir}")
    print(f"🏆 Best weights: {results.save_dir}/weights/best.pt")
    
    # Run validation
    print("\n📊 Running validation...")
    metrics = model.val()
    print(f"   mAP50: {metrics.seg.map50:.4f}")
    print(f"   mAP50-95: {metrics.seg.map:.4f}")
    
    return results

if __name__ == '__main__':
    # This is required for Windows multiprocessing
    import multiprocessing
    multiprocessing.freeze_support()
    main()
