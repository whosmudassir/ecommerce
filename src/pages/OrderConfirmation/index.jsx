import React from "react";
import "./index.css";
import OrderStatusBar from "../../components/OrderStatusBar";

const OrderConfirmation = () => {
  return (
    <div class="body-wrapper">
      <div className="cart-wrapper">
        <div>
          <p className="cart-heading">Order Confirmation</p>
        </div>
        <OrderStatusBar cart={true} checkout={true} confirmation={true} />
        <div className="order-confirmation-wrapper">
          <p className="congrats-heading-text"> Congratulations</p>
          <p className="congrats-body-text"> Your order has been placed </p>
          <p className="order-id-text"> Order ID : </p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
