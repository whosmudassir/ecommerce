import React from "react";
import CartTotal from "../CartTotal";

const ShippingInfoForm = () => {
  return (
    <div className="shipping-info-form-wrapper">
      <div>
        <p>BILLING & SHIPPING </p>
        <div>
          <input class="outlined-input" type="text" placeholder="First name" />
          <input class="outlined-input" type="text" placeholder="Last name" />
        </div>
        <p>Street address</p>
        <div>
          <input
            class="outlined-input"
            type="text"
            placeholder="House number and street name"
          />
        </div>
        <p>CITY/TOWN</p>
        <div>
          <input class="outlined-input" type="text" placeholder="" />
        </div>
        <p>STATE</p>
        <div>
          <input class="outlined-input" type="text" placeholder="" />
        </div>
        <p>PIN CODE / ZIP</p>
        <div>
          <input
            class="outlined-input"
            type="text"
            autocomplete="postal-code"
          />
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
    </div>
  );
};

export default ShippingInfoForm;
