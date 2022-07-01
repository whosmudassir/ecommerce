import React from "react";
import CheckoutButton from "../CheckoutButton";
import "./index.css";

const CartTotal = () => {
  return (
    <div className="cart-total-wrapper">
      <div className="cart-total-items-wrapper">
        <div className="cart-total-items">
          <p className="cart-total-text">Cart Totals</p>
        </div>
        <div className="cart-total-items">
          <p className="cart-total-item-main-text">SubTotal</p>
          <p className="cart-total-item-text">444</p>
        </div>
        <div className="cart-total-items">
          <p className="cart-total-item-main-text">Discount</p>
          <p className="cart-total-item-text">566</p>
        </div>
        <div className="cart-total-items">
          <p className="cart-total-item-main-text">Shipping</p>
          <p className="cart-total-item-text">99</p>
        </div>
        <div className="cart-total-items">
          <p className="cart-total-item-main-text">SGST</p>
          <p className="cart-total-item-text">12</p>
        </div>
        <div className="cart-total-items">
          <p className="cart-total-item-main-text">CGST</p>
          <p className="cart-total-item-text">12</p>
        </div>
        <div className="cart-total-items">
          <p className="cart-total-item-main-text">Total</p>
          <p className="cart-total-item-main-text">3312</p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
