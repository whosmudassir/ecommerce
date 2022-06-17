import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <>
      <div className="empty-cart-wrapper">
        <i class="fa-solid fa-ban"></i>

        <p className="empty-cart-text">Your cart is currently empty</p>
      </div>
      <div>
        <Link to="/shop">
          <button class="primary-btn empty-cart-btn">Return to shop </button>
        </Link>
      </div>
    </>
  );
};

export default EmptyCart;
