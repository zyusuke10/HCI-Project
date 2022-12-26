import React from "react";
import "../css/sidebar.css";
import CloseIcon from "../images/close.svg";
import { UseAppContext } from "../context/appContext";
import avatar from "../images/avatar.svg";
import logout from "../images/logout.svg";
import { Link } from "react-router-dom";
import addEvent from "../images/addEvent.svg";
import userIcon from "../images/user-icon.svg";
import whiteCloseIcon from "../images/white-close.svg"

const SideBar = () => {
  const { clearSideBar, show_SideBar, darkMode, setDarkMode } = UseAppContext();
  return (
    <div
      className={
        (show_SideBar && !darkMode && "sidebar") ||
        (show_SideBar && darkMode && "sidebar-dark")
      }
    >
      <img
        src={darkMode ? whiteCloseIcon : CloseIcon}
        className="clearSideBar"
        onClick={clearSideBar}
        alt="close"
      />
      <div className="sidebar-user-container">
        <img src={avatar} alt="user-img" className="user-icon-sidebar" />
        <p>zyusuke</p>
      </div>
      <div className="sidebar-items-container">
        <Link to="profile" className="sidebar-item">
          <img src={userIcon} alt="avatar" />
          <p className={darkMode ? "dark-mode" : "light-mode"}>My tickets</p>
        </Link>
        <Link to="addEvent" className="sidebar-item">
          <img src={addEvent} alt="add event" />
          <p className={darkMode ? "dark-mode" : "light-mode"}>Add Events</p>
        </Link>
        <Link to="" className="sidebar-item">
          <img src={logout} alt="logout" />
          <p className={darkMode ? "dark-mode" : "light-mode"}>Logout</p>
        </Link>
        <div className="logout-sidebar-item">
          <div className={darkMode ? "dark-mode" : "light-mode"}>
            <div className="container">
              <span
                className="span10"
                style={{ color: darkMode ? "grey" : "yellow" }}
              >
                ☀︎
              </span>
              <div className="switch-checkbox">
                <label className="switch">
                  <input
                    type="checkbox"
                    onChange={() => setDarkMode(!darkMode)}
                  />
                  <span className="slider round"> </span>
                </label>
              </div>
              <span
                className="span10"
                style={{ color: darkMode ? "#c96dfd" : "grey" }}
              >
                ☽
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
