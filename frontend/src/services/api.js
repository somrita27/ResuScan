import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

// -----------------------------
// Upload Resume
// -----------------------------
export const uploadResume = async (formData) => {
  const response = await api.post(
    "/upload/",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

// -----------------------------
// Analyze Resume + Job Description
// -----------------------------
export const analyzeResume = async (
  resumeText,
  jobDescription
) => {
  const response = await api.post(
    "/analyze/",
    {
      resume_text: resumeText,
      job_description: jobDescription,
    }
  );

  return response.data;
};

export default api;