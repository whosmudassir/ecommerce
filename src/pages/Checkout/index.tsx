import React from "react";
import "./index.css";
import OrderStatusBar from "../../components/Checkout/OrderStatusBar";
import ShippingInfoForm from "../../components/Checkout/ShippingInfoForm";
import OrderInfo from "../../components/Checkout/OrderInfo";

const Checkout = () => {
  return (
    <div className="body-wrapper">
      <div className="cart-wrapper">
        <div>
          <p className="cart-heading">Checkout</p>
        </div>
        <OrderStatusBar
          cartSuccess={true}
          checkoutSuccess={true}
          confirmationSuccess={false}
          navToCart={true}
          navToCheckout={true}
        />
        <div className="checkout-info-wrapper">
          <OrderInfo />
          <ShippingInfoForm />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
