import React from "react";
import "./index.css";
const OrderStatusBar = ({ cart, checkout, confirmation }) => {
  return (
    <div>
      <div className="order-status-parent-box">
        <div
          className={`order-status-child-box first-status-child + ${
            cart && "active-status"
          } `}
        >
          <p className="order-status-child-title">
            {cart && (
              <i
                class="fa-regular fa-circle-check"
                style={{ color: "black" }}
              ></i>
            )}
            Shopping Cart
          </p>
          <p className="order-status-child-body">View your items</p>
        </div>
        <div
          className={`order-status-child-box + ${checkout && "active-status"} `}
        >
          <p className="order-status-child-title">
            {checkout && (
              <i
                class="fa-regular fa-circle-check"
                style={{ color: "black" }}
              ></i>
            )}
            Shipping and Checkout
          </p>
          <p className="order-status-child-body">Enter your details</p>
        </div>
        <div
          className={`order-status-child-box + ${
            confirmation && "active-status"
          } `}
        >
          <p className="order-status-child-title">
            {confirmation && (
              <i
                class="fa-regular fa-circle-check"
                style={{ color: "black" }}
              ></i>
            )}
            Order Confirmation
          </p>
          <p className="order-status-child-body">Review your order</p>
        </div>
      </div>
    </div>
  );
};

export default OrderStatusBar;
