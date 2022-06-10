import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const CheckoutButton = () => {
  return (
    <div className="checkout-btn-wrapper">
      <div className="checkout-btn-item">
        <Link to="/checkout">
          <button class="primary-btn checkout-btn">Proceed to checkout </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutButton;
