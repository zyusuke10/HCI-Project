import { Alert } from "@mui/material";
import React from "react";
import { UseAppContext } from "../context/appContext";

const ShowAlert = () => {
  const { alertType, alertText } = UseAppContext();
  return (
    <Alert severity={alertType}>
      <strong>{alertText}</strong>
    </Alert>
  );
};

export default ShowAlert;
