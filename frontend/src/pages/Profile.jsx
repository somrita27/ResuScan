import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/Logo.png";
import {
  FaArrowLeft,
  FaUserCircle,
  FaFileAlt,
  FaStar,
  FaClock,
  FaUser,
  FaEnvelope,
  FaUniversity,
  FaCalendarAlt
} from "react-icons/fa";
import {
  FaCamera,
  FaUpload,
  FaSyncAlt,
  FaTrashAlt
} from "react-icons/fa";

function Profile({ darkMode }) {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 768
  );
  const [editProfile, setEditProfile] = useState(false);
   const [profileImage, setProfileImage] = useState(null);
  const [fullName, setFullName] = useState("Somrita Bala");
  const [email, setEmail] = useState("somrita@gmail.com");
  const [organization, setOrganization] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPhotoMenu, setShowPhotoMenu] = useState(false);
  const [totalAnalyses, setTotalAnalyses] = useState(0);
const [averageATS, setAverageATS] = useState("--");
const [lastAnalysis, setLastAnalysis] = useState("--");

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

  useEffect(() => {
  const savedHistory =
    JSON.parse(localStorage.getItem("resumeHistory")) || [];

  const total = savedHistory.length;

  setTotalAnalyses(total);

  if (total > 0) {
    const scores = savedHistory
      .map((item) => parseFloat(item.ats))
      .filter((score) => !isNaN(score));

    if (scores.length > 0) {
      const average =
        scores.reduce((sum, score) => sum + score, 0) /
        scores.length;

      setAverageATS(`${average.toFixed(0)}%`);
    }

    setLastAnalysis(savedHistory[0].date);
  } else {
    setAverageATS("--");
    setLastAnalysis("--");
  }
}, []);

  return (
    <div
      style={{
        minHeight: "100vh",
width: "100%",
paddingBottom: "5px",
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
            ? "0 2px 10px rgba(0,0,0,0.5)"
            : "0 2px 10px rgba(0,0,0,0.08)"
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
          onClick={() =>
            navigate("/upload")
          }
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

      {/* PROFILE SECTION */}

      <div
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: isMobile
            ? "20px"
            : "20px"
        }}
      >
        <div
          style={{
            background: darkMode
              ? "rgba(13,36,91,0.72)"
              : "#bcc9eb",

            borderRadius: "25px",

            padding: isMobile
              ? "30px 20px"
              : "50px",

            textAlign: "center",

            boxShadow:
              "0 10px 25px rgba(0,0,0,0.15)"
          }}
        >
          {profileImage ? (
  <img
    src={profileImage}
    alt="Profile"
    style={{
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "4px solid #2563eb"
    }}
  />
) : (
  <FaUserCircle
    size={120}
    color={darkMode ? "#60a5fa" : "#2563eb"}
  />
)}

          <h1
            style={{
              marginTop: "20px",

              color: darkMode
                ? "#ffffff"
                : "#111827",

              fontSize: isMobile
                ? "30px"
                : "40px"
            }}
          >
            My Profile
          </h1>

          <p
            style={{
              color: darkMode
                ? "#d1d5db"
                : "#374151",

              marginTop: "10px",

              fontSize: "17px"
            }}
          >
            Manage your ResuScan account information
          </p>

         {/* PERSONAL INFORMATION */}

<div
  style={{
    marginTop: "45px",
    textAlign: "left"
  }}
>
  <h2
    style={{
      color: darkMode ? "#ffffff" : "#1e293b",
      marginBottom: "25px"
    }}
  >
    Personal Information
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "1fr 1fr",
      gap: "20px"
    }}
  >
    {/* NAME */}

    <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "25px"
  }}
>
  <FaUser
    color="#2563eb"
    size={22}
  />

  <div>
    <p
      style={{
        margin: 0,
        color: "#64748b",
        fontSize: "14px"
      }}
    >
      Full Name
    </p>

    <h3
      style={{
        margin: "4px 0 0",
        color: darkMode ? "#ffffff" : "#111827"
      }}
    >
      {fullName}
    </h3>
  </div>
</div>

    {/* EMAIL */}

    <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "25px"
  }}
>
  <FaEnvelope
    color="#2563eb"
    size={22}
  />

  <div>
    <p
      style={{
        margin: 0,
        color: "#64748b",
        fontSize: "14px"
      }}
    >
      Email Address
    </p>

    <h3
      style={{
        margin: "4px 0 0",
        color: darkMode ? "#ffffff" : "#111827"
      }}
    >
      {email}
    </h3>
  </div>
</div>

    {/* UNIVERSITY */}

    <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "25px"
  }}
>
  <FaUniversity
    color="#2563eb"
    size={22}
  />

  <div>
    <p
      style={{
        margin: 0,
        color: "#64748b",
        fontSize: "14px"
      }}
    >
      University / School / Company
    </p>

    <h3
      style={{
        margin: "4px 0 0",
        color: darkMode ? "#ffffff" : "#111827"
      }}
    >
      {organization || "Not Added"}
    </h3>
  </div>
