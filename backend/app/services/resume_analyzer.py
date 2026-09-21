from app.services.resume_parser import (
    extract_name,
    extract_email,
    extract_phone,
    extract_skills,
    extract_education,
    extract_experience,
    extract_projects,
    extract_certifications,
)


def analyze_resume(text: str):

    return {
        "name": extract_name(text),
        "email": extract_email(text),
        "phone": extract_phone(text),
        "skills": extract_skills(text),
        "education": extract_education(text),
        "experience": extract_experience(text),
        "projects": extract_projects(text),
        "certifications": extract_certifications(text),
    }