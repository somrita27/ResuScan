ROLE_DATABASE = {

    "Frontend Developer": {
        "react",
        "javascript",
        "typescript",
        "html",
        "css",
        "next.js",
        "tailwind",
        "bootstrap",
    },

    "Backend Developer": {
        "python",
        "java",
        "spring",
        "spring boot",
        "node.js",
        "express",
        "django",
        "flask",
        "fastapi",
        "sql",
        "mysql",
        "postgresql",
    },

    "Full Stack Developer": {
        "react",
        "javascript",
        "html",
        "css",
        "node.js",
        "express",
        "mongodb",
        "mysql",
        "sql",
        "git",
    },

    "AI / ML Engineer": {
        "python",
        "tensorflow",
        "pytorch",
        "scikit-learn",
        "opencv",
    },

    "Data Analyst": {
        "python",
        "sql",
        "excel",
        "power bi",
        "tableau",
    },

    "DevOps Engineer": {
        "docker",
        "kubernetes",
        "jenkins",
        "aws",
        "azure",
        "gcp",
        "linux",
    }
}

def find_best_job_match(jd_skills):

    best_role = "General Software Engineer"
    best_score = 0

    for role, role_skills in ROLE_DATABASE.items():

        matched = len(
            jd_skills.intersection(role_skills)
        )

        if matched > best_score:

            best_score = matched
            best_role = role

    confidence = round(
        (best_score / max(len(jd_skills), 1)) * 100
    )
    if confidence >= 90:
        fit_level = "Excellent"
    elif confidence >= 75:
        fit_level = "High"
    elif confidence >= 60:
        fit_level = "Moderate"
    else:
        fit_level = "Low"

    return {
        "role": best_role,
        "confidence": confidence,
        "fit_level": fit_level
    }