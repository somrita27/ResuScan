from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
import fitz
import docx
from app.routes.upload import router as upload_router
from app.routes.analyze import router as analyze_router

app = FastAPI(
    title="ResuScan API",
    description="AI Resume Summarizer & Career Assistant Backend",
    version="1.0.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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

app.include_router(upload_router)
app.include_router(analyze_router)