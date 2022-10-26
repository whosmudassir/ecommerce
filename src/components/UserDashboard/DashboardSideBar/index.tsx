import React from "react";
import "./index.css";
import { auth } from "../../../firebase-config";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
const DashboardSideBar = () => {
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="dashboard-sidebar-wrapper">
      <div className="dashboard-sidebar-text-items">
        <Link to="/user/dashboard">
          {" "}
          <p>Dashboard</p>{" "}
        </Link>
      </div>
      <div className="dashboard-sidebar-text-items">
        <Link to="/user/orders">
          <p>Orders</p>
        </Link>
      </div>
      <div className="dashboard-sidebar-text-items">
        <Link to="/user/couponcode">
          <p>Coupons</p>
        </Link>
      </div>
      <div className="dashboard-sidebar-text-items">
        <Link to="/user/couponcode">
          {" "}
          <p>Account Details</p>
        </Link>
      </div>
      <div className="dashboard-sidebar-text-items">
        <button onClick={logout}>Log out</button>
      </div>
    </div>
  );
};

export default DashboardSideBar;