</div>

    {/* MEMBER SINCE */}
<div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "15px"
  }}
>
  <FaCalendarAlt
    color="#2563eb"
    size={22}
  />

  <div>
    <p
      style={{
        margin: 0,
        color: "#64748b",
        fontSize: "14px"
      }}
    >
      Member Since
    </p>

    <h3
      style={{
        margin: "4px 0 0",
        color: darkMode ? "#ffffff" : "#111827"
      }}
    >
      29 June 2026
    </h3>
  </div>
</div>

  </div>
</div>

{/* ACCOUNT STATISTICS */}

<div
  style={{
    marginTop: "50px"
  }}
>
  <h2
    style={{
      color: darkMode ? "#ffffff" : "#1e293b",
      marginBottom: "25px"
    }}
  >
    Account Statistics
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(3,1fr)",
      gap: "20px"
    }}
  >
    {/* TOTAL RESUMES */}

    <div
      style={{
        background: darkMode ? "#0f172a" : "#ffffff",
        borderRadius: "15px",
        padding: "25px",
        textAlign: "center"
      }}
    >
      <FaFileAlt
        size={40}
        color="#2563eb"
      />

      <h2
        style={{
          color: darkMode ? "#ffffff" : "#111827",
          margin: "15px 0 5px"
        }}
      >
        {totalAnalyses}
      </h2>

      <p
        style={{
          color: "#64748b",
          margin: 0
        }}
      >
        Total Resume Analyses
      </p>
    </div>

    {/* ATS */}

    <div
      style={{
        background: darkMode ? "#0f172a" : "#ffffff",
        borderRadius: "15px",
        padding: "25px",
        textAlign: "center"
      }}
    >
      <FaStar
        size={40}
        color="#f59e0b"
      />

      <h2
        style={{
          color: darkMode ? "#ffffff" : "#111827",
          margin: "15px 0 5px"
        }}
      >
        {averageATS}
      </h2>

      <p
        style={{
          color: "#64748b",
          margin: 0
        }}
      >
        Average ATS Score
      </p>
    </div>

    {/* LAST ANALYSIS */}

    <div
      style={{
        background: darkMode ? "#0f172a" : "#ffffff",
        borderRadius: "15px",
        padding: "25px",
        textAlign: "center"
      }}
    >
      <FaClock
        size={40}
        color="#10b981"
      />

      <h2
        style={{
          color: darkMode ? "#ffffff" : "#111827",
          margin: "15px 0 5px"
        }}
      >
        {lastAnalysis}
      </h2>

      <p
        style={{
          color: "#64748b",
          margin: 0
        }}
      >
        Last Analysis
      </p>
    </div>
  </div>
</div>

{/* ACTION BUTTON */}

<div
  style={{
    marginTop: "50px",
    display: "flex",
    justifyContent: "center"
  }}
>
  <button
    onClick={() => setEditProfile(true)}
    style={{
      padding: "16px 95px",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "19px",
      color: "#ffffff",
      background: "linear-gradient(to right,#2563eb,#8b5cf6)"
    }}
  >
    Edit Profile
  </button>
</div>

          </div>
          {editProfile && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.55)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 999
    }}
  >
    <div
      style={{
        width: isMobile ? "92%" : "620px",
        maxHeight: "90vh",
        overflowY: "auto",
        background: darkMode ? "#111827" : "#ffffff",
        borderRadius: "22px",
        padding: "35px",
        boxShadow: "0 20px 45px rgba(0,0,0,.35)"
      }}
    >
      {/* Title */}

      <h2
        style={{
          textAlign: "center",
          color: darkMode ? "#ffffff" : "#111827",
          marginBottom: "25px"
        }}
      >
        Edit Profile
      </h2>

      {/* Photo */}

      <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "35px"
  }}
>

  <div
    style={{
      position: "relative",
      width: "130px",
      height: "130px"
    }}
  >
    {profileImage ? (
      <img
        src={profileImage}
        alt="Profile"
        style={{
          width: "130px",
          height: "130px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "4px solid #2563eb"
        }}
      />
    ) : (
      <FaUserCircle
        size={130}
        color="#2563eb"
      />
    )}

    <div
  onClick={() => setShowPhotoMenu(!showPhotoMenu)}
  style={{
    position: "absolute",
    bottom: "6px",
    right: "6px",
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    background: "#2563eb",
    color: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0 5px 12px rgba(0,0,0,.25)"
  }}
>
  <FaCamera />
