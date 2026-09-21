ACTION_VERBS = [
    "developed",
    "created",
    "implemented",
    "designed",
    "built",
    "managed",
    "led",
    "improved",
    "optimized",
    "achieved",
    "delivered",
    "organized",
    "analyzed",
    "collaborated",
    "engineered",
]

LINK_KEYWORDS = [
    "github.com",
    "linkedin.com",
]


def calculate_ats_score(resume_data):

    text = resume_data.get("text", "").lower()

    breakdown = {
        "Contact Information": 0,
        "Skills": 0,
        "Education": 0,
        "Experience": 0,
        "Projects": 0,
        "Certifications": 0,
        "Resume Length": 0,
        "Action Verbs": 0,
        "Professional Links": 0,
    }

    # -------------------------
    # Contact Information (15)
    # -------------------------

    if resume_data.get("name"):
        breakdown["Contact Information"] += 5

    if resume_data.get("email"):
        breakdown["Contact Information"] += 5

    if resume_data.get("phone"):
        breakdown["Contact Information"] += 5

    # -------------------------
    # Skills (20)
    # -------------------------

    skills = resume_data.get("skills", [])

    breakdown["Skills"] = min(len(skills) * 2, 20)

    # -------------------------
    # Education (10)
    # -------------------------

    if resume_data.get("education"):
        breakdown["Education"] = 10

    # -------------------------
    # Experience (15)
    # -------------------------

    if resume_data.get("experience"):
        breakdown["Experience"] = 15

    # -------------------------
    # Projects (10)
    # -------------------------

    if resume_data.get("projects"):
        breakdown["Projects"] = 10

    # -------------------------
    # Certifications (10)
    # -------------------------

    if resume_data.get("certifications"):
        breakdown["Certifications"] = 10

    # -------------------------
    # Resume Length (10)
    # -------------------------

    if len(text) >= 1000:
        breakdown["Resume Length"] = 10

    elif len(text) >= 600:
        breakdown["Resume Length"] = 7

    elif len(text) >= 300:
        breakdown["Resume Length"] = 5

    # -------------------------
    # Action Verbs (5)
    # -------------------------

    action_count = sum(
        1
        for word in ACTION_VERBS
        if word in text
    )

    if action_count >= 5:
        breakdown["Action Verbs"] = 5

    elif action_count >= 3:
        breakdown["Action Verbs"] = 3

    elif action_count >= 1:
        breakdown["Action Verbs"] = 2

    # -------------------------
    # Professional Links (5)
    # -------------------------

    if any(link in text for link in LINK_KEYWORDS):
        breakdown["Professional Links"] = 5

    score = sum(breakdown.values())

    return {
        "score": min(score, 100),
        "breakdown": breakdown,
    }