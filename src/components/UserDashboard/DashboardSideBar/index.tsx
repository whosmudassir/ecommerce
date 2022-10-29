import React from "react";
import "./index.css";
import { auth } from "../../../firebase-config";
import { signOut } from "firebase/auth";
import { Link, NavLink } from "react-router-dom";
const DashboardSideBar = () => {
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="dashboard-sidebar-wrapper">
      <div className="dashboard-sidebar-text-items">
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/user/dashboard"
        >
          Dashboard
        </NavLink>
      </div>
      <div className="dashboard-sidebar-text-items">
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/user/orders"
        >
          Orders
        </NavLink>
      </div>
      <div className="dashboard-sidebar-text-items">
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/user/couponcode"
        >
          Coupons
        </NavLink>
      </div>
      <div className="dashboard-sidebar-text-items">
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/user/account"
        >
          Account Details
        </NavLink>
      </div>
      <div className="dashboard-sidebar-text-items">
        <button className="icon-wrapper icon-logout" onClick={logout}>
          Log out <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </button>
      </div>
    </div>
  );
};

export default DashboardSideBar;
