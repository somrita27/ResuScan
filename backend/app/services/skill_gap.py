from app.utils.skills import SKILLS


def extract_job_skills(job_description: str):

    found = []

    text = job_description.lower()

    for skill in SKILLS:

        if skill.lower() in text:
            found.append(skill)

    return sorted(set(found))


def analyze_skill_gap(resume_skills, job_description):

    job_skills = extract_job_skills(job_description)

    matched = sorted(
        set(resume_skills) & set(job_skills)
    )

    missing = sorted(
        set(job_skills) - set(resume_skills)
    )

    return {
        "matched_skills": matched,
        "missing_skills": missing,
        "match_percentage": (
            round(len(matched) / len(job_skills) * 100, 2)
            if job_skills else 0
        )
    }