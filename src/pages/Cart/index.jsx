import React from "react";
import "./index.css";
import OrderStatusBar from "../../components/OrderStatusBar";
import CartProductTitle from "../../components/CartProductTitle";
import CartProductItem from "../../components/CartProductItem";
import CouponCodeInput from "../../components/CouponCodeInput";

const Cart = () => {
  return (
    <div class="body-wrapper">
      <div className="cart-wrapper">
        <div>
          <p className="cart-heading">Cart</p>
        </div>
        <OrderStatusBar />
        <CartProductTitle />
        <CartProductItem /> <CartProductItem /> <CartProductItem />
        <CouponCodeInput />
      </div>
    </div>
  );
};

export default Cart;
