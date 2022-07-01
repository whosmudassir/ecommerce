import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const OrderStatusBar = ({ cart, checkout, confirmation }) => {
  return (
    <div>
      <div className="order-status-parent-box">
        <div
          className={`order-status-child-box first-status-child + ${
            cart && "active-status"
          } `}
        >
          <Link to={"/cart"}>
            <p className="order-status-child-title">
              {cart && (
                <i
                  className="fa-regular fa-circle-check"
                  style={{ color: "black" }}
                ></i>
              )}
              Shopping Cart
            </p>
            <p className="order-status-child-body">View your items</p>
          </Link>
        </div>
        <div
          className={`order-status-child-box + ${checkout && "active-status"} `}
        >
          <Link to={"/checkout"}>
            <p className="order-status-child-title">
              {checkout && (
                <i
                  className="fa-regular fa-circle-check"
                  style={{ color: "black" }}
                ></i>
              )}
              Shipping and Checkout
            </p>
            <p className="order-status-child-body">Enter your details</p>
          </Link>
        </div>
        <div
          className={`order-status-child-box + ${
            confirmation && "active-status"
          } `}
        >
          <p className="order-status-child-title">
            {confirmation && (
              <i
                className="fa-regular fa-circle-check"
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
