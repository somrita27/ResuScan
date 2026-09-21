import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {uploadResume,analyzeResume,} from "../services/api";
import logo from "../assets/Logo.png";
import {
  FaBars,
  FaUser,
  FaHistory,
  FaMoon,
  FaSun,
  FaSignOutAlt,
} from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

function UploadResume({ darkMode, setDarkMode }) {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const [showJobDescription, setShowJobDescription] =
    useState(false);

  const [jobDescription, setJobDescription] =
    useState("");

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [progress, setProgress] = useState(0);

  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

const handleAnalyze = async () => {
  if (!selectedFile) {
    setErrorMessage("⚠ Please upload a resume first.");
    return;
    return;
  }

  setLoading(true);
  setErrorMessage("");
  setProgress(0);

  const formData = new FormData();
  formData.append("file", selectedFile);

  try {
    let value = 0;

    const interval = setInterval(() => {
      value += 10;
      setProgress(value);

      if (value >= 90) {
        clearInterval(interval);
      }
    }, 200);

    // -----------------------------
    // STEP 1: Upload Resume
    // -----------------------------
    const uploadResponse = await uploadResume(formData);

    let finalResponse = uploadResponse;

    // -----------------------------
    // STEP 2: If Job Description exists,
    // perform Job Match Analysis
    // -----------------------------
    const hasJobDescription =
      showJobDescription &&
      jobDescription.trim().length > 0;

    if (hasJobDescription) {
      const analyzeResponse = await analyzeResume(
        uploadResponse.resume.text,
        jobDescription
      );

      finalResponse = {
        ...uploadResponse,
        ...analyzeResponse,
      };
    }

    setProgress(100);

    setTimeout(() => {
      navigate("/result", {
        state: {
          backendData: finalResponse,
          fileName: selectedFile.name,
          jobDescription,
        },
      });

      setLoading(false);
    }, 300);

  } catch (error) {
    console.error(error);

    if (error.response) {
  setErrorMessage(
    error.response.data.detail ||
    "Something went wrong."
  );
} else {
  setErrorMessage(
    "Unable to connect to the server."
  );
}

    setLoading(false);
    setProgress(0);
  }
};

  return (
    <div
      style={{
        minHeight: "100vh",
        background: darkMode
  ? "linear-gradient(135deg,#020817 0%,#08152F 25%,#102A6B 65%,#2563EB 100%)"
  : "linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb)",
        fontFamily: "Segoe UI, sans-serif"
      }}
    >
      {/* HEADER */}

      <div
  style={{
    background: darkMode ? "#000000" : "#ffffff",
    padding: "7px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: darkMode
      ? "1px solid #1f2937"
      : "1px solid #e5e7eb",
    boxShadow: darkMode
      ? "0 2px 10px rgba(0,0,0,0.5)"
      : "0 2px 10px rgba(0,0,0,0.08)"
  }}
>
        <img
          src={logo}
          alt="logo"
          style={{
            width: isMobile ? "140px" : "180px",
            height: "auto"
          }}
        />

        <div style={{ position: "relative" }}>
          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              fontSize: "24px",
              color: darkMode ? "#ffffff" : "#000000"
            }}
          >
            <FaBars />
          </button>

          {menuOpen && (
            <div
              style={{
                position: "absolute",
                right: 0,
                top: "45px",
                background: darkMode ? "#1f2937" : "#ffffff",
                borderRadius: "15px",
                width: "230px",
                boxShadow:"0 10px 25px rgba(0,0,0,0.15)",
                padding: "10px 0",
                zIndex: 100
              }}
            >
              <div
  onClick={() => {
    setMenuOpen(false);
    navigate("/profile");
  }}
  style={{
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 20px",
    color: darkMode ? "#ffffff" : "#111827",
    cursor: "pointer"
  }}
>
  <FaUser />
  <span>My Profile</span>
</div>

              <div
  onClick={() => {
    setMenuOpen(false);
    navigate("/history");
  }}
  style={{
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 20px",
    color: darkMode ? "#ffffff" : "#111827",
    cursor: "pointer"
  }}
>
  <FaHistory />
  <span>History</span>
</div>

              <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 20px",
    color: darkMode ? "#ffffff" : "#111827",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }}
  >
    {darkMode ? <FaSun /> : <FaMoon />}
    <span>Appearance</span>
  </div>

  <label
  style={{
    position: "relative",
    display: "inline-block",
    width: "46px",
    height: "24px",
    cursor: "pointer"
  }}
>
  <input
    type="checkbox"
    checked={darkMode}
    onChange={() => setDarkMode(!darkMode)}
    style={{
      opacity: 0,
      width: 0,
      height: 0
    }}
  />

  <span
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: darkMode ? "#29b154" : "#d1d5db",
      borderRadius: "30px",
      transition: "0.3s"
    }}
  >
    <span
      style={{
        position: "absolute",
        height: "18px",
        width: "18px",
        left: darkMode ? "24px" : "3px",
        top: "3px",
        background: "#fff",
        borderRadius: "50%",
        transition: "0.3s"
      }}
    />
  </span>
