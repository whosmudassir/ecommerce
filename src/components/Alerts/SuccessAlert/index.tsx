import React from "react";
import "./index.css";
import { isAlertVisible } from "../../../store/index";
import { alertTextStore } from "../../../store/index";

const SuccessAlert = () => {
  const alert = isAlertVisible((state) => state.alert);
  const alertText = alertTextStore((state) => state.alertText);

  return (
    <div className={`success-alert-wrapper ${alert && "alert-visible"}`}>
      <div className="success-alert">
        <i className="fa-solid fa-circle-check success-alert-icon"></i>
        {alertText}
      </div>
    </div>
  );
};

export default SuccessAlert;
