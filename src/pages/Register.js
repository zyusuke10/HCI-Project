import "../css/Register.css";
import logo from "../images/logo.svg";
import { UseAppContext } from "../context/appContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ShowAlert from "../components/ShowAlert";

const Register = () => {
  const { isMember, isMemberHandler, displayAlert, showAlert } =
    UseAppContext();
  const initialState = {
    username: "",
    email: "",
    password: "",
  };
  const [values, setValues] = useState(initialState);

  const navigate = useNavigate();

  const inputHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { email, password, username } = values;
    if (!email || !password || (!isMember && !username)) {
      displayAlert();
    }

    if (email || password || (isMember && username)) {
      navigate("/home");
    }
  };
  return (
    <div className="register-container">
      <div className="register-header">
        <img src={logo} alt="logo" />
        <h1>Zport</h1>
      </div>

      <div className="register-main">
        <div className="register-main-title">
          <p>{isMember ? "Login to your account" : "Create your account"}</p>
        </div>
        <form onSubmit={submitHandler}>
          <div className="register-main-input">
            {showAlert && <ShowAlert />}
            {!isMember && (
              <input
                type="text"
                placeholder="Username"
                onChange={inputHandler}
                name="username"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              onChange={inputHandler}
              name="email"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={inputHandler}
              name="password"
            />
          </div>
          <div className="register-main-input-submit">
            {showAlert ? (
              <Link to="/home">
                <button>{isMember ? "Login" : "Register"}</button>
              </Link>
            ) : (
              <button>{isMember ? "Login" : "Register"}</button>
            )}
            <p>
              {isMember ? "Don't have an account?" : "Already have an account?"}
              <span onClick={isMemberHandler}>
                {isMember ? "Register" : "Login"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
