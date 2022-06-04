import React from "react";
import "./index.css";
import OrderStatusBar from "../../components/OrderStatusBar";

const Cart = () => {
  return (
    <div class="body-wrapper">
      <div className="cart-wrapper">
        <div>
          <p className="cart-heading">Cart</p>
        </div>
        <OrderStatusBar />
      </div>
    </div>
  );
};

export default Cart;
