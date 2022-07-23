import React from "react";
import "./index.css";

interface ISizeSelectorHorizontal {
  setSelectedSize: any;
}

const SizeSelectorHorizontal = ({
  setSelectedSize,
}: ISizeSelectorHorizontal) => {
  const onSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };
  return (
    <div>
      <form>
        <div className="add-to-cart-popup-size-wrapper">
          <div className="size-selector-horizontal">
            <p>Size</p>
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
  );
};

export default SizeSelectorHorizontal;
