# ResuScan

### AI-Powered Resume & Career Assistant
ResuScan is an AI-powered resume analysis and career assistance platform designed to help users understand, improve, and evaluate their resumes against job opportunities.
It analyzes uploaded resumes, generates meaningful insights, calculates ATS-oriented scores, identifies skills, predicts suitable career roles, compares resumes with job descriptions, highlights skill gaps, and provides personalized suggestions.



## Features

### Resume Analysis
- Upload your resume and analyze it using AI.
- Extract important information and skills from the resume.
- Generate an AI-powered resume summary.
- Identify areas that can be improved.

### ATS Score
- Calculate a dynamic ATS-oriented resume score.
- Evaluate the resume based on relevant resume information.
- Display the score in an easy-to-understand format.

### Career Role Prediction
- Predict a suitable career role based on the analyzed resume.
- Helps users understand which career direction matches their current profile.

### Job Mode
- Analyze a resume together with a job description.
- Compare the candidate's skills with job requirements.
- Identify the best matching job.
- Highlight missing or required skills.

### Skill Gap Analysis
- Identify skills that are missing for a particular job.
- Helps users understand what they should learn or improve.

### Personalized Suggestions
- Provides resume improvement suggestions.
- Suggestions are generated dynamically based on the analysis.

### Analysis History
- Automatically saves previous resume analyses.
- Search through previous analyses.
- View previous results.
- Download previous reports.
- Delete unwanted history entries.

### Professional PDF Reports
- Generate downloadable PDF reports.
- Includes resume/job analysis information, scores, skills, suggestions, and other insights.
- Reports can also be downloaded directly from History.

### Copy Report
- Copy the complete analysis report to the clipboard for easy sharing or saving.

### User Profile
- Firebase Authentication for user accounts.
- Profile information and account statistics.
- Displays total analyses, average ATS score, and latest analysis information.

### Product Demo
- Includes a screen-recorded demonstration of the ResuScan application.



## Tech Stack

### Frontend
- React.js
- Vite
- JavaScript
- HTML
- CSS
- React Router
- jsPDF

### Backend
- Python
- FastAPI
- REST API

### AI / Machine Learning
- Python-based resume analysis
- Natural Language Processing
- Machine Learning-based analysis

### Database / Authentication
- Firebase Authentication
- Local Storage for analysis history

### Development Tools
- Visual Studio Code
- Git
- GitHub
- npm
- Uvicorn



## Project Structure

```text
ResuScan/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── routes/
│   │   │   ├── analyze.py
│   │   │   └── upload.py
│   │   ├── services/
│   │   └── utils/
│   │
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── UploadResume.jsx
│   │   │   ├── Result.jsx
│   │   │   ├── History.jsx
│   │   │   └── Profile.jsx
│   │   ├── services/
│   │   └── ...
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md