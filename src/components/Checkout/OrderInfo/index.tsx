import React from "react";
import PlaceOrderButton from "../PlaceOrderButton";
import "./index.css";

const OrderInfo = () => {
  return (
    <div className="order-info-wrapper">
      <div className="order-info-items-wrapper">
        <div className="order-info-items">
          <p className="order-info-text">Order Info</p>
        </div>
        <div className="order-info-items">
          <p className="order-info-item-main-text">Product detail</p>
          <p className="order-info-item-text">444</p>
        </div>
        <div className="order-info-items">
          <p className="order-info-item-main-text">Discount</p>
          <p className="order-info-item-text">566</p>
        </div>
        <div className="order-info-items">
          <p className="order-info-item-main-text">Shipping</p>
          <p className="order-info-item-text">99</p>
        </div>
        <div className="order-info-items">
          <p className="order-info-item-main-text">SGST</p>
          <p className="order-info-item-text">12</p>
        </div>
        <div className="order-info-items">
          <p className="order-info-item-main-text">CGST</p>
          <p className="order-info-item-text">12</p>
        </div>
        <div className="order-info-items">
          <p className="order-info-item-main-text">Total</p>
          <p className="order-info-item-main-text">3312</p>
        </div>
      </div>
      <PlaceOrderButton />
    </div>
  );
};

export default OrderInfo;
