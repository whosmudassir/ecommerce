import React from "react";
import "./index.css";
import { auth } from "../../../firebase-config";
import { signOut } from "firebase/auth";

const DashboardSideBar = () => {
  const logout = async () => {
    await signOut(auth);
  };

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
        <button onClick={logout}>Log out</button>
      </div>
    </div>
  );
};

export default DashboardSideBar;
