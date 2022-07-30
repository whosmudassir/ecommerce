import React, { useEffect } from "react";
import CheckoutButton from "../CheckoutButton";
import "./index.css";
import {
  cartGrandTotalStore,
  totalWithTaxesStore,
  cartStore,
} from "../../../store";

const CartTotal = () => {
  const cartGrandTotal = cartGrandTotalStore((state) => state.cartGrandTotal);
  const itemsInCart = cartStore((state) => state.cart);
  const totalWithTaxes = totalWithTaxesStore((state) => state.totalWithTaxes);

  //taxes and shipping price
  const grandTotal = Number(cartGrandTotal).toFixed(2);
  const calcSgst = Number((0.1 / 100) * grandTotal).toFixed(2);
  const calcCgst = Number((0.8 / 100) * grandTotal).toFixed(2);
  const calcShipping =
    cartGrandTotal > 2000 ? Number(0) : Number(99).toFixed(2);
  const finalTotal = grandTotal + calcCgst + calcSgst + calcShipping;

  const calculateTotalWithTaxes = ({ finalTotal }) => {
    totalWithTaxes(finalTotal);
  };

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
        <div className="cart-total-items">
          <p className="cart-total-item-main-text">Discount</p>
          <p className="cart-total-item-text">566</p>
        </div>
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
          <p className="cart-total-item-main-text">{typeof finalTotal}</p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
