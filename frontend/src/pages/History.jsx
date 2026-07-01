import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/Logo.png";

import {
  FaArrowLeft,
  FaHistory,
  FaSearch,
  FaFileAlt,
  FaCalendarAlt,
  FaBriefcase,
  FaStar,
  FaClipboardList,
  FaEye,
  FaDownload,
  FaTrashAlt
} from "react-icons/fa";

function History({ darkMode }) {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  
  const historyData = [
  {
    id: 1,
    file: "Resume_Frontend.pdf",
    date: "29 June 2026",
    role: "Frontend Developer",
    ats: "88%",
    summary: "Available"
  },
  {
    id: 2,
    file: "Resume_Java.pdf",
    date: "27 June 2026",
    role: "Java Developer",
    ats: "82%",
    summary: "Available"
  }
];
const [historyItems, setHistoryItems] = useState(historyData);

const [showDeletePopup, setShowDeletePopup] = useState(false);

const [selectedResume, setSelectedResume] = useState(null);

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
  const confirmDelete = () => {
  setHistoryItems(
    historyItems.filter(
      (item) => item.id !== selectedResume.id
    )
  );

  setShowDeletePopup(false);

  setSelectedResume(null);
};

const filteredHistory = historyItems.filter((item) =>
  item.file
    .toLowerCase()
    .includes(search.toLowerCase())
);

  return (
    <div
      style={{
        minHeight: "100vh",
width: "100%",
paddingBottom: "40px",
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
          maxWidth: "1100px",
          margin: "40px auto",
          padding: isMobile
            ? "20px"
            : "7px"
        }}
      >
        {/* TITLE */}

        <h1
          style={{
            color: "#ffffff",
            textAlign: "center",
            fontSize: isMobile
              ? "32px"
              : "42px",
            marginBottom: "12px"
          }}
        >
          <FaHistory
            style={{
              marginRight: "15px"
            }}
          />
          Resume History
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#d1d5db",
            fontSize: "17px",
            marginBottom: "40px"
          }}
        >
          View all your previously analyzed resumes.
        </p>

        {/* SEARCH BAR */}

        <div
          style={{
            position: "relative",
            marginBottom: "40px"
          }}
        >
          <FaSearch
            style={{
              position: "absolute",
              top: "18px",
              left: "18px",
              color: "#64748b"
            }}
          />

          <input
            type="text"
            placeholder="Search your resume..."
            value={search}
            onChange={(e)=>{
setSearch(e.target.value);
}}
            style={{
              width: "100%",

              padding:
                "16px 16px 16px 50px",

              borderRadius: "15px",

              border: "none",

              outline: "none",

              fontSize: "16px",

              background: darkMode
                ? "#111827"
                : "#ffffff",

              color: darkMode
                ? "#ffffff"
                : "#111827",

              boxShadow:
                "0 10px 20px rgba(0,0,0,.12)"
            }}
          />
        </div>
{filteredHistory.length > 0 ? (

<div
  style={{
    display: "grid",

    gridTemplateColumns: isMobile
      ? "1fr"
      : "1fr 1fr",

    gap: "25px"
  }}
>

{filteredHistory.map((item) => (
  <div
    key={item.id}
    style={{
      background: darkMode
        ? "#111827"
        : "#ffffff",

      borderRadius: "20px",

      padding: "25px",

      marginBottom: "25px",

      boxShadow:
        "0 10px 20px rgba(0,0,0,.12)",

      transition: ".3s"
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "18px"
      }}
    >
      <FaFileAlt
        color="#2563eb"
        size={22}
      />

      <h2
        style={{
          margin: 0,
          color: darkMode
            ? "#ffffff"
            : "#111827"
        }}
      >
        {item.file}
      </h2>
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px"
        }}
      >
        <FaCalendarAlt color="#10b981" />

        <span
          style={{
            color: darkMode
              ? "#d1d5db"
              : "#374151"
          }}
        >
          {item.date}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px"
        }}
      >
        <FaBriefcase color="#8b5cf6" />

        <span
          style={{
            color: darkMode
              ? "#d1d5db"
              : "#374151"
          }}
        >
          {item.role}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px"
        }}
      >
        <FaStar color="#fbbf24" />

        <span
          style={{
            color: darkMode
              ? "#d1d5db"
              : "#374151"
          }}
        >
          ATS Score : {item.ats}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px"
        }}
      >
        <FaClipboardList color="#ec4899" />

        <span
          style={{
            color: darkMode
              ? "#d1d5db"
              : "#374151"
          }}
        >
          Summary {item.summary}
        </span>
      </div>
    </div>

    <hr
      style={{
        margin: "25px 0",
        borderColor: darkMode
          ? "#374151"
          : "#e5e7eb"
      }}
    />

    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        gap: "15px"
      }}
    >
      <button
  onClick={() =>
    navigate("/result")
  }
  style={{
          background: "#22c55e",
          color: "#ffffff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "10px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}
      >
        <FaEye />

        View
      </button>

      <button
  onClick={() => {
    alert(
      "Downloading resume analysis..."
    );
  }}
  style={{
          background: "#2563eb",
          color: "#ffffff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "10px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}
      >
        <FaDownload />

        Download
      </button>

     <button
  onClick={() => {
    setSelectedResume(item);
    setShowDeletePopup(true);
  }}
  style={{
          background: "#ef4444",
          color: "#ffffff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "10px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}
      >
        <FaTrashAlt />

        Delete
      </button>
    </div>
  </div>
))}
</div>
) : (

<div
  style={{
    background: darkMode
      ? "#111827"
      : "#ffffff",
    borderRadius: "25px",
    padding: "70px 30px",
    textAlign: "center",
    boxShadow:
      "0 10px 25px rgba(0,0,0,.12)"
  }}
>

<h1
  style={{
    fontSize: "70px",
    marginBottom: "20px"
  }}
>
📂
</h1>

<h2
  style={{
    color: darkMode
      ? "#ffffff"
      : "#111827"
  }}
>
No Resume History Yet
</h2>

<p
  style={{
    color: darkMode
      ? "#d1d5db"
      : "#6b7280",

    marginBottom: "35px"
  }}
>
Analyze your first resume to see it here.
</p>

<button

onClick={() => navigate("/upload")}

style={{
background:
"linear-gradient(to right,#2563eb,#8b5cf6)",
color:"#fff",
border:"none",
padding:"14px 35px",
borderRadius:"12px",
cursor:"pointer",
fontWeight:"600",
fontSize:"16px"
}}

>
Go To Upload
</button>

</div>

)}
      </div>
     {showDeletePopup && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,.55)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999
    }}
  >
    <div
      style={{
        width: isMobile ? "90%" : "450px",
        background: darkMode ? "#111827" : "#ffffff",
        borderRadius: "22px",
        padding: "35px",
        textAlign: "center",
        boxShadow: "0 20px 40px rgba(0,0,0,.35)"
      }}
    >
      <FaTrashAlt
        size={55}
        color="#ef4444"
      />

      <h2
        style={{
          marginTop: "18px",
          color: darkMode ? "#ffffff" : "#111827"
        }}
      >
        Delete Resume
      </h2>

      <p
        style={{
          color: darkMode ? "#d1d5db" : "#6b7280",
          marginTop: "15px",
          lineHeight: "28px"
        }}
      >
        Are you sure you want to delete

        <br />

        <b>{selectedResume?.file}</b> ?
      </p>

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "35px"
        }}
      >
        <button
          onClick={() => {
            setShowDeletePopup(false);
            setSelectedResume(null);
          }}
          style={{
            flex: 1,
            padding: "14px",
            background: "#6b7280",
            color: "#ffffff",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "600"
          }}
        >
          Cancel
        </button>

        <button
          onClick={confirmDelete}
          style={{
            flex: 1,
            padding: "14px",
            background:
              "linear-gradient(to right,#ef4444,#dc2626)",
            color: "#ffffff",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "600"
          }}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
}

export default History;