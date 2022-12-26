import React, { useEffect } from "react";
import "../css/MainPage.css";
import logo from "../images/logo.svg";
import menu from "../images/menu.svg";
import Map from "../components/map";
import pin from "../images/pin.svg";
import clock from "../images/clock.svg";
import { UseAppContext } from "../context/appContext";
import { Link } from "react-router-dom";

const MainPage = () => {
  const { showSideBar, clearSideBar, events, addEventId, darkMode } =
    UseAppContext();
  useEffect(() => {
    clearSideBar();
  }, []);

  const idHandler = (id) => {
    addEventId(id);
  };

  return (
    <div
      className={darkMode ? "mainPage-container-dark" : "mainPage-container"}
    >
      <div className="mainPage-header-container">
        
        <div className="mainPage-header">
          <img src={logo} alt="logo" />
          <h1>Zport</h1>
          <img
            className="hamburger-menu"
            src={menu}
            alt="hamburger menu"
            onClick={showSideBar}
          />
        </div>
      </div>

      <div className="map-container">
        <Map />
      </div>

      <div className="mainPage-event-container">
        {events.map((event, index) => {
          const { name, location, time } = event;
          return (
            <div className={darkMode ? "event-dark" : "event"} key={index}>
              <div className={darkMode ? "event-title-dark" : "event-title"}>
                {name}
              </div>
              <div className="event-info">
                <div className="event-info1">
                  <img src={pin} alt="pin" />
                  <p className={darkMode ? "dark-mode" : "light-mode"}>
                    {location}
                  </p>
                </div>
                <div className="event-info11">
                  <img src={clock} alt="clock" />
                  <p className={darkMode ? "dark-mode" : "light-mode"}>
                    {time}
                  </p>
                </div>
                <div className="event-info2">
                  <Link to="specific">
                    <button
                      onClick={() => idHandler(index)}
                      className={darkMode ? "button-dark" : "button-light"}
                    >
                      CHECK
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
