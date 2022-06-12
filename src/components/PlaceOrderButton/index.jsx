import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const PlaceOrderButton = () => {
  return (
    <div className="place-order-btn-wrapper">
      <div className="place-order-btn-item">
        <Link to="">
          <button class="primary-btn place-order-btn">Place Order</button>
        </Link>
      </div>
    </div>
  );
};

export default PlaceOrderButton;
