import React from "react";
import "./index.css";

const CartTotal = () => {
  return (
    <div className="cart-total-wrapper">
      <div className="cart-total-items-wrapper">
        <div className="cart-total-items">
          <p>Cart Totals</p>
        </div>
        <div className="cart-total-items">
          <p>SubTotal</p>
          <p>444</p>
        </div>
        <div className="cart-total-items">
          <p>Discount</p>
          <p>566</p>
        </div>
        <div className="cart-total-items">
          <p>Shipping</p>
          <p>99</p>
        </div>
        <div className="cart-total-items">
          <p>SGST</p>
          <p>12</p>
        </div>
        <div className="cart-total-items">
          <p>CGST</p>
          <p>12</p>
        </div>
        <div className="cart-total-items">
          <p>Total</p>
          <p>3312</p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
