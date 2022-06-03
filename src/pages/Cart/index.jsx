import React from "react";
import "./index.css";

const Cart = () => {
  return (
    <div class="body-wrapper">
      <div className="cart-wrapper">
        <div>
          <p className="cart-heading">Cart</p>
        </div>
        <div className="order-status-parent-box">
          <div className="order-status-child-box active">
            <p className="order-status-child-title">Shopping Cart</p>
            <p className="order-status-child-body">View your items</p>
          </div>
          <div className="order-status-child-box">
            <p className="order-status-child-title">Shipping and Checkout</p>
            <p className="order-status-child-body">Enter your details</p>
          </div>
          <div className="order-status-child-box">
            <p className="order-status-child-title">Order Confirmation</p>
            <p className="order-status-child-body">Review your order</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
