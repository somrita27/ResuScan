ROLE_SKILLS = {
    "Frontend Developer": [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "TypeScript"
    ],

    "Backend Developer": [
        "Python",
        "Java",
        "FastAPI",
        "Flask",
        "Node.js",
        "SQL"
    ],

    "Full Stack Developer": [
        "React",
        "Node.js",
        "JavaScript",
        "MongoDB",
        "SQL"
    ],

    "Data Analyst": [
        "Python",
        "SQL",
        "Excel",
        "Power BI",
        "Tableau"
    ],

    "Machine Learning Engineer": [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Machine Learning"
    ],

    "Android Developer": [
        "Java",
        "Kotlin",
        "Android"
    ],

    "DevOps Engineer": [
        "Docker",
        "AWS",
        "Git",
        "Linux"
    ]
}


def predict_role(skills):

    best_role = "Software Developer"

    best_score = 0

    for role, required_skills in ROLE_SKILLS.items():

        score = len(set(skills) & set(required_skills))

        if score > best_score:
            best_score = score
            best_role = role

    confidence = min(100, 60 + best_score * 10)

    if confidence >= 90:
        level = "Very High"
    elif confidence >= 80:
        level = "High"
    elif confidence >= 70:
        level = "Medium"
    else:
        level = "Low"

    return {
        "role": best_role,
        "confidence": confidence,
        "level": level
    }