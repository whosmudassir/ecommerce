import React from "react";
import "./index.css";

const CartProductTitle = () => {
  return (
    <div>
      <div className="cart-product-title-parent-box">
        <div className="cart-product-title-child-box">
          <p className="cart-product-title-child-title">Product</p>
        </div>
        <div className="cart-product-title-child-box">
          <p className="cart-product-title-child-title">Price</p>
        </div>
        <div className="cart-product-title-child-box">
          <p className="cart-product-title-child-title">Quantity</p>
        </div>
        <div className="cart-product-title-child-box">
          <p className="cart-product-title-child-title">SubTotal</p>
        </div>
      </div>
    </div>
  );
};

export default CartProductTitle;
