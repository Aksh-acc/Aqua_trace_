from __future__ import annotations

import base64
import os
import tempfile
from contextlib import contextmanager
from datetime import date, datetime
from pathlib import Path
from typing import Any, Optional

from fastapi import FastAPI, File, Form, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from dotenv import load_dotenv

from aqua_trace.crew import CoralWatchCrew


load_dotenv()  # load .env in project root if present


def _data_uri_from_bytes(content: bytes, filename: str) -> str:
    ext = Path(filename).suffix.lower()
    mime_types = {
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".png": "image/png",
        ".gif": "image/gif",
        ".webp": "image/webp",
    }
    mime_type = mime_types.get(ext, "image/jpeg")
    encoded = base64.b64encode(content).decode("utf-8")
    return f"data:{mime_type};base64,{encoded}"


@contextmanager
def _cwd(path: str):
    prev = os.getcwd()
    os.chdir(path)
    try:
        yield
    finally:
        os.chdir(prev)


def _safe_read_text(path: Path) -> Optional[str]:
    try:
        return path.read_text(encoding="utf-8")
    except FileNotFoundError:
        return None


class AnalyzeResponse(BaseModel):
    diagnosis_markdown: Optional[str] = Field(None, description="Vision agent diagnosis markdown.")
    user_response_markdown: Optional[str] = Field(None, description="Community manager WhatsApp response markdown.")
    crew_result: Optional[Any] = Field(None, description="Raw crew kickoff return (best-effort).")
    meta: dict[str, Any] = Field(default_factory=dict)


app = FastAPI(title="AquaTrace Agent API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health():
    return {"ok": True}


@app.post("/v1/agent/analyze", response_model=AnalyzeResponse)
async def analyze(
    image: UploadFile = File(...),
    latitude: float = Form(...),
    longitude: float = Form(...),
    user_id: str = Form("web_user"),
    current_date: str = Form(""),
):
    try:
        content = await image.read()
        if not content:
            raise HTTPException(status_code=400, detail="Empty image upload.")
        image_source = _data_uri_from_bytes(content, image.filename or "image.jpg")

        if current_date:
            # validate format loosely
            try:
                datetime.fromisoformat(current_date)
            except Exception:
                try:
                    date.fromisoformat(current_date)
                except Exception:
                    raise HTTPException(status_code=400, detail="current_date must be ISO format (YYYY-MM-DD).")
        else:
            current_date = str(datetime.now().date())

        inputs = {
            "image_source": image_source,
            "latitude": latitude,
            "longitude": longitude,
            "user_id": user_id,
            "current_date": current_date,
        }

        # Run the crew in an isolated temp working dir so output markdown files don't collide.
        with tempfile.TemporaryDirectory(prefix="aquatrace_") as tmp:
            out_dir = Path(tmp)
            with _cwd(tmp):
                try:
                    crew_result = CoralWatchCrew().crew().kickoff(inputs=inputs)
                except Exception as e:
                    raise HTTPException(status_code=500, detail=f"Crew execution failed: {e}")

                diagnosis_md = _safe_read_text(out_dir / "coral_health_diagnosis.md")
                response_md = _safe_read_text(out_dir / "whatsapp_response.md")

        return AnalyzeResponse(
            diagnosis_markdown=diagnosis_md,
            user_response_markdown=response_md,
            crew_result=crew_result,
            meta={
                "latitude": latitude,
                "longitude": longitude,
                "user_id": user_id,
                "current_date": current_date,
                "filename": image.filename,
            },
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

