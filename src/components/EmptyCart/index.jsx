import React from "react";
import "./index.css";

const EmptyCart = () => {
  return (
    <div className="empty-cart-wrapper">
      <i class="fa-solid fa-ban"></i>

      <p className="empty-cart-text">Your cart is currently empty</p>
    </div>
  );
};

export default EmptyCart;
