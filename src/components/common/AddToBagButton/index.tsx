import React from "react";

interface IAddToBagButtonProps {
  selectedSize: string;
}
const AddToBagButton = ({ selectedSize }: IAddToBagButtonProps) => {
  return (
    <div>
      <button
        className={` ${
          selectedSize.length !== 0
            ? "primary-btn btn-active"
            : "secondary-btn btn-inactive"
        }`}
        // onClick={() => addItemToCart(item)}
      >
        Add to bag
      </button>
    </div>
  );
};

export default AddToBagButton;
