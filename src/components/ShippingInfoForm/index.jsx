import React from "react";
import CartTotal from "../CartTotal";
import "./index.css";

const ShippingInfoForm = () => {
  return (
    <div className="shipping-info-form-wrapper">
      <p className="order-info-text">Billing & shipping</p>
      <div>
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
      <p>Street address</p>
      <div>
        <input
          class="outlined-input"
          type="text"
          placeholder="House number and street name"
          autoComplete="street-address"
        />
      </div>
      <p>CITY/TOWN</p>
      <div>
        <input
          class="outlined-input"
          type="text"
          autoComplete="address-level2"
        />
      </div>
      <p>STATE</p>
      <div>
        <input class="outlined-input" type="text" placeholder="" />
      </div>
      <p>PIN CODE / ZIP</p>
      <div>
        <input class="outlined-input" type="text" autocomplete="postal-code" />
      </div>

      <p>PHONE</p>
      <div>
        <input
          class="outlined-input"
          type="text"
          placeholder="Enter 10 digit phone number"
        />
      </div>
      <p>EMAIL</p>
      <div>
        <input class="outlined-input" type="text" autoComplete="email" />
      </div>
    </div>
  );
};

export default ShippingInfoForm;
