import React from "react";
import "./index.css";
import OrderStatusBar from "../../components/OrderStatusBar";
import CartProductTitle from "../../components/CartProductTitle";
import CartProductItem from "../../components/CartProductItem";
import CouponCodeInput from "../../components/CouponCodeInput";
import CartTotal from "../../components/CartTotal";
import CheckoutButton from "../../components/CheckoutButton";

const OrderConfirmation = () => {
  return (
    <div class="body-wrapper">
      <div className="cart-wrapper">
        <div>
          <p className="cart-heading">Order Confirmation</p>
        </div>
        <OrderStatusBar cart={true} checkout={true} confirmation={true} />
      </div>
    </div>
  );
};

export default OrderConfirmation;
