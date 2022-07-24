import React from "react";

interface IAddToBagButtonProps {
  selectedSize: string;
  addItemToCart: () => void;
}
const AddToBagButton = ({
  selectedSize,
  addItemToCart,
}: IAddToBagButtonProps) => {
  return (
    <div>
      <button
        className={` ${
          selectedSize.length !== 0
            ? "primary-btn btn-active"
            : "secondary-btn btn-inactive"
        }`}
        onClick={() => addItemToCart()}
      >
        Add to bag
      </button>
    </div>
  );
};

export default AddToBagButton;
