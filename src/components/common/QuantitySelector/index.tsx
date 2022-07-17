import React, { useState } from "react";
import "./index.css";
interface IQuantitySelectorProps {
  onIncreaseBtn: () => void;
  onDecreaseBtn: () => void;
}

const QuantitySelector = ({
  onIncreaseBtn,
  onDecreaseBtn,
}: IQuantitySelectorProps) => {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    onIncreaseBtn();
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      onDecreaseBtn();
    }
  };

  return (
    <div className="quantity-wrapper">
      <button className="icon-wrapper">
        <i className="fa-solid fa-minus" onClick={decreaseQuantity}></i>
      </button>
      <p className="quantity-number">{quantity}</p>
      <button className="icon-wrapper" onClick={increaseQuantity}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default QuantitySelector;
