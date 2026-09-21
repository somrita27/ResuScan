ACTION_VERBS = [
    "developed",
    "designed",
    "implemented",
    "created",
    "managed",
    "built",
    "optimized",
    "led",
]


def generate_resume_suggestions(resume_data):

    suggestions = []

    text = resume_data.get("text", "").lower()

    # -------------------------
    # Projects
    # -------------------------

    if not resume_data.get("projects"):
        suggestions.append(
            "Include at least one technical or academic project."
        )

    # -------------------------
    # Certifications
    # -------------------------

    if not resume_data.get("certifications"):
        suggestions.append(
            "Add relevant certifications to strengthen your resume."
        )

    # -------------------------
    # GitHub
    # -------------------------

    if "github.com" not in text:
        suggestions.append(
            "Include your GitHub profile to showcase your work."
        )

    # -------------------------
    # LinkedIn
    # -------------------------

    if "linkedin.com" not in text:
        suggestions.append(
            "Add your LinkedIn profile for better professional visibility."
        )

    # -------------------------
    # Resume Length
    # -------------------------

    if len(text) < 500:
        suggestions.append(
            "Expand your resume with more achievements or project details."
        )

    # -------------------------
    # Action Verbs
    # -------------------------

    action_count = sum(
        1
        for word in ACTION_VERBS
        if word in text
    )

    if action_count < 3:
        suggestions.append(
            "Use stronger action verbs such as Developed, Designed or Implemented."
        )

    return suggestions