</div>
    {showPhotoMenu && (
  <div
    style={{
      position: "absolute",
      top: "145px",
      right: "-20px",
      width: "200px",
      background: darkMode ? "#1f2937" : "#ffffff",
      borderRadius: "14px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      overflow: "hidden",
      zIndex: 1000
    }}
  >
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "14px 18px",
        cursor: "pointer",
        color: darkMode ? "#ffffff" : "#111827",
        transition: "0.3s"
      }}
    >
      {profileImage ? (
        <>
          <FaSyncAlt color="#2563eb" />
          <span>Update Photo</span>
        </>
      ) : (
        <>
          <FaUpload color="#2563eb" />
          <span>Upload Photo</span>
        </>
      )}

      <input
        hidden
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files[0]) {
            setProfileImage(
              URL.createObjectURL(e.target.files[0])
            );
          }
          setShowPhotoMenu(false);
        }}
      />
    </label>

    {profileImage && (
      <div
        onClick={() => {
          setProfileImage(null);
          setShowPhotoMenu(false);
        }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "14px 18px",
          cursor: "pointer",
          color: "#ef4444",
          borderTop: darkMode
            ? "1px solid #374151"
            : "1px solid #e5e7eb"
        }}
      >
        <FaTrashAlt />
        <span>Remove Photo</span>
      </div>
    )}
  </div>
)}
  </div>

  <p
    style={{
      marginTop: "15px",
      color: darkMode ? "#9ca3af" : "#6b7280",
      fontSize: "14px",
      textAlign: "center"
    }}
  >
    Click the camera icon to upload your profile photo
  </p>

</div>

      {/* Full Name */}

      <div style={{ marginBottom: "18px" }}>
        <label
          style={{
            color: darkMode ? "#e5e7eb" : "#374151",
            fontWeight: "600"
          }}
        >
          Full Name
        </label>

        <input
          type="text"
          value={fullName}
          onChange={(e) =>
            setFullName(e.target.value)
          }
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            borderRadius: "10px",
            border: "1px solid #d1d5db",
            background: darkMode ? "#1f2937" : "#ffffff",
            color: darkMode ? "#ffffff" : "#111827"
          }}
        />
      </div>

      {/* Email */}

      <div style={{ marginBottom: "18px" }}>
        <label
          style={{
            color: darkMode ? "#e5e7eb" : "#374151",
            fontWeight: "600"
          }}
        >
          Email Address
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            borderRadius: "10px",
            border: "1px solid #d1d5db",
            background: darkMode ? "#1f2937" : "#ffffff",
            color: darkMode ? "#ffffff" : "#111827"
          }}
        />
      </div>

      {/* University */}

      <div style={{ marginBottom: "18px" }}>
        <label
          style={{
            color: darkMode ? "#e5e7eb" : "#374151",
            fontWeight: "600"
          }}
        >
          University / School / Company
        </label>

        <input
          type="text"
          value={organization}
          onChange={(e) =>
            setOrganization(e.target.value)
          }
          placeholder="Enter your University / School / Company"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            borderRadius: "10px",
            border: "1px solid #d1d5db",
            background: darkMode ? "#1f2937" : "#ffffff",
            color: darkMode ? "#ffffff" : "#111827"
          }}
        />
      </div>

      {/* Password */}

      <div style={{ marginBottom: "18px" }}>
        <label
          style={{
            color: darkMode ? "#e5e7eb" : "#374151",
            fontWeight: "600"
          }}
        >
          New Password
        </label>

        <input
          type="password"
          value={newPassword}
          onChange={(e) =>
            setNewPassword(e.target.value)
          }
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            borderRadius: "10px",
            border: "1px solid #d1d5db",
            background: darkMode ? "#1f2937" : "#ffffff",
            color: darkMode ? "#ffffff" : "#111827"
          }}
        />
      </div>

      {/* Confirm */}

      <div style={{ marginBottom: "30px" }}>
        <label
          style={{
            color: darkMode ? "#e5e7eb" : "#374151",
            fontWeight: "600"
          }}
        >
          Confirm Password
        </label>

        <input
          type="password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(e.target.value)
          }
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            borderRadius: "10px",
            border: "1px solid #d1d5db",
            background: darkMode ? "#1f2937" : "#ffffff",
            color: darkMode ? "#ffffff" : "#111827"
          }}
        />
      </div>

      {/* Buttons */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "15px"
        }}
      >
        <button
          onClick={() => setEditProfile(false)}
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            background: "#6b7280",
            color: "#ffffff",
            fontWeight: "600"
          }}
        >
          Cancel
        </button>

        <button
          onClick={() => {
  if (
    newPassword &&
    newPassword !== confirmPassword
  ) {
    alert("Passwords do not match!");
    return;
  }

  alert("Profile Updated Successfully!");
  setEditProfile(false);
}}
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            background:
              "linear-gradient(to right,#2563eb,#8b5cf6)",
            color: "#ffffff",
            fontWeight: "600"
          }}
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
)}
      </div>
    </div>
  );
}

export default Profile;