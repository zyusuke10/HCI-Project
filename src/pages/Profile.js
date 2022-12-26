import React, { useEffect } from "react";
import Arrow from "../images/arrow.svg";
import avatar from "../images/avatar.svg";
import pin from "../images/pin.svg";
import QRCode from "../images/QRCode.svg";
import "../css/Profile.css";
import { Link } from "react-router-dom";
import { UseAppContext } from "../context/appContext";
import ShowAlert from "../components/ShowAlert";

const Profile = () => {
  const { clearSideBar, tickets, showAlert, darkMode } = UseAppContext();
  useEffect(() => {
    clearSideBar();
  }, []);
  return (
    <div className={darkMode ? "profile-container-dark" : "profile-container"}>
      <div className="profile-header">
        <Link to="/home">
          <img src={Arrow} alt="arrow" />
        </Link>
      </div>
      <div className="profile-header-avatar">
        <img src={avatar} alt="avatar" />
        <p className={darkMode && "dark-mode"}>zyusuke</p>
      </div>
      <div className="profile-main">
        <div className="profile-main-title">
          <p className={darkMode && "dark-mode"}>Your Tickets</p>
          {showAlert && <ShowAlert />}
        </div>
        <div className="profile-main-tickets-container">
          {tickets.map((ticket, index) => {
            const { name, location } = ticket;
            return (
              <div className="ticket" key={index}>
                <div className="ticket-info">
                  <h4>{name} Entry Ticket</h4>
                  <div className="ticket-info-location">
                    <img src={pin} alt="pin" />
                    <p>{location}</p>
                  </div>
                </div>
                <div className="ticket-QRCode">
                  <img src={QRCode} alt="QR-code" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={darkMode ? "profile-footer-dark" : "profile-footer"}>
        <div
          className={
            darkMode ? "profile-footer-btn1-dark" : "profile-footer-btn1"
          }
        >
          <h5>Total Price</h5>
          <h5>£150</h5>
        </div>

        <Link
          to="payment"
          className={
            darkMode ? "profile-footer-btn2-dark" : "profile-footer-btn2"
          }
        >
          <div>
            <h5 className={darkMode ? "dark-mode-text" : "light-mode-text"}>
              Pay now →
            </h5>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
