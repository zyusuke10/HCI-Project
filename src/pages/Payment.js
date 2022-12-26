import React, { useState } from "react";
import Arrow from "../images/arrow.svg";
import "../css/Payment.css";
import visa from "../images/visa.svg";
import master from "../images/master.svg";
import paypal from "../images/paypal.svg";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@mui/material";
import { ClipLoader } from "react-spinners";
import { UseAppContext } from "../context/appContext";
const Payment = () => {
  const [confirm, setConfirm] = useState(false);
  const [finalConfirm, setFinalConfirm] = useState(false);
  const [purchased, setPurchased] = useState(false);
  const [selectVisa, setVisa] = useState(true);
  const [selectMaster, setMaster] = useState(false);
  const [selectPaypal, setPaypal] = useState(false);

  const { darkMode } = UseAppContext();

  const confirmHandler = () => {
    setConfirm(true);
  };
  const cancelHandler = () => {
    setConfirm(false);
    setFinalConfirm(false);
  };
  const finalConfirmHandler = () => {
    setFinalConfirm(true);
    setTimeout(function () {
      setFinalConfirm(false);
      setPurchased(true);
    }, 3000);
  };

  const selectVisaHandler = () => {
    setVisa(true);
    setMaster(false);
    setPaypal(false);
  };

  const selectMasterHandler = () => {
    setVisa(false);
    setMaster(true);
    setPaypal(false);
  };

  const selectPaypalHandler = () => {
    setVisa(false);
    setMaster(false);
    setPaypal(true);
  };

  return (
    <div className={darkMode ? "payment-container-dark" : "payment-container"}>
      <div className="payment-header">
        <Link to="/home">
          <img src={Arrow} alt="arrow" />
        </Link>
        <h4 className={darkMode ? "dark-mode-text" : "light-mode-text"}>
          Payment Method
        </h4>
      </div>

      <div
        className={
          darkMode
            ? "payment-card-option-container-dark"
            : "payment-card-option-container"
        }
      >
        <img
          src={visa}
          alt="visa"
          onClick={selectVisaHandler}
          className={!selectVisa ? "visa" : ""}
        />
        <img
          src={master}
          alt="master"
          onClick={selectMasterHandler}
          className={!selectMaster ? "master" : ""}
        />
        <img
          src={paypal}
          alt="paypal"
          onClick={selectPaypalHandler}
          className={!selectPaypal ? "paypal" : ""}
        />
      </div>

      <div
        className={
          darkMode
            ? "payment-card-details-container-dark"
            : "payment-card-details-container"
        }
      >
        <div className="payment-card-details-1">
          <h4 className={darkMode ? "dark-mode-text" : "light-mode-text"}>
            CARD NUMBER
          </h4>
          <input type="text" />
        </div>
        <div className="payment-card-details-2">
          <div className="expire">
            <h4 className={darkMode ? "dark-mode-text" : "light-mode-text"}>
              EXPIRATION DATE
            </h4>
            <input type="text" />
          </div>
          <div className="cvv">
            <h4 className={darkMode ? "dark-mode-text" : "light-mode-text"}>
              CVV
            </h4>
            <input type="text" />
          </div>
        </div>
        <div className="payment-card-details-3">
          <h4 className={darkMode ? "dark-mode-text" : "light-mode-text"}>
            CARD HOLDER'S NAME
          </h4>
          <input type="text" />
        </div>

        <div
          className={darkMode ? "card-payment-btn-dark" : "card-payment-btn"}
          onClick={confirmHandler}
        >
          CONFIRM PAYMENT
        </div>

        <Dialog
          open={confirm}
          fullWidth
          maxWidth="md"
          PaperProps={{
            style: {
              boxShadow: "none",
              textAlign: "center",
              width: "auto",
              borderRadius: "17px",
            },
          }}
        >
          <DialogContent className={darkMode ? "dialog10" : ""}>
            <div className="dialog-container">
              {purchased && (
                <h2>
                  Successfully Purchased. <br />
                  <Link to="/home">home</Link>
                </h2>
              )}
              {!purchased && (
                <div className="confirm-title">
                  Are you sure you want to buy this?
                </div>
              )}
              {finalConfirm && <ClipLoader className="cliploader" />}
              {!purchased && (
                <div className={darkMode ? "confirm-container-dark" : "confirm-container"}>
                  <button onClick={finalConfirmHandler}>CONFIRM</button>
                  <button onClick={cancelHandler}>CANCEL</button>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Payment;
