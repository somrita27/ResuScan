import re
from app.utils.skills import SKILLS

def extract_email(text: str):

    match = re.search(
        r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}",
        text
    )

    return match.group() if match else ""


def extract_phone(text: str):

    match = re.search(
        r"(\+91[\-\s]?)?[6-9]\d{9}",
        text
    )

    return match.group() if match else ""


def extract_name(text: str):

    lines = text.split("\n")

    for line in lines:

        line = line.strip()

        if len(line) > 3:
            return line

    return ""

def extract_skills(text: str):

    found = []

    lower_text = text.lower()

    for skill in SKILLS:

        if skill.lower() in lower_text:
            found.append(skill)

    return sorted(set(found))

def extract_education(text: str):

    keywords = [
        "education",
        "qualification",
        "academic",
        "university",
        "college",
        "institute"
    ]

    lines = text.split("\n")

    education = []

    for line in lines:

        lower = line.lower()

        if any(keyword in lower for keyword in keywords):
            education.append(line.strip())

    return list(dict.fromkeys(education))


def extract_experience(text: str):

    keywords = [
        "experience",
        "intern",
        "internship",
        "software engineer",
        "developer",
        "project"
    ]

    lines = text.split("\n")

    experience = []

    for line in lines:

        lower = line.lower()

        if any(keyword in lower for keyword in keywords):
            experience.append(line.strip())

    return list(dict.fromkeys(experience))

def extract_projects(text: str):

    keywords = [
        "project",
        "projects",
        "developed",
        "built",
        "created"
    ]

    projects = []

    for line in text.split("\n"):

        if any(word in line.lower() for word in keywords):
            projects.append(line.strip())

    return list(dict.fromkeys(projects))


def extract_certifications(text: str):

    keywords = [
        "certificate",
        "certification",
        "certifications",
        "google",
        "coursera",
        "udemy",
        "nptel"
    ]

    certifications = []

    for line in text.split("\n"):

        if any(word in line.lower() for word in keywords):
            certifications.append(line.strip())

    return list(dict.fromkeys(certifications))