import React, { useState } from "react";

const Card = () => {
  const [heartIcon, setHeartIcon] = useState("regular");

  const addToWishlist = () => {
    if (heartIcon == "regular") {
      setHeartIcon("solid");
    } else {
      setHeartIcon("regular");
    }
  };

  return (
    <div>
      <div class="card-wrapper">
        <div class="card-head">
          <img
            class="card-img"
            src="https://i.pinimg.com/564x/83/af/62/83af629c800acaa786e55fefd44bdefb.jpg"
            alt=""
          />

          <button
            class="icon-wrapper"
            onClick={() => {
              addToWishlist();
            }}
          >
            <i class={`fa-${heartIcon} fa-heart card-heart-icon`}></i>
          </button>
        </div>
        <div class="card-body">
          <div class="card-info">
            <p class="card-name"> Balenciaga Jacket </p>
            <p class="card-price">$2229</p>
          </div>
          <div class="card-btn-wrapper">
            <button class="primary-btn">
              <i class="fa fa-plus" id="render-icon icon"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
