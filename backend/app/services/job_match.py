import re
from app.services.skill_dictionary import TECH_SKILLS
from app.services.role_matcher import find_best_job_match
from app.services.job_suggestions import (
    generate_job_suggestions
)

def calculate_job_match(
    resume_skills,
    job_description,
    resume_quality_score
):
    
    jd_words = set(
        re.findall(
            r"[A-Za-z0-9+#.]+",
            job_description.lower()
        )
    )

    jd_skills = {
        word
        for word in jd_words
        if word in TECH_SKILLS
    }

    matched = []

    missing = []

    for skill in resume_skills:

        if skill.lower() in jd_words:
            matched.append(skill)

    for word in jd_skills:

        if (
            word.isalpha()
            and len(word) > 2
            and word
            not in [
                s.lower()
                for s in resume_skills
            ]
        ):
            missing.append(word)

    if len(jd_skills) == 0:

        skill_match = 0

    else:

        skill_match = (
            len(matched)
            /
            len(jd_skills)
        ) * 100

    final_score = round(
        skill_match * 0.7
        +
        resume_quality_score * 0.3
    )

    job_role = find_best_job_match(jd_skills)

    job_suggestions = generate_job_suggestions(
        missing
    )

    return {
        "score": final_score,
        "matched_skills": sorted(list(set(matched))),
        "missing_skills": sorted(list(set(missing))),
        "best_job_match": job_role["role"],
        "fit_confidence": job_role["confidence"],
        "fit_level": job_role["fit_level"],
        "job_suggestions": job_suggestions
    }