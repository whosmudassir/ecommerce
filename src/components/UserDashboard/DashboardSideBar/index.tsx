import React from "react";
import "./index.css";

const DashboardSideBar = () => {
  return (
    <div className="dashboard-sidebar-wrapper">
      <div className="dashboard-sidebar-text-items">
        <p>Dashboard</p>
      </div>
      <div className="dashboard-sidebar-text-items">
        <p>Orders</p>
      </div>
      <div className="dashboard-sidebar-text-items">
        <p>Addresses</p>
      </div>
      <div className="dashboard-sidebar-text-items">
        <p>Coupons</p>
      </div>
      <div className="dashboard-sidebar-text-items">
        <p>Account Details</p>
      </div>
      <div className="dashboard-sidebar-text-items">
        <p>Log out</p>
      </div>
    </div>
  );
};

export default DashboardSideBar;
