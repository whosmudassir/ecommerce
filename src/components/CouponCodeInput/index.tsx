import React from "react";
import "./index.css";

const CouponCodeInput = () => {
  return (
    <div className="coupon-code-input-wrapper">
      <input
        className="outlined-input coupon-input"
        type="text"
        placeholder="Coupon code"
      />
      <button className="primary-btn coupon-btn"> Apply </button>
    </div>
  );
};

export default CouponCodeInput;
