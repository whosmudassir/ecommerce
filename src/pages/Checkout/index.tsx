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
        <OrderStatusBar cart={true} checkout={true} confirmation={false} />
        <div className="checkout-info-wrapper">
          <ShippingInfoForm />
          <OrderInfo />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
