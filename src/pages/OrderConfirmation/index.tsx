import React from "react";
import "./index.css";
import OrderStatusBar from "../../components/Checkout/OrderStatusBar";
import { addressFormStore, loggedInUser } from "../../store";

const OrderConfirmation = () => {
  //store
  const loggedInUserData = loggedInUser((state) => state.loggedInUserData);
  const formValues = addressFormStore((state) => state.formValues);

  const randstr = (prefix: any) => {
    return Math.random()
      .toString(36)
      .replace("0.", prefix || "");
  };

  return (
    <>
      <div className="body-wrapper">
        <div className="cart-wrapper">
          <div>
            <p className="cart-heading">Order Confirmation</p>
          </div>
          <OrderStatusBar
            cartSuccess={true}
            checkoutSuccess={true}
            confirmationSuccess={true}
            navToCart={false}
            navToCheckout={false}
          />
          <div className="order-confirmation-wrapper">
            <p className="congrats-heading-text">
              🎉 Congratulations {formValues.firstName} !
            </p>
            <p className="congrats-body-text"> Your order has been placed </p>
            <p className="order-id-text"> Order ID : {randstr("msftsRep")} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderConfirmation;
