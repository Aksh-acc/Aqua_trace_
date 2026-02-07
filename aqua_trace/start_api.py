#!/usr/bin/env python3
"""
Start the AquaTrace Agent API server.
Run with: python start_api.py
"""

import uvicorn
import os
from pathlib import Path

# Ensure we're in the right directory for relative imports
os.chdir(Path(__file__).parent)

if __name__ == "__main__":
    uvicorn.run(
        "src.aqua_trace.api_server:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    )
