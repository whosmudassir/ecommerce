import React from "react";
import QuantitySelector from "../../common/QuantitySelector";
import "./index.css";

const CartProductItem = () => {
  return (
    <div>
      <div className="cart-product-item-parent-box">
        <div className="cart-product-item-child-box">
          <div>
            <img
              className="cart-product-item-child-img"
              src="https://assets.bonkerscorner.com/uploads/2022/03/21132021/Bonkerscorner_black_heavyweight_07-600x900.jpg"
              alt=""
            />
          </div>
          <div className="cart-product-item-child-img-text remove-btn-wrapper">
            <p className="cart-product-item-child-item">Product Name - Size</p>
            <p className="cart-product-item-child-item remove-btn">Remove</p>
          </div>
        </div>
        <div className="cart-product-item-child-box cart-product-item-child-img-text">
          <p className="cart-product-item-title">Price</p>
          <p className="cart-product-item-child-item">100</p>
        </div>
        <div className="cart-product-item-child-box cart-product-item-child-img-text">
          <p className="cart-product-item-title">Quantity</p>
          <QuantitySelector />
        </div>
        <div className="cart-product-item-child-box cart-product-item-child-img-text">
          <p className="cart-product-item-title">Subtotal</p>
          <p className="cart-product-item-child-item">6376</p>
        </div>
      </div>
    </div>
  );
};

export default CartProductItem;
