import React, { useState } from "react";
import "./index.css";

const AddToCartPopup = () => {
  return (
    <>
      <div>
        <p>Sizes</p>

        <form>
          <div className="add-to-cart-popup-size-wrapper">
            <div className="donate-now">
              <input type="radio" id="aXS" name="size" />
              <label for="aXS" id="aXS">
                XS
              </label>
              <input type="radio" id="aS" name="size" />
              <label for="aS" id="aS">
                S
              </label>
              <input type="radio" id="aM" name="size" />
              <label for="aM" id="aM">
                M
              </label>
              <input type="radio" id="aL" name="size" />
              <label for="aL" id="aL">
                L
              </label>
              <input type="radio" id="aXL" name="size" />
              <label for="aXL" id="aXL">
                XL
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddToCartPopup;
