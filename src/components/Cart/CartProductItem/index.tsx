import React from "react";
import QuantitySelector from "../../common/QuantitySelector";
import "./index.css";

interface ICartProductItemProps {
  id: number;
  brandName: string;
  name: string;
  price: number;
  size: string;
  imageUrl: string;
}

const CartProductItem = ({
  id,
  brandName,
  name,
  price,
  size,
  imageUrl,
}: ICartProductItemProps) => {
  return (
    <div>
      <div className="cart-product-item-parent-box">
        <div className="cart-product-item-child-box">
          <div>
            <img
              className="cart-product-item-child-img"
              src={imageUrl}
              alt=""
            />
          </div>
          <div className="cart-product-item-child-img-text remove-btn-wrapper">
            <p className="cart-product-item-child-item">
              {name} - {size}
            </p>
            <p className="cart-product-item-child-item remove-btn">Remove</p>
          </div>
        </div>
        <div className="cart-product-item-child-box cart-product-item-child-img-text">
          <p className="cart-product-item-title">Price</p>
          <p className="cart-product-item-child-item">{price}</p>
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
