import { useContext, useReducer, useState } from "react";
import React from "react";
import reducer from "./reducer";
import {
  IS_MEMBER_HANDLER,
  SHOW_SIDEBAR,
  CLEAR_SIDEBAR,
  DISPLAY_ALERT,
  CLEAR_ALERT,
  DISPLAY_SUCCESS,
} from "./action";
const AppContext = React.createContext();

const initialState = {
  isMember: false,
  show_SideBar: false,
  showAlert: false,
  alertType: "",
  alertText: "",
  index: null,
  events: [
    {
      name: "One Team Scavenger York",
      desc: "Puzzling Adventures™ are a cross between a scavenger hunt",
      location: "Clifford`s Tower, York, United Kingdom",
      time: "16th Dec 11:00am - 5:00pm",
      phone: "0704532346346",
      price: "£16.99",
      image:
        "https://treasurehuntyork.com/images/product/york/03-treasure-hunt-york-how-it-works-1920w-1400h.jpg",
    },
    {
      name: "York Winter 10km",
      desc: "This is the final of our 4 seasonal 10km series. Each runner will receive a bespoke medal, featuring the fabulous map of York created by local York artist, Elliot Harrison.",
      location: "York Sports Village, Lakeside Way, York",
      time: "25th Feb 9:00am - 5:00pm",
      phone: "N/A",
      price: "£32.93",
      image:
        "https://www.seeyorkrunyork.co.uk/images/events/283860212r8h95vuwwc5rmzbr9oi3.jpg",
    },
    {
      name: "York's Strongest Man & Woman 2023",
      desc: "With Novice, Inters and Opens for both men and women, we cannot wait to offer a true test of strength and grit in our facility less than 2 miles from York city centre.",
      location: "Dominus CrossFit 3 Bleriot Way York YO30 4WU",
      time: "11th Dec 10:00am",
      phone: "frankii@dominuscrossfit.com",
      price: "£20.00",
      image:
        "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F393722899%2F1070564849923%2F1%2Foriginal.20221115-130317?w=1000&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C66%2C314%2C157&s=4a1ed4116a428e3e549a076a0ab80581",
    },
    {
      name: "York St John Men Football Open Session",
      desc: "Feel free to join us and train with us!",
      location: "Haxby Rd, New Earswick, York YO31 8TA",
      time: "5th Jan 17:00pm",
      phone: "ysjfootballmen@gmail.com",
      price: "Free",
      image: "https://www.openplay.co.uk/uploads/nT79I9KBnssaxlIL-500x_.jpg",
    },
  ],
  tickets: [
    {
      name: "One Team Scavenger York",
      location: "Clifford`s Tower, York, United Kingdom",
    },
    {
      name: "York's Strongest Man & Woman 2023",
      location: "Dominus CrossFit 3 Bleriot Way York YO30 4WU",
    },
    {
      name: "York Winter 10km",
      location: "York Sports Village, Lakeside Way, York",
    },
  ],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [eventId, setEventId] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const isMemberHandler = () => {
    dispatch({ type: IS_MEMBER_HANDLER });
  };

  const showSideBar = () => {
    dispatch({ type: SHOW_SIDEBAR });
  };

  const clearSideBar = () => {
    dispatch({ type: CLEAR_SIDEBAR });
  };

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const displaySuccessAlert = () => {
    dispatch({ type: DISPLAY_SUCCESS });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT,
      });
    }, 3000);
  };

  const addEventId = (id) => {
    setEventId(id);
  };

  const addNewEvent = (newEvent) => {
    const { events } = initialState;
    events.push(newEvent);
  };

  const addNewTicket = (newTicket) => {
    const { tickets } = initialState;
    tickets.push(newTicket);
    displaySuccessAlert();
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        isMemberHandler,
        showSideBar,
        clearSideBar,
        displayAlert,
        addEventId,
        eventId,
        addNewEvent,
        addNewTicket,
        displaySuccessAlert,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const UseAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, UseAppContext };
