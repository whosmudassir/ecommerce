import React, { useState } from "react";
import QuantitySelector from "../../common/QuantitySelector";
import "./index.css";
import { cartStore, cartGrandTotalStore } from "../../../store";

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
  //add item to cart
  //@ts-ignore
  const removeFromCart = cartStore((state) => state.removeFromCart);
  const increaseCartGrandTotal = cartGrandTotalStore(
    (state) => state.increaseCartGrandTotal
  );
  const decreaseCartGrandTotal = cartGrandTotalStore(
    (state) => state.decreaseCartGrandTotal
  );

  const [itemSubTotal, setItemSubTotal] = useState(price);

  const onQuantityIncrease = () => {
    setItemSubTotal(itemSubTotal + price);
    //@ts-ignore
    increaseCartGrandTotal(price);
  };

  const onQuantityDecrease = () => {
    setItemSubTotal(itemSubTotal - price);
    //@ts-ignore
    decreaseCartGrandTotal(price);
  };

  const removeItem = (id: any) => {
    //@ts-ignore
    removeFromCart(id);
    //@ts-ignore
    decreaseCartGrandTotal(itemSubTotal);
  };

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
              {name} : {size}
            </p>
            <button
              onClick={() => removeItem(id)}
              className="cart-product-item-child-item remove-btn-text footer-text"
            >
              Remove
            </button>
          </div>
        </div>
        <div className="cart-product-item-child-box cart-product-item-child-img-text">
          <p className="cart-product-item-title">Price</p>
          <p className="cart-product-item-child-item">{price}</p>
        </div>
        <div className="cart-product-item-child-box cart-product-item-child-img-text">
          <p className="cart-product-item-title">Quantity</p>
          <QuantitySelector
            onIncreaseBtn={onQuantityIncrease}
            onDecreaseBtn={onQuantityDecrease}
          />
        </div>
        <div className="cart-product-item-child-box cart-product-item-child-img-text">
          <p className="cart-product-item-title">Subtotal</p>
          <p className="cart-product-item-child-item">{itemSubTotal}</p>
        </div>
      </div>
    </div>
  );
};

export default CartProductItem;
