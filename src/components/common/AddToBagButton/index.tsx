import React from "react";

const AddToBagButton = () => {
  return (
    <div>
      <button
        className={` ${
          false ? "primary-btn btn-active" : "secondary-btn btn-inactive"
        }`}
        // onClick={() => addItemToCart(item)}
      >
        Add to bag
      </button>
    </div>
  );
};

export default AddToBagButton;
