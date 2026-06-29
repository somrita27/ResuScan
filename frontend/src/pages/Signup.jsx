import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/Logo.png";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

function Signup() {
  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

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
            marginBottom: "25px"
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
            Signup
          </h1>

          <p
            style={{
              color: "#64748b",
              marginTop: "8px",
              textAlign: "center",
              fontSize: "14px"
            }}
          >
            Create your account to get started.
          </p>
        </div>

        {/* NAME */}

        <div
          style={{
            display: "flex",
            alignItems: "center",

            border: "1px solid #d1d5db",

            borderRadius: "10px",

            padding: "0 15px",

            marginBottom: "20px"
          }}
        >
          <FaUser color="#64748b" />

          <input
            type="text"
            placeholder="Enter your name"
            style={{
              flex: 1,
              padding: "15px",
              border: "none",
              outline: "none",
              fontSize: "16px"
            }}
          />
        </div>

        {/* EMAIL */}

        <div
          style={{
            display: "flex",
            alignItems: "center",

            border: "1px solid #d1d5db",

            borderRadius: "10px",

            padding: "0 15px",

            marginBottom: "20px"
          }}
        >
          <FaEnvelope color="#64748b" />

          <input
            type="email"
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

        {/* PASSWORD */}

        <div
          style={{
            display: "flex",
            alignItems: "center",

            border: "1px solid #d1d5db",

            borderRadius: "10px",

            padding: "0 15px",

            marginBottom: "20px"
          }}
        >
          <FaLock color="#64748b" />

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Enter your password"
            style={{
              flex: 1,
              padding: "15px",
              border: "none",
              outline: "none",
              fontSize: "16px"
            }}
          />

          <span
            onClick={() =>
              setShowPassword(!showPassword)
            }
            style={{
              cursor: "pointer"
            }}
          >
            {showPassword ? (
              <FaEyeSlash color="#64748b" />
            ) : (
              <FaEye color="#64748b" />
            )}
          </span>
        </div>

        {/* CONFIRM PASSWORD */}

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
          <FaLock color="#64748b" />

          <input
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            placeholder="Confirm your password"
            style={{
              flex: 1,
              padding: "15px",
              border: "none",
              outline: "none",
              fontSize: "16px"
            }}
          />

          <span
            onClick={() =>
              setShowConfirmPassword(
                !showConfirmPassword
              )
            }
            style={{
              cursor: "pointer"
            }}
          >
            {showConfirmPassword ? (
              <FaEyeSlash color="#64748b" />
            ) : (
              <FaEye color="#64748b" />
            )}
          </span>
        </div>

        {/* SIGNUP BUTTON */}

        <button
          style={{
            width: "100%",

            padding: "15px",

            border: "none",

            borderRadius: "10px",

            background:
              "linear-gradient(to right,#2563eb,#8b5cf6)",

            color: "white",

            fontSize: "17px",

            fontWeight: "bold",

            cursor: "pointer"
          }}
        >
          Signup
        </button>

        {/* LOGIN LINK */}

        <p
          style={{
            textAlign: "center",

            marginTop: "25px",

            color: "#64748b"
          }}
        >
          Already have an account?{" "}
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

export default Signup;