#!/usr/bin/env python
import sys
import warnings
import base64
import os
from datetime import datetime
from aqua_trace.crew import CoralWatchCrew

warnings.filterwarnings("ignore", category=SyntaxWarning, module="pysbd")

def encode_image_to_base64(image_path):
    """Convert image file to base64 data URI for AI vision models."""
    if not os.path.exists(image_path):
        raise FileNotFoundError(f"Image file not found: {image_path}")
    
    with open(image_path, 'rb') as image_file:
        encoded = base64.b64encode(image_file.read()).decode('utf-8')
    
    # Determine MIME type from extension
    ext = os.path.splitext(image_path)[1].lower()
    mime_types = {
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.gif': 'image/gif',
        '.webp': 'image/webp'
    }
    mime_type = mime_types.get(ext, 'image/jpeg')
    
    return f"data:{mime_type};base64,{encoded}"

def run():
    """
    Run the CoralWatch crew.
    """
    # Inputs simulating a user uploading a photo via WhatsApp or Web App
    image_path = 'C:/Users/modij/Aqua_trace/aqua_trace/coral_image.jpeg'
    
    # Check if image exists and encode it, otherwise use a placeholder
    if os.path.exists(image_path):
        image_data = encode_image_to_base64(image_path)
    else:
        # For demo purposes, provide a descriptive placeholder
        image_data = "No image available. Using sample description: Coral reef with visible white patches indicating potential bleaching."
        print(f"Warning: Image not found at {image_path}. Using placeholder description.")
    
    inputs = {
        'image_source': image_data,
        'latitude': 10.345, # Example coordinates (e.g., Lakshadweep or Great Barrier Reef)
        'longitude': 72.345,
        'user_id': 'user_12345',
        'current_date': str(datetime.now().date())
    }

    try:
        CoralWatchCrew().crew().kickoff(inputs=inputs)
    except Exception as e:
        raise Exception(f"An error occurred while running the CoralWatch crew: {e}")

def train():
    """
    Train the crew for a given number of iterations.
    """
    inputs = {
        'image_source': 'C:/Users/modij/Aqua_trace/aqua_trace/coral_image.jpeg',
        'latitude': 10.345,
        'longitude': 72.345,
        'user_id': 'test_user',
        'current_date': str(datetime.now().date())
    }
    try:
        CoralWatchCrew().crew().train(n_iterations=int(sys.argv[1]), filename=sys.argv[2], inputs=inputs)
    except Exception as e:
        raise Exception(f"An error occurred while training the crew: {e}")

def replay():
    """
    Replay the crew execution from a specific task.
    """
    try:
        CoralWatchCrew().crew().replay(task_id=sys.argv[1])
    except Exception as e:
        raise Exception(f"An error occurred while replaying the crew: {e}")

def test():
    """
    Test the crew execution and returns the results.
    """
    inputs = {
        'image_source': 'C:/Users/modij/Aqua_trace/aqua_trace/coral_image.jpeg',
        'latitude': 10.345,
        'longitude': 72.345,
        'user_id': 'test_user',
        'current_date': str(datetime.now().date())
    }
    try:
        CoralWatchCrew().crew().test(n_iterations=int(sys.argv[1]), eval_llm=sys.argv[2], inputs=inputs)
    except Exception as e:
        raise Exception(f"An error occurred while testing the crew: {e}")