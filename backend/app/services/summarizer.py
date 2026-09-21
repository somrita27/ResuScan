import os

from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def generate_summary(resume_data):

    prompt = f"""
You are an expert HR recruiter.

Generate a professional resume summary in about 80-120 words.

Candidate Information:

Name:
{resume_data.get("name")}

Skills:
{", ".join(resume_data.get("skills", []))}

Education:
{", ".join(resume_data.get("education", []))}

Experience:
{", ".join(resume_data.get("experience", []))}

Projects:
{", ".join(resume_data.get("projects", []))}

Certifications:
{", ".join(resume_data.get("certifications", []))}

Rules:
- Professional tone
- Third-person writing
- No bullet points
- Mention strengths naturally
- Keep it concise
"""

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
        )
        return response.text.strip()

    except Exception:
        return "AI summary is temporarily unavailable."