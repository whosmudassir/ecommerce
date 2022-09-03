import React from "react";
import "./index.css";

interface ISizeSelectorVertical {
  setSelectedSize: any;
}

const SizeSelectorVertical = ({ setSelectedSize }: ISizeSelectorVertical) => {
  const onSizeChange = (e: any) => {
    setSelectedSize(e.target.value);
  };
  return (
    <div>
      <form>
        <div className="add-to-cart-popup-size-wrapper">
          <div className="size-selector-vertical">
            <input
              type="radio"
              id="aS"
              value="S"
              name="size"
              onChange={(e) => {
                onSizeChange(e);
              }}
            />
            <label htmlFor="aS" id="aS">
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
            <label htmlFor="aM" id="aM">
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
            <label htmlFor="aL" id="aL">
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
            <label htmlFor="aXL" id="aXL">
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
            <label htmlFor="aXXL" id="aXXL">
              XXL
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SizeSelectorVertical;
