import React from "react";
import "./index.css";
interface IAddToBagButtonProps {
  selectedSize: string;
  addItemToCart: () => void;
}
const AddToBagButton = ({
  selectedSize,
  addItemToCart,
}: IAddToBagButtonProps) => {
  return (
    <div className="add-to-bag-button-wrapper">
      <button
        className={` ${
          selectedSize.length !== 0
            ? "primary-btn btn-active"
            : "secondary-btn btn-inactive"
        }`}
        onClick={() => addItemToCart()}
      >
        <p className="horizontal-btn"> Add to bag</p>
      </button>
    </div>
  );
};

export default AddToBagButton;
