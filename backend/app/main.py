from fastapi import FastAPI

app = FastAPI(
    title="ResuScan API",
    description="AI Resume Summarizer & Career Assistant Backend",
    version="1.0.0"
)


@app.get("/")
def home():
    return {
        "message": "Welcome to ResuScan Backend 🚀"
    }


@app.get("/health")
def health():
    return {
        "status": "running"
    }