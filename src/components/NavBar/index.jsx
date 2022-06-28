import React from "react";
import logo from "../../assets/images/msftsrep_logo.jpg";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div class="nav-bar-wrapper">
        {/* <button class="hamburger-icon">
          <i class="fa fa-bars icon" id="render-icon"></i>
        </button> */}
        <div class="left-content">
          <Link to="/">
            <img class="logo" src={logo} alt={logo} />
          </Link>
        </div>
        <div class="right-content">
          <button class="icon-wrapper">
            {" "}
            <i class="fa-solid fa-magnifying-glass nav-icon"></i>
          </button>

          <button class="icon-wrapper">
            <Link to="/user">
              <i class="fa-solid fa-user nav-icon"></i>
            </Link>
          </button>

          <button class="icon-wrapper">
            <Link to="/wish-list">
              <i class="fa-solid fa-heart nav-icon"></i>
            </Link>
          </button>

          <Link to="/cart">
            <div class="badge-wrapper">
              <button class="icon-wrapper">
                <i class="fa-solid fa-bag-shopping nav-icon"></i>
              </button>
              <div class="notification">
                <p class="notification-text">1</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
