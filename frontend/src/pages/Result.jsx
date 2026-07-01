import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/Logo.png";
import {
  FaArrowLeft,
  FaChartBar,
  FaFileAlt,
  FaTools,
  FaStar,
  FaBriefcase,
  FaChartLine,
  FaLightbulb,
  FaTimesCircle,
  FaCheckCircle,
  FaDownload,
  FaCopy
} from "react-icons/fa";

function Result({ darkMode }) {

  const navigate = useNavigate();
const summary = `
Highly motivated Computer Science student with strong
knowledge of Java, React, SQL, Firebase and Web Development.
Experienced in building responsive web applications and
AI-powered projects with problem-solving skills.
`;

const skills = [
  "Java",
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "SQL",
  "Firebase",
  "Git",
  "GitHub",
  "Problem Solving"
];

const atsScore = 88;

const predictedRole = "Frontend Developer";

const confidence = "High";

let atsColor = "#2563eb";
let atsText = "Good Match";

if (atsScore >= 90) {
  atsColor = "#10b981";
  atsText = "Excellent Match";
} else if (atsScore >= 75) {
  atsColor = "#2563eb";
  atsText = "Good Match";
} else if (atsScore >= 60) {
  atsColor = "#f59e0b";
  atsText = "Average Match";
} else {
  atsColor = "#ef4444";
  atsText = "Needs Improvement";
}

const missingSkills = [
  "Docker",
  "AWS",
  "Node.js",
  "REST API"
];

const suggestions = [
  "Add measurable achievements",
  "Improve keyword matching",
  "Include GitHub profile",
  "Add relevant certifications"
];

  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 768
  );

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );

  }, []);

  const copySummary = () => {
  navigator.clipboard.writeText(summary);

  alert("Summary copied successfully!");
};

const downloadReport = () => {
  alert(
    "PDF download will be available after backend integration."
  );
};

  return (

    <div
      style={{
        minHeight: "100vh",
width: "100%",
paddingBottom: "10px",

        background: darkMode
          ? "linear-gradient(135deg,#020817 0%,#08152F 25%,#102A6B 65%,#2563EB 100%)"
          : "linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb)",

        fontFamily: "Segoe UI, sans-serif"
      }}
    >

      {/* HEADER */}

      <div
        style={{
          background: darkMode
            ? "#000000"
            : "#ffffff",
          padding: "7px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: darkMode
            ? "1px solid #1f2937"
            : "1px solid #e5e7eb",
          boxShadow: darkMode
            ? "0 2px 10px rgba(0,0,0,.5)"
            : "0 2px 10px rgba(0,0,0,.08)"
        }}
      >

        <img
          src={logo}
          alt="Logo"
          style={{
            width: isMobile
              ? "140px"
              : "180px",

            height: "auto"
          }}
        />

        <button
          onClick={() => navigate("/upload")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: darkMode
              ? "#ffffff"
              : "#111827",
            fontWeight: "600",
            fontSize: "16px"
          }}
        >

          <FaArrowLeft />
          Back
        </button>

      </div>

      {/* BODY */}

      <div
        style={{
          maxWidth: "1200px",
          margin: "40px auto",
          padding: isMobile
            ? "10px"
            : "10px"
        }}
      >

        <h1
          style={{
            color: "#ffffff",
            textAlign: "center",
            fontSize: isMobile
              ? "32px"
              : "44px",
            marginBottom: "15px"
          }}
        >

          <FaChartBar
            style={{
              marginRight: "15px"
            }}
          />

          Resume Analysis Report

        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#d1d5db",
            fontSize: "17px",
            marginBottom: "60px"
          }}
        >
          Analyze your uploaded resume with AI-powered insights and recommendations.
        </p>

        <div
  style={{
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr"
      : "1fr 1fr",
    gap: "25px"
  }}
>

  {/* SUMMARY CARD */}

  <div
    style={{
      background: darkMode ? "#111827" : "#ffffff",
      borderRadius: "22px",
      padding: "28px",
      boxShadow: "0 10px 25px rgba(0,0,0,.15)"
    }}
  >

    <h2
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        color: darkMode ? "#ffffff" : "#111827",
        marginBottom: "20px"
      }}
    >
      <FaFileAlt color="#2563eb" />

      Resume Summary
    </h2>

    <p
      style={{
        color: darkMode ? "#d1d5db" : "#4b5563",
        lineHeight: "32px",
        fontSize: "16px",
        textAlign: "justify"
      }}
    >
      {summary}
    </p>

  </div>

  {/* SKILLS CARD */}

  <div
    style={{
      background: darkMode ? "#111827" : "#ffffff",
      borderRadius: "22px",
      padding: "28px",
      boxShadow: "0 10px 25px rgba(0,0,0,.15)"
    }}
  >

    <h2
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        color: darkMode ? "#ffffff" : "#111827",
        marginBottom: "20px"
      }}
    >
      <FaTools color="#10b981" />

      Skills Extracted
    </h2>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "12px"
      }}
    >

      {skills.map((skill) => (

        <div
          key={skill}
          style={{
            background: darkMode
              ? "#1f2937"
              : "#eff6ff",
            color: darkMode
              ? "#ffffff"
              : "#2563eb",
            padding: "10px 18px",
            borderRadius: "999px",
            fontWeight: "600",
            border: "1px solid #2563eb"
          }}
        >
          {skill}
        </div>

      ))}

    </div>

  </div>

  {/* ATS SCORE */}

