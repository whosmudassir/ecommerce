import React from "react";
import "./index.css";
import DashboardUserAddress from "../DashboardUserAddress";

const DashboardAddressInfo = () => {
  return (
    <div className="dashboard-address-wrapper">
      <p className="dashboard-address-latest-text">Latest Used Addresses</p>
      <p className="dashboard-address-title">Billing address</p>
      <div className="dashboard-user-address-wrapper">
        <DashboardUserAddress />
        <DashboardUserAddress />
        <DashboardUserAddress />
      </div>
      <div className="add-address-btn-wrapper">
        <button className="primary-btn add-address-btn">Add new address</button>
      </div>
    </div>
  );
};

export default DashboardAddressInfo;
