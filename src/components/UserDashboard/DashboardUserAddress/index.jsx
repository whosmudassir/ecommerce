import React from "react";
import "./index.css";

const DashboardUserAddress = () => {
  return (
    <div className="dashboard-user-address-solo-wrapper">
      <div className="dashboard-user-solo-address">
        <p className="dashboard-address-text">Mudassir Khan</p>
        <p className="dashboard-address-text">
          H.no.-43/116,N.R.peta,kurnool.
          <br /> Opp Sri lakshmi high school <br />
          Kurnool 518001 <br /> Andhra Pradesh
        </p>
      </div>
      <div className="dasdhboard-user-btn-wrapper">
        <button className="link-button">Edit</button>
        <button className="link-button">Delete</button>
      </div>
    </div>
  );
};

export default DashboardUserAddress;