<div
  style={{
    background: darkMode ? "#111827" : "#ffffff",
    borderRadius: "22px",
    padding: "30px",
    boxShadow: "0 10px 25px rgba(0,0,0,.15)",
    textAlign: "center"
  }}
>

  <h2
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "12px",
      color: darkMode ? "#ffffff" : "#111827",
      marginBottom: "25px"
    }}
  >
    <FaStar color="#fbbf24" />

    ATS Score
  </h2>

  <div
    style={{
      width: "150px",
      height: "150px",
      margin: "0 auto",
      borderRadius: "50%",
      border: `10px solid ${atsColor}`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "42px",
      fontWeight: "700",
      color: atsColor
    }}
  >
    {atsScore}%
  </div>

  <p
  style={{
    marginTop: "22px",
    color: atsColor,
    fontWeight: "700",
    fontSize: "18px"
  }}
>
  {atsText}
</p>

</div>

{/* JOB ROLE */}

<div
  style={{
    background: darkMode ? "#111827" : "#ffffff",
    borderRadius: "22px",
    padding: "30px",
    boxShadow: "0 10px 25px rgba(0,0,0,.15)"
  }}
>

  <h2
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      color: darkMode ? "#ffffff" : "#111827",
      marginBottom: "30px"
    }}
  >
    <FaBriefcase color="#8b5cf6" />

    Predicted Job Role
  </h2>

  <h1
    style={{
      color: "#2563eb",
      fontSize: isMobile ? "28px" : "34px",
      marginBottom: "20px"
    }}
  >
    {predictedRole}
  </h1>

  <div
    style={{
      background: darkMode ? "#1f2937" : "#eff6ff",
      borderRadius: "12px",
      padding: "14px",
      display: "inline-block",
      color: darkMode ? "#ffffff" : "#2563eb",
      fontWeight: "600"
    }}
  >
    Confidence: {confidence}
  </div>

</div>

{/* SKILL GAP */}

<div
  style={{
    background: darkMode ? "#111827" : "#ffffff",
    borderRadius: "22px",
    padding: "28px",
    boxShadow: "0 10px 25px rgba(0,0,0,.15)"
  }}
>

  <h2
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      color: darkMode ? "#ffffff" : "#111827",
      marginBottom: "22px"
    }}
  >
    <FaChartLine color="#ef4444" />

    Skill Gap Analysis
  </h2>

  <p
    style={{
      color: darkMode ? "#d1d5db" : "#6b7280",
      fontWeight: "600",
      marginBottom: "18px"
    }}
  >
    Missing Skills
  </p>

  {missingSkills.map((skill) => (

    <div
      key={skill}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "14px",
        color: darkMode ? "#ffffff" : "#374151"
      }}
    >

      <FaTimesCircle
        size={15}
        color="#ef4444"
      />

      {skill}

    </div>

  ))}

</div>

{/* SUGGESTIONS */}

<div
  style={{
    background: darkMode ? "#111827" : "#ffffff",
    borderRadius: "22px",
    padding: "28px",
    boxShadow: "0 10px 25px rgba(0,0,0,.15)"
  }}
>

  <h2
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      color: darkMode ? "#ffffff" : "#111827",
      marginBottom: "22px"
    }}
  >

    <FaLightbulb color="#f59e0b" />

    Resume Suggestions

  </h2>

  <p
    style={{
      color: darkMode ? "#d1d5db" : "#6b7280",
      fontWeight: "600",
      marginBottom: "18px"
    }}
  >
    Recommended Improvements
  </p>

  {suggestions.map((item) => (

    <div
      key={item}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "14px",
        color: darkMode ? "#ffffff" : "#374151"
      }}
    >

      <FaCheckCircle
        size={15}
        color="#10b981"
      />

      {item}

    </div>

  ))}

</div>


</div>

{/* ACTION BUTTONS */}

<div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: isMobile ? "column" : "row",
    gap: "20px",
    marginTop: "90px",
    marginBottom: "3px"
  }}
>

  {/* DOWNLOAD */}

  <button
    onClick={downloadReport}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      padding: "15px 28px",
      border: "none",
      borderRadius: "14px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "600",
      color: "#ffffff",
      background: "#10b981",
      Hover: "#059669",
      transition: ".3s",
      minWidth: "220px"
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.transform =
        "translateY(-3px)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.transform =
        "translateY(0px)")
    }
  >
    <FaDownload />

    Download Report
  </button>

  {/* COPY */}

  <button
    onClick={copySummary}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      padding: "15px 28px",
      borderRadius: "14px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "600",
      minWidth: "220px",
      border: "2px solid #64748b",
      background: "#f8fafc",
      color: "#2563eb",
      transition: ".3s"
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.transform =
        "translateY(-3px)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.transform =
        "translateY(0px)")
    }
  >
    <FaCopy />

    Copy Summary
  </button>

</div>

      </div>

    </div>

  );

}

export default Result;