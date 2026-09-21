SUGGESTION_MAP = {

    "docker":
        "Learn Docker and add a containerized project to your portfolio.",

    "aws":
        "Gain hands-on AWS experience through small deployment projects.",

    "azure":
        "Explore Microsoft Azure fundamentals and cloud services.",

    "gcp":
        "Practice deploying applications using Google Cloud Platform.",

    "rest":
        "Build REST APIs using FastAPI or Node.js and showcase them.",

    "rest api":
        "Build REST APIs using FastAPI or Node.js and showcase them.",

    "graphql":
        "Learn GraphQL and build an API using GraphQL.",

    "react":
        "Strengthen your React skills with larger frontend projects.",

    "javascript":
        "Improve JavaScript fundamentals including ES6+ features.",

    "typescript":
        "Learn TypeScript to build more scalable frontend applications.",

    "sql":
        "Practice writing SQL queries and database optimization.",

    "mongodb":
        "Build CRUD applications using MongoDB.",

    "mysql":
        "Gain practical experience with relational database design.",

    "python":
        "Strengthen Python problem-solving and backend development skills.",

    "java":
        "Practice Java OOP concepts and backend development.",

    "git":
        "Use Git effectively and maintain well-documented repositories.",

    "github":
        "Keep your GitHub profile active with quality projects.",

    "linux":
        "Improve Linux command-line and server management skills.",

    "kubernetes":
        "Learn Kubernetes by deploying containerized applications.",

    "jenkins":
        "Explore CI/CD pipelines using Jenkins."
}

def generate_job_suggestions(missing_skills):

    suggestions = []

    for skill in missing_skills:

        if skill.lower() in SUGGESTION_MAP:

            suggestions.append(
                SUGGESTION_MAP[skill.lower()]
            )

    return suggestions