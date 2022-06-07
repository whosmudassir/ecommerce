import React from "react";
import "./index.css";

const CouponCodeInput = () => {
  return (
    <div className="coupon-code-input-wrapper">
      <input class="outlined-input" type="text" placeholder="Coupon Code" />
      <button class="primary-btn coupon-btn"> Apply </button>
    </div>
  );
};

export default CouponCodeInput;
