import React, { useState } from "react";
import "./index.css";

const CouponCodeInput = () => {
  const [couponCodeMessage, setCouponCodeMessage] = useState("");
  const applyCouponCode = () => {
    setCouponCodeMessage("Incorrect Coupon Code");
  };
  return (
    <>
      <div className="coupon-code-input-wrapper">
        <input
          className="outlined-input coupon-input"
          type="text"
          placeholder="Coupon code"
        />
        <button className="primary-btn coupon-btn" onClick={applyCouponCode}>
          {" "}
          Apply{" "}
        </button>
      </div>
      <div className="coupon-code-input-wrapper">
        <p>{couponCodeMessage}</p>
      </div>
    </>
  );
};

export default CouponCodeInput;
