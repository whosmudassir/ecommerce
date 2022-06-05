import React from "react";
import "./index.css";
const OrderStatusBar = () => {
  return (
    <div>
      <div className="order-status-parent-box">
        <div className="order-status-child-box first-status-child active-status">
          <p className="order-status-child-title">
            <i
              class="fa-regular fa-circle-check"
              style={{ color: "black" }}
            ></i>
            Shopping Cart
          </p>
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
  );
};

export default OrderStatusBar;