import React from "react";
import "../css/SpecificEventPage.css";
import pin from "../images/pin.svg";
import phone1 from "../images/phone.svg";
import clock from "../images/clock.svg";
import priceTag from "../images/pricetag.svg";
import whiteCloseIcon from "../images/white-close.svg";
import { Link } from "react-router-dom";
import { UseAppContext } from "../context/appContext";
import closeIcon from "../images/close.svg";

const SpecificEventPage = () => {
  const { events, eventId, addNewTicket, darkMode } = UseAppContext();
  const { name, desc, location, time, price, image, phone } = events[eventId];

  return (
    <div className="specificEventPage-container">
      <Link to="/home">
        <img
          src={darkMode ? whiteCloseIcon : closeIcon}
          alt="close"
          className="specificEvent-close-icon"
        />
      </Link>
      <div className="speicifcEventPage-container-main">
        <div className="specificEvent-image">
          <img src={image} alt="event" />
        </div>
        <div
          className={
            darkMode
              ? "specificEvent-details-container-dark"
              : "specificEvent-details-container"
          }
        >
          <div className="specificEvent-title">
            <h4 className={darkMode ? "dark-mode-text" : "light-mode-text2"}>
              {name}
            </h4>
          </div>
          <div className="specificEvent-desc">
            <h5 className={darkMode ? "dark-mode-text" : "light-mode-text2"}>
              Description
            </h5>
            <p className={darkMode ? "dark-mode-text" : "light-mode-text2"}>
              {desc}
            </p>
          </div>
          <div className="specificEvent-details">
            <div className="specificEvent-location">
              <img src={pin} alt="pin" />
              <p className={darkMode ? "dark-mode-text" : "light-mode-text2"}>
                {location}
              </p>
            </div>
            <div className="specificEvent-phone">
              <img src={phone1} alt="phone" />
              <p className={darkMode ? "dark-mode-text" : "light-mode-text2"}>
                {phone}
              </p>
            </div>
            <div className="specificEvent-time">
              <img src={clock} alt="clock" />
              <p className={darkMode ? "dark-mode-text" : "light-mode-text2"}>
                {time}
              </p>
            </div>
            <div className="specificEvent-price">
              <img src={priceTag} alt="price tag" />
              <p className={darkMode ? "dark-mode-text" : "light-mode-text2"}>
                {price}
              </p>
            </div>

            <Link to="/profile">
              <div
                className={
                  darkMode ? "addTicket-container-dark" : "addTicket-container"
                }
                onClick={() => addNewTicket(events[eventId])}
              >
                Add Ticket
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificEventPage;
