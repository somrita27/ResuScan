from fastapi import APIRouter, UploadFile, File, HTTPException
from pathlib import Path
from datetime import datetime
import shutil
from app.services.text_extractor import extract_text
from app.services.text_cleaner import clean_text
from app.services.resume_analyzer import analyze_resume
from app.services.ats_calculator import calculate_ats_score
from app.services.summarizer import generate_summary
from app.services.role_predictor import predict_role
from app.services.resume_suggestions import (
    generate_resume_suggestions
)

router = APIRouter(
    prefix="/upload",
    tags=["Upload"]
)

# Create uploads folder if it doesn't exist
UPLOAD_FOLDER = Path("uploads")
UPLOAD_FOLDER.mkdir(exist_ok=True)

# Allowed file extensions
ALLOWED_EXTENSIONS = {".pdf", ".doc", ".docx"}

# Allowed MIME types
ALLOWED_CONTENT_TYPES = {
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
}


@router.post("/")
async def upload_resume(file: UploadFile = File(...)):

    # Get file extension
    extension = Path(file.filename).suffix.lower()

    # Validate extension
    if extension not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=400,
            detail="Only PDF, DOC and DOCX files are allowed."
        )

    # Validate MIME type
    if file.content_type not in ALLOWED_CONTENT_TYPES:
        raise HTTPException(
            status_code=400,
            detail="Invalid file type."
        )

    # Generate unique filename
    base_name = Path(file.filename).stem
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    unique_filename = f"{base_name}_{timestamp}{extension}"

    # Save file
    file_path = UPLOAD_FOLDER / unique_filename

    with file_path.open("wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Extract resume text
    resume_text = extract_text(str(file_path))

    resume_text = clean_text(resume_text)

    resume_data = analyze_resume(resume_text)

    resume_data["text"] = resume_text
    ats_result = calculate_ats_score(resume_data)

    summary = generate_summary(resume_data)

    resume_suggestions = generate_resume_suggestions(
        resume_data
    )

    job_role = predict_role(
        resume_data.get("skills", [])
    )

    return {
    "message": "Resume uploaded successfully!",
    "analysis_mode": "resume",

    "original_filename": file.filename,
    "saved_filename": unique_filename,
    "saved_to": str(file_path),

    "resume": {
    **resume_data
    },
    "ats_score": ats_result["score"],
    "ats_breakdown": ats_result["breakdown"],
    "summary": summary,
    "resume_suggestions": resume_suggestions,
    "job_role": job_role
    }