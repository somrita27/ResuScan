import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/Logo.png";

import { FaEnvelope } from "react-icons/fa";

function ForgotPassword() {
  const [email, setEmail] = useState("");

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

        background:
          "linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb)",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        padding: "20px"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "480px",

          background: "#ffffff",

          borderRadius: "20px",

          padding: isMobile
            ? "30px 20px"
            : "40px",

          boxShadow:
            "0 10px 30px rgba(0,0,0,0.25)"
        }}
      >
        {/* LOGO + TITLE */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "20px"
          }}
        >
          <img
            src={logo}
            alt="ResuScan Logo"
            style={{
              width: isMobile ? "180px" : "220px",
              height: "auto",
              marginBottom: "20px"
            }}
          />

          <h1
            style={{
              textAlign: "center",
              color: "#0c46c3",
              margin: 0,
              fontSize: isMobile ? "28px" : "32px"
            }}
          >
            Forgot Password
          </h1>
        </div>

        {/* DESCRIPTION */}

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            lineHeight: "1.6",
            marginBottom: "30px"
          }}
        >
          Enter your registered email address.
          <br />
          We'll send a password reset link
          to your email.
        </p>

        {/* EMAIL FIELD */}

        <div
          style={{
            display: "flex",
            alignItems: "center",

            border: "1px solid #d1d5db",

            borderRadius: "10px",

            padding: "0 15px",

            marginBottom: "25px"
          }}
        >
          <FaEnvelope color="#64748b" />

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="Enter your email"
            style={{
              flex: 1,

              padding: "15px",

              border: "none",

              outline: "none",

              fontSize: "16px"
            }}
          />
        </div>

        {/* BUTTON */}

        <button
          style={{
            width: "100%",

            padding: "15px",

            border: "none",

            borderRadius: "10px",

            background:
              "linear-gradient(to right,#2563eb,#8b5cf6)",

            color: "white",

            fontSize: "16px",

            fontWeight: "bold",

            cursor: "pointer"
          }}
        >
          Send Reset Link
        </button>

        {/* SPAM NOTE */}

        <p
          style={{
            marginTop: "20px",
            textAlign: "center",
            color: "#64748b",
            fontSize: "14px",
            lineHeight: "1.6"
          }}
        >
          Didn't receive the email?
          <br />
          Check your spam folder.
        </p>

        {/* LOGIN LINK */}

        <p
          style={{
            marginTop: "25px",
            textAlign: "center",
            color: "#64748b"
          }}
        >
          Remember your password?{" "}
          <Link
            to="/login"
            style={{
              color: "#0c46c3",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;