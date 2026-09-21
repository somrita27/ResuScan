from fastapi import APIRouter
from pydantic import BaseModel
from typing import Optional
from app.services.skill_gap import analyze_skill_gap
from app.services.text_cleaner import clean_text
from app.services.resume_analyzer import analyze_resume as analyze_resume_data
from app.services.job_match import calculate_job_match


router = APIRouter(
    prefix="/analyze",
    tags=["Analysis"]
)

class AnalyzeRequest(BaseModel):
    resume_text: str
    job_description: Optional[str] = None

@router.post("/")
async def analyze_resume(request: AnalyzeRequest):

    resume_text = clean_text(request.resume_text)

    resume_data = analyze_resume_data(resume_text)

    
    analysis = None
    if request.job_description:
        analysis = calculate_job_match(
            resume_data["skills"],
            request.job_description,
            80
        )

    return {
        "message": "Analysis completed.",
        "analysis_mode":
            "job"
            if request.job_description
            else "resume",
        "analysis": analysis
    }