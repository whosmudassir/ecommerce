import React from "react";
import PlaceOrderButton from "../PlaceOrderButton";
import "./index.css";

const OrderInfo = () => {
  return (
    <div className="order-info-wrapper">
      <div className="order-info-items-wrapper">
        <div className="order-info-items">
          <p class="order-info-text">Order Info</p>
        </div>
        <div className="order-info-items">
          <p class="order-info-item-main-text">Product detail</p>
          <p class="order-info-item-text">444</p>
        </div>
        <div className="order-info-items">
          <p class="order-info-item-main-text">Discount</p>
          <p class="order-info-item-text">566</p>
        </div>
        <div className="order-info-items">
          <p class="order-info-item-main-text">Shipping</p>
          <p class="order-info-item-text">99</p>
        </div>
        <div className="order-info-items">
          <p class="order-info-item-main-text">SGST</p>
          <p class="order-info-item-text">12</p>
        </div>
        <div className="order-info-items">
          <p class="order-info-item-main-text">CGST</p>
          <p class="order-info-item-text">12</p>
        </div>
        <div className="order-info-items">
          <p class="order-info-item-main-text">Total</p>
          <p class="order-info-item-main-text">3312</p>
        </div>
      </div>
      <PlaceOrderButton />
    </div>
  );
};

export default OrderInfo;
