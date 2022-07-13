import React from "react";
import "./index.css";
import { isAlertVisible } from "../../../store/index";

const SuccessAlert = () => {
  const alert = isAlertVisible((state) => state.alert);
  return (
    <div className={`success-alert-wrapper ${alert && "alert-visible"}`}>
      <div className="success-alert">
        <i className="fa-solid fa-circle-check"></i>Item added to your cart
      </div>
    </div>
  );
};

export default SuccessAlert;
