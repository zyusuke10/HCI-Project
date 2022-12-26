import "../css/LandingPage.css";
import React from "react";
import logo from "../images/logo.svg";
import mainImg from "../images/landing-main.svg";
import { Link } from "react-router-dom";
import { UseAppContext } from "../context/appContext";

function LandingPage() {
  const { isMemberHandler } = UseAppContext();
  return (
    <div className="landing-container">
      <div className="landing-header">
        <img src={logo} alt="logo" />
        <h1>Zport</h1>
      </div>

      <div className="landing-main">
        <h1>
          Welcome to <br /> Zport.
        </h1>
        <img src={mainImg} alt="landing main" />
      </div>

      <div className="landing-input">
        <Link to="/register">
          <button className="register-btn">Register</button>
        </Link>
        <p>Already a member?</p>
        <Link to="/register">
          <button className="login-btn" onClick={() => isMemberHandler()}>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
