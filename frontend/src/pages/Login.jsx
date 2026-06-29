import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/Logo.png";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    navigate("/upload");
  };

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
          maxWidth: "430px",
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
            Login
          </h1>
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

        {/* PASSWORD */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #d1d5db",
            borderRadius: "10px",
            padding: "0 15px"
          }}
        >
          <FaLock color="#64748b" />

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
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
              setShowPassword(
                !showPassword
              )
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

        {/* FORGOT PASSWORD */}

        <div
          style={{
            textAlign: "right",
            marginTop: "10px",
            marginBottom: "25px"
          }}
        >
          <Link
            to="/forgot-password"
            style={{
              textDecoration: "none",
              color: "#2563eb",
              fontSize: "14px"
            }}
          >
            Forgot Password?
          </Link>
        </div>

        {/* LOGIN BUTTON */}

        <button
          onClick={handleLogin}
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
          Login
        </button>

        {/* SIGNUP */}

        <p
          style={{
            textAlign: "center",
            marginTop: "25px",
            color: "#64748b"
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{
              color: "#2563eb",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;