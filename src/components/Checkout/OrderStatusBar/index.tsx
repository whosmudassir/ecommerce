import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface IOrderStatusBar {
  cartSuccess: boolean;
  checkoutSuccess: boolean;
  confirmationSuccess: boolean;
  navToCart: boolean;
  navToCheckout: boolean;
}

const OrderStatusBar = ({
  cartSuccess,
  checkoutSuccess,
  confirmationSuccess,
  navToCheckout,
  navToCart,
}: IOrderStatusBar) => {
  const navigate = useNavigate();

  const cartNavigationHandler = () => {
    if (navToCart) {
      navigate("/cart");
    }
  };

  const checkoutNavigationHandler = () => {
    if (navToCheckout) {
      navigate("/checkout");
    }
  };

  return (
    <div>
      <div className="order-status-parent-box">
        {/* cart progress */}
        <div
          className={`order-status-child-box first-status-child + ${
            cartSuccess && "active-status"
          } `}
        >
          <div
            onClick={cartNavigationHandler}
            className={` ${navToCart && "status-pointer"} `}
          >
            <p className="order-status-child-title">
              {cartSuccess && (
                <i
                  className="fa-regular fa-circle-check"
                  style={{ color: "black" }}
                ></i>
              )}
              Shopping Cart
            </p>
            <p className="order-status-child-body">View your items</p>
          </div>
        </div>

        {/* checkout progress */}
        <div
          className={`order-status-child-box + ${
            checkoutSuccess && "active-status"
          } `}
        >
          <div
            onClick={checkoutNavigationHandler}
            className={` ${navToCheckout && "status-pointer"} `}
          >
            <p className="order-status-child-title">
              {checkoutSuccess && (
                <i
                  className="fa-regular fa-circle-check"
                  style={{ color: "black" }}
                ></i>
              )}
              Shipping and Checkout
            </p>
            <p className="order-status-child-body">Enter your details</p>
          </div>
        </div>

        {/* confirmation progress */}
        <div
          className={`order-status-child-box + ${
            confirmationSuccess && "active-status"
          } `}
        >
          <p className="order-status-child-title">
            {confirmationSuccess && (
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