</label>
</div>

<div
  onClick={() => {
    setMenuOpen(false);
    navigate("/");
  }}
  style={{
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 20px",
    cursor: "pointer",
    color: "#ef4444"
  }}
>
  <FaSignOutAlt />
  <span>Logout</span>
</div>

</div>        

)}              

</div>          

</div>       

      {/* BODY */}

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "40px 20px"
        }}
      >
        <h1
          style={{
            color: "#dbeafe",
            textAlign: "center"
          }}
        >
          Upload Your Resume
        </h1>

        <p
          style={{
            textAlign: "center",
            color: darkMode ? "#d1d5db" : "#dbeafe",
            marginBottom: "40px"
          }}
        >
          Upload your PDF/DOCX resume and get AI-powered insights.
        </p>

        {/* UPLOAD BOX */}

        <div
          style={{
            background: darkMode ? "rgba(13, 36, 91, 0.72)" : "#bcc9eb",
            border: darkMode
  ? "2px dashed #3b82f6"
  : "2px dashed #2563eb",
            borderRadius: "20px",
            padding: "40px",
            textAlign: "center",
            marginBottom: "25px"
          }}
        >
          
<IoDocumentTextOutline
  size={50}
  color={darkMode ? "#60a5fa" : "#2563eb"}
  style={{marginBottom: "18px"}}
/>

          <p
           style={{
    color: darkMode ? "#ffffff" : "#000000"
  }}>Upload PDF or DOCX Resume</p>

<input
  type="file"
  accept=".pdf,.docx"
  onChange={(e) => setSelectedFile(e.target.files[0])}
  style={{
    color: darkMode ? "#ffffff" : "#000000",
    marginTop: "10px"
  }}
/>

{selectedFile && (
  <div
    style={{
      marginTop: "18px",
      maxWidth: "100%",
      wordBreak: "break-word"
    }}
  >
    <p
      style={{
        color: "#2563eb",
        fontWeight: "600",
        marginBottom: "8px"
      }}
    >
      Selected File :
    </p>
<p
  style={{
    marginTop: "8px",
    color: darkMode ? "#ffffff" : "#2563eb",
    fontWeight: "500",
    fontSize: "15px",
    textAlign: "center",
    wordBreak: "break-word",
    padding: "0 20px"
  }}
>
  {selectedFile.name}
</p>

  </div>
)}

        
        </div>

        {/* ATS OPTION */}

        <div
          style={{
            marginBottom: "20px"
          }}
        >
          <label
  style={{
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer"
  }}
>
  <input
    type="checkbox"
    checked={showJobDescription}
    onChange={() =>
      setShowJobDescription(!showJobDescription)
    }
    style={{ marginRight: "10px" }}
  />

  Compare with Job Description
</label>
        </div>

        {/* JOB DESCRIPTION */}

        {showJobDescription && (
          <textarea
            value={jobDescription}
            onChange={(e) =>
              setJobDescription(
                e.target.value
              )
            }
            placeholder="Paste Job Description Here..."
            style={{
              width: "100%",
              minHeight: "180px",
              padding: "15px",
              borderRadius: "12px",
              border: "1px solid #cbd5e1",
              resize: "vertical",
              marginBottom: "25px",
              background: darkMode ? "rgba(13, 36, 91, 0.72)" : "#bcc9eb)",
              color: darkMode ? "#ffffff" : "#000000"
            }}
          />
        )}

{/* ERROR MESSAGE */}

{errorMessage && (
  <div
    style={{
      background: "#fee2e2",
      color: "#b91c1c",
      border: "1px solid #fecaca",
      borderRadius: "12px",
      padding: "14px",
      marginBottom: "20px",
      textAlign: "center",
      fontWeight: "600"
    }}
  >
    {errorMessage}
  </div>
)}

        {/* BUTTON */}

        <button
          onClick={handleAnalyze}
          style={{
            width: "100%",
            padding: "16px",
            border: "none",
            borderRadius: "12px",
            background: "linear-gradient(to right,#2563eb,#8b5cf6)",
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "17px",
            cursor: "pointer"
          }}
        >
          Analyze Resume
        </button>

        {/* PROGRESS BAR */}

        {loading && (
          <div
            style={{
              marginTop: "25px"
            }}
          >
            <div
              style={{
                width: "100%",
                height: "12px",
                background: darkMode ? "#374151" : "#e2e8f0",
                borderRadius: "10px",
                overflow: "hidden"
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  background:
                    "linear-gradient(to right,#2563eb,#8b5cf6)"
                }}
              />
            </div>

            <p
              style={{
                textAlign: "center",
                marginTop: "10px"
              }}
            >
              {progress}% Processing...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadResume;
