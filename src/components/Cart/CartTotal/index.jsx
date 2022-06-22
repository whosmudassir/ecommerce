import React from "react";
import CheckoutButton from "../CheckoutButton";
import "./index.css";

const CartTotal = () => {
  return (
    <div className="cart-total-wrapper">
      <div className="cart-total-items-wrapper">
        <div className="cart-total-items">
          <p class="cart-total-text">Cart Totals</p>
        </div>
        <div className="cart-total-items">
          <p class="cart-total-item-main-text">SubTotal</p>
          <p class="cart-total-item-text">444</p>
        </div>
        <div className="cart-total-items">
          <p class="cart-total-item-main-text">Discount</p>
          <p class="cart-total-item-text">566</p>
        </div>
        <div className="cart-total-items">
          <p class="cart-total-item-main-text">Shipping</p>
          <p class="cart-total-item-text">99</p>
        </div>
        <div className="cart-total-items">
          <p class="cart-total-item-main-text">SGST</p>
          <p class="cart-total-item-text">12</p>
        </div>
        <div className="cart-total-items">
          <p class="cart-total-item-main-text">CGST</p>
          <p class="cart-total-item-text">12</p>
        </div>
        <div className="cart-total-items">
          <p class="cart-total-item-main-text">Total</p>
          <p class="cart-total-item-main-text">3312</p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
