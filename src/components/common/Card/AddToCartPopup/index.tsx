import React, { useState } from "react";
import "./index.css";

const SizeSelector = ({ size }) => {
  return (
    <form>
      <div className="add-to-cart-popup-size-wrapper">
        <div className="donate-now">
          <input type="radio" id={size} name="size" />
          <label for={size} id={size}>
            {size}
          </label>
        </div>
      </div>
    </form>
  );
};

const AddToCartPopup = () => {
  const availableSizes = ["S", "M", "L", "XL", "XXL"];
  return (
    <>
      <div>
        <p className="sizes-text">Sizes</p>

        {availableSizes.map((size) => SizeSelector({ size }))}
      </div>
    </>
  );
};

export default AddToCartPopup;
