import React from "react";
import "./index.css";

const SuccessAlert = () => {
  return (
    <div className="success-alert-wrapper">
      <div className="success-alert">
        <i className="fa-solid fa-circle-check"></i>Item added to your cart
      </div>
    </div>
  );
};

export default SuccessAlert;