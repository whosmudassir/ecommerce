import React from "react";
import "./index.css";

const DashboardAddressInfo = () => {
  return (
    <div className="dashboard-address-wrapper">
      <p className="dashboard-address-latest-text">Latest Used Addresses</p>
      <p className="dashboard-address-title">Billing address</p>
      <button>Edit</button>
      <p className="dashboard-address-text">Mudassir Khan</p>
      <p className="dashboard-address-text">
        H.no.-43/116,N.R.peta,kurnool. Opp Sri lakshmi high school Kurnool
        518001 Andhra Pradesh
      </p>
    </div>
  );
};

export default DashboardAddressInfo;
