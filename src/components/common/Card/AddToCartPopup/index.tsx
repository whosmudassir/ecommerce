import React, { useState } from "react";
import "./index.css";

const AddToCartPopup = () => {
  return (
    <>
      <div>
        <p>Sizes</p>

        <form>
          <div className="add-to-cart-popup-size-wrapper">
            <div className="radiobtn">
              <input type="radio" id="huey" name="drone" value="huey" checked />
              <label for="huey">XS</label>
            </div>
            <div className="radiobtn">
              <input type="radio" id="huey" name="drone" value="huey" checked />
              <label for="huey">S</label>
            </div>
            <div className="radiobtn">
              <input type="radio" id="huey" name="drone" value="huey" checked />
              <label for="huey">M</label>
            </div>
            <div className="radiobtn">
              <input type="radio" id="huey" name="drone" value="huey" checked />
              <label for="huey">L</label>
            </div>
            <div className="radiobtn">
              <input type="radio" id="huey" name="drone" value="huey" checked />
              <label for="huey">XL</label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddToCartPopup;
