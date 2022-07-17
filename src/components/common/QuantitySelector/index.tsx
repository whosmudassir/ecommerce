import React, { useState } from "react";
import "./index.css";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      return setQuantity((prevQuantity) => prevQuantity - 1);
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
