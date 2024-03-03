import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/AuthPage.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setShowPopup(true);
        setMessage(data.message);
      } else {
        const messageData = await response.json();
        setMessage(messageData.message || "Registration failed");
        setShowPopup(true);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setMessage("Internal Server Error");
      setShowPopup(true);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Create Account </h2>
        <form onSubmit={handleSignUp} className="auth-form">
          <label>
            Full Name:
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            <div id="check-box">
              <input
                id="my-checkbox"
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                required
              /> Remind me
            </div>
          </label>
          <br />
          {message && <p className="error-message">{message}</p>}
          <button type="submit" className="auth-button">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>{message}</p>
            <button
              onClick={() => {
                setShowPopup(false);
                if (message === "User registered successfully") {
                  navigate("/login");
                }
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
