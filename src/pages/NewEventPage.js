import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UseAppContext } from "../context/appContext";
import "../css/NewEventPage.css";
import Arrow from "../images/arrow.svg";
import ShowAlert from "../components/ShowAlert";

function NewEventPage() {
  const {
    clearSideBar,
    displayAlert,
    displaySuccessAlert,
    showAlert,
    addNewEvent,
    darkMode
  } = UseAppContext();
  useEffect(() => {
    clearSideBar();
  },[]);

  const initialState = {
    eventTitle: "",
    eventLocation: "",
    eventTime: "",
    eventPrice: "",
    eventImage: "",
    eventPhone: "",
    eventDesc: "",
  };

  const [values, setValues] = useState(initialState);

  const inputHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const {
      eventTitle,
      eventDesc,
      eventTime,
      eventPhone,
      eventPrice,
      eventImage,
      eventLocation,
    } = values;
    if (
      !eventTitle ||
      !eventPhone ||
      !eventTime ||
      !eventPrice ||
      !eventImage ||
      !eventDesc ||
      !eventLocation
    ) {
      displayAlert();
    }

    if (
      eventTitle &&
      eventPhone &&
      eventTime &&
      eventPrice &&
      eventImage &&
      eventDesc &&
      eventLocation
    ) {
      const newEvent = {
        name: eventTitle,
        desc: eventDesc,
        location: eventLocation,
        time: eventTime,
        phone: eventPhone,
        price: eventPrice,
        image: eventImage,
      };
      displaySuccessAlert();
      addNewEvent(newEvent);
    }
  };

  return (
    <div className={darkMode ? "newEventPage-container-dark" : "newEventPage-container"}>
      <div className="newEventPage-header">
        <Link to="/home">
          <img src={Arrow} alt="arrow" />
        </Link>
        <h4 className={darkMode ? "dark-mode-text" : "light-mode-text3"}>New Event Details</h4>
      </div>

      <div className="newEventPage-main">
        <form onSubmit={submitHandler}>
          {showAlert && <ShowAlert />}
          <div className="newEventPage-main-form1">
            <h4 className={darkMode ? "dark-mode-text" : "light-mode-text3"}>EVENT TITLE</h4>
            <input type="text" name="eventTitle" onChange={inputHandler} />
          </div>
          <div className="newEventPage-main-form2">
            <div className="newEventPage-main-form2-location">
              <h4 className={darkMode ? "dark-mode-text" : "light-mode-text3"}>Location</h4>
              <input type="text" name="eventLocation" onChange={inputHandler} />
            </div>
            <div className="newEventPage-main-form2-time">
              <h4 className={darkMode ? "dark-mode-text" : "light-mode-text3"}>TIME/DATE</h4>
              <input type="text" name="eventTime" onChange={inputHandler} />
            </div>
          </div>
          <div className="newEventPage-main-form3">
            <h4 className={darkMode ? "dark-mode-text" : "light-mode-text3"}>PRICE OF THE TICKET</h4>
            <input type="text" name="eventPrice" onChange={inputHandler} />
          </div>
          <div className="form4-5-container">
            <div className="newEventPage-main-form4">
              <h4 className={darkMode ? "dark-mode-text" : "light-mode-text3"}>HERO PHOTO URL</h4>
              <input type="text" name="eventImage" onChange={inputHandler} />
            </div>
            <div className="newEventPage-main-form5">
              <h4 className={darkMode ? "dark-mode-text" : "light-mode-text3"}>PHONE</h4>
              <input type="text" name="eventPhone" onChange={inputHandler} />
            </div>
          </div>
          <div className="newEventPage-main-form6">
            <h4 className={darkMode ? "dark-mode-text" : "light-mode-text3"}>DESCRIPTION</h4>
            <input type="text" name="eventDesc" onChange={inputHandler} />
          </div>

          <div className="newEventPage-footer">
            <div>
              <button className={darkMode ? "button-dark1" : "button-light1"}>ADD EVENT</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewEventPage;
