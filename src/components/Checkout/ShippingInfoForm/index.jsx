import React from "react";
import CartTotal from "../../Cart/CartTotal";
import "./index.css";

const ShippingInfoForm = () => {
  return (
    <div className="shipping-info-form-wrapper">
      <p className="order-info-text">Billing & shipping</p>
      <div className="shipping-info-two-item-wrapper">
        <input
          class="outlined-input"
          type="text"
          placeholder="First name"
          autoComplete="cc-given-name"
        />
        <input
          class="outlined-input"
          type="text"
          placeholder="Last name"
          autoComplete="cc-family-name"
        />
      </div>
      <p className="shipping-info-headings-text">Street address</p>
      <div className="shipping-info-item-wrapper">
        <input
          class="outlined-input shipping-info-input"
          type="text"
          placeholder="House number and street name"
          autoComplete="street-address"
        />
      </div>
      <p className="shipping-info-headings-text">City / town</p>
      <div className="shipping-info-item-wrapper">
        <input
          class="outlined-input  shipping-info-input"
          type="text"
          autoComplete="address-level2"
        />
      </div>

      <p className="shipping-info-headings-text">Pin code / zip</p>
      <div className="shipping-info-item-wrapper">
        <input
          class="outlined-input  shipping-info-input"
          type="text"
          autocomplete="postal-code"
        />
      </div>

      <p className="shipping-info-headings-text">Phone</p>
      <div className="shipping-info-item-wrapper">
        <input
          class="outlined-input  shipping-info-input"
          type="text"
          placeholder="Enter 10 digit phone number"
        />
      </div>
      <p className="shipping-info-headings-text">Email</p>
      <div className="shipping-info-item-wrapper">
        <input
          class="outlined-input  shipping-info-input"
          type="text"
          autoComplete="email"
        />
      </div>
    </div>
  );
};

export default ShippingInfoForm;
