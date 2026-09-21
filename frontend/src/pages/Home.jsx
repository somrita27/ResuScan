import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/Logo.png";
import demoPoster from "../assets/AI-Powered Resume & Career Assistant.png";
import demoVideo from "../assets/Demo_Video(ResuScan).mp4";

function Home() {
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

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background:"linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb)",
        color: "white",
        fontFamily: "Segoe UI, sans-serif"
      }}
    >
      {/* NAVBAR */}

      <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: isMobile ? "10px 15px" : "25px 40px"
  }}
>
        {/* LOGO */}

       <div
  style={{
    display: "flex",
    alignItems: "center"
  }}
>
 <img
  src={logo}
  alt="Logo"
  style={{
    width: isMobile ? "180px" : "250px",
    maxHeight: "70px",
    objectFit: "contain"
  }}
/>
</div>

        {/* BUTTONS */}

        <div
          style={{
            display: "flex",
            gap: "15px"
          }}
        >
          <Link to="/login">
            <button
              style={{
                padding: "10px 22px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                background: "#ffffff",
                color: "#2563eb",
                fontWeight: "bold"
              }}
            >
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button
              style={{
                padding: "10px 22px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                background: "#8b5cf6",
                color: "#ffffff",
                fontWeight: "bold"
              }}
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* HERO SECTION */}

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "80vh",
padding: isMobile ? "20px 20px" : "0px 50px 40px 50px",
          gap: "40px"
        }}
      >
        {/* LEFT SIDE */}

        <div
          style={{
            width: isMobile ? "100%" : "55%"
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "38px" : "60px",
              lineHeight: "1.2",
              marginBottom: "25px"
            }}
          >
            AI Resume Summarizer
            <br />
            & Career Assistant
          </h1>

          <p
            style={{
              fontSize: isMobile ? "16px" : "21px",
              lineHeight: "1.8",
              color: "#dbeafe",
              marginBottom: "35px"
            }}
          >
            Upload your resume and get
            AI-powered resume summary,
            skill extraction, suggested
            job roles, ATS analysis,
            skill gap detection and
            resume improvement suggestions
            in seconds.
          </p>

          <Link to="/login">
            <button
              style={{
                padding: "16px 35px",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
                fontSize: "17px",
                fontWeight: "bold",
                color: "white",
                background:
                  "linear-gradient(to right,#2563eb,#8b5cf6)"
              }}
            >
              Explore Now
            </button>
          </Link>
        </div>

        {/* RIGHT SIDE */}

        <div
          style={{
            width: isMobile ? "100%" : "40%",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              width: isMobile ? "100%" : "500px",
              height: isMobile ? "250px" : "320px",

              background:
                "rgba(255,255,255,0.1)",

              backdropFilter: "blur(12px)",

              border:
                "1px solid rgba(255,255,255,0.2)",

              borderRadius: "20px",

              display: "flex",
              flexDirection: "column",

              justifyContent: "center",
              alignItems: "center",

              textAlign: "center",

              padding: "20px"
            }}
          >
            {/* <h2
              style={{
                marginBottom: "15px"
              }}
            >
              Demo Video
            </h2> */}

            {/* <img
  src={demoPoster}
  alt="ResuScan Demo"
  style={{
    width: "100%",
    maxWidth: "900px",
    height: "900px",
    borderRadius: "12px",
    display: "block",
    margin: "0 auto",
  }}
/> */}

<video
  src={demoVideo}
  controls
  style={{
    width: "100%",
    maxWidth: "900px",
    height: "800px",
    borderRadius: "12px",
    display: "block",
    margin: "0 auto",
  }}
/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;