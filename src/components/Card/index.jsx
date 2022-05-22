import React from "react";

const Card = () => {
  return (
    <div>
      <div class="card-wrapper">
        <div class="card-head">
          <img
            class="card-img"
            src="https://i.pinimg.com/564x/8d/57/dc/8d57dc0c845f12a012d5b0e39803d8c6.jpg"
            alt=""
          />
          <div class="card-banner">ON SALE</div>
        </div>
        <div class="card-body">
          <div class="card-info">
            <p class="card-name"> Balenciaga Jacket </p>
            <p class="card-price">$2229</p>
          </div>
          <div class="card-btn-wrapper">
            <button class="primary-btn">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
