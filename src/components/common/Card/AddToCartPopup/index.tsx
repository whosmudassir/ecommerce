import React from "react";
import "./index.css";
import SizeSelectorVertical from "../../SizeSelectorVertical";

interface IAddToCartPopup {
  setSelectedSize: any;
}

const AddToCartPopup = ({ setSelectedSize }: IAddToCartPopup) => {
  return (
    <div>
      <p className="sizes-text">Sizes</p>
      <SizeSelectorVertical setSelectedSize={setSelectedSize} />
    </div>
  );
};

export default AddToCartPopup;
