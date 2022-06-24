import React from "react";
import "./index.css";

const DashboardAccountDetailsInfo = () => {
  return (
    <div>
      <div className="shipping-info-form-wrapper account-detail-wrapper">
        <p className="shipping-info-headings-text">First Name</p>
        <div className="shipping-info-item-wrapper">
          <input
            class="outlined-input shipping-info-input"
            type="text"
            autoComplete="street-address"
          />
        </div>
        <p className="shipping-info-headings-text">Last Name</p>
        <div className="shipping-info-item-wrapper">
          <input
            class="outlined-input  shipping-info-input"
            type="text"
            autoComplete="address-level2"
          />
        </div>
        <p className="shipping-info-headings-text">Email</p>
        <div className="shipping-info-item-wrapper">
          <input
            class="outlined-input shipping-info-input"
            type="text"
            autoComplete="street-address"
          />
        </div>

        <p>Password change</p>
        <p className="shipping-info-headings-text password-change-title">
          CURRENT PASSWORD (LEAVE BLANK TO LEAVE UNCHANGED)
        </p>
        <div className="shipping-info-item-wrapper">
          <input
            class="outlined-input shipping-info-input"
            type="text"
            autoComplete="street-address"
          />
        </div>
        <p className="shipping-info-headings-text password-change-title">
          NEW PASSWORD (LEAVE BLANK TO LEAVE UNCHANGED)
        </p>
        <div className="shipping-info-item-wrapper">
          <input
            class="outlined-input  shipping-info-input"
            type="text"
            autoComplete="address-level2"
          />
        </div>
        <p className="shipping-info-headings-text password-change-title">
          CONFIRM NEW PASSWORD
        </p>
        <div className="shipping-info-item-wrapper">
          <input
            class="outlined-input shipping-info-input"
            type="text"
            autoComplete="street-address"
          />
        </div>
        <div className="add-address-btn-wrapper account-details-btn">
          <button className="primary-btn add-address-btn ">Save changes</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardAccountDetailsInfo;
