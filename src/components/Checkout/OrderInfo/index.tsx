import React from "react";
// import PlaceOrderButton from "../PlaceOrderButton";
import "./index.css";
import { cartGrandTotalStore } from "../../../store";

const OrderInfo = () => {
  const cartGrandTotal = cartGrandTotalStore((state) => state.cartGrandTotal);

  //taxes and shipping price
  const grandTotal = cartGrandTotal.toFixed(2);
  const calcSgst = ((0.1 / 100) * grandTotal).toFixed(2);
  const calcCgst = ((0.8 / 100) * grandTotal).toFixed(2);
  const calcShipping = cartGrandTotal > 2000 ? 0 : (99).toFixed(2);
  const finalTotal =
    Number(grandTotal) +
    Number(calcCgst) +
    Number(calcSgst) +
    Number(calcShipping);

  return (
    <div className="order-info-wrapper">
      <div className="order-info-items-wrapper">
        <div className="order-info-items">
          <p className="order-info-text">Order Info</p>
        </div>
        <div className="order-info-items">
          <p className="order-info-item-main-text">SubTotal</p>
          <p className="order-info-item-text">
            {Number(cartGrandTotal).toFixed(2)}
          </p>
        </div>
        {/* <div className="order-info-items">
          <p className="order-info-item-main-text">Discount</p>
          <p className="order-info-item-text">566</p>
        </div> */}
        <div className="order-info-items">
          <p className="order-info-item-main-text">Shipping</p>
          <p className="order-info-item-text">{calcShipping}</p>
        </div>
        <div className="order-info-items">
          <p className="order-info-item-main-text">SGST</p>
          <p className="order-info-item-text">{calcSgst}</p>
        </div>
        <div className="order-info-items">
          <p className="order-info-item-main-text">CGST</p>
          <p className="order-info-item-text">{calcCgst}</p>
        </div>
        <div className="order-info-items">
          <p className="order-info-item-main-text">Total</p>
          <p className="order-info-item-main-text">{finalTotal}</p>
        </div>
      </div>
      {/* <PlaceOrderButton finalTotal={finalTotal} /> */}
    </div>
  );
};

export default OrderInfo;
