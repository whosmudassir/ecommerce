import React from "react";
import "./index.css";
import { cartGrandTotalStore } from "../../../store";

const CartTotal = () => {
  const cartGrandTotal = cartGrandTotalStore((state) => state.cartGrandTotal);
  // const totalWithTaxes = totalWithTaxesStore((state) => state.totalWithTaxes);

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
    <div className="cart-total-wrapper">
      <div className="cart-total-items-wrapper">
        <div className="cart-total-items">
          <p className="cart-total-text">Cart Totals</p>
        </div>
        <div className="cart-total-items">
          <p className="cart-total-item-main-text">SubTotal</p>
          <p className="cart-total-item-text">
            {Number(cartGrandTotal).toFixed(2)}
          </p>
        </div>
        {/* <div className="cart-total-items">
          <p className="cart-total-item-main-text">Discount</p>
          <p className="cart-total-item-text">566</p>
        </div> */}
        <div className="cart-total-items">
          <p className="cart-total-item-main-text">Shipping</p>
          <p className="cart-total-item-text">{calcShipping}</p>
        </div>
        <div className="cart-total-items">
          <p className="cart-total-item-main-text">SGST</p>
          <p className="cart-total-item-text">{calcSgst}</p>
        </div>
        <div className="cart-total-items">
          <p className="cart-total-item-main-text">CGST</p>
          <p className="cart-total-item-text">{calcCgst}</p>
        </div>
        <div className="cart-total-items">
          <p className="cart-total-item-main-text">Total</p>
          <p className="cart-total-item-main-text">{finalTotal}</p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
