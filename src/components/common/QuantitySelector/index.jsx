import React from "react";
import "./index.css";

const QuantitySelector = () => {
  return (
    <div className="quantity-wrapper">
      <button class="icon-wrapper">
        <i class="fa-solid fa-minus"></i>
      </button>
      <p className="quantity-number">1</p>
      <button class="icon-wrapper">
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default QuantitySelector;
