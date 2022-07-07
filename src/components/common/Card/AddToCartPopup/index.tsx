import React, { useState } from "react";
import "./index.css";

const AddToCartPopup = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const onSizeChange = (e) => {
    console.log(e.target.value);
    setSelectedSize(e.target.value);
  };

  return (
    <>
      <div>
        <p className="sizes-text">Sizes</p>

        <form>
          <div className="add-to-cart-popup-size-wrapper">
            <div className="donate-now">
              <input
                type="radio"
                id="aS"
                value="S"
                name="size"
                onChange={(e) => {
                  onSizeChange(e);
                }}
              />
              <label for="aS" id="aS">
                S
              </label>
              <input
                type="radio"
                id="aM"
                value="M"
                name="size"
                onChange={(e) => {
                  onSizeChange(e);
                }}
              />
              <label for="aM" id="aM">
                M
              </label>
              <input
                type="radio"
                id="aL"
                value="L"
                name="size"
                onChange={(e) => {
                  onSizeChange(e);
                }}
              />
              <label for="aL" id="aL">
                L
              </label>
              <input
                type="radio"
                id="aXL"
                value="XL"
                name="size"
                onChange={(e) => {
                  onSizeChange(e);
                }}
              />
              <label for="aXL" id="aXL">
                XL
              </label>
              <input
                type="radio"
                id="aXXL"
                value="XXL"
                name="size"
                onChange={(e) => {
                  onSizeChange(e);
                }}
              />
              <label for="aXXL" id="aXXL">
                XXL
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddToCartPopup;
