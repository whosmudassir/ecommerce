import React from "react";
import logo from "../../assets/images/msftsrep_logo.jpg";
const NavBar = () => {
  return (
    <div>
      <div class="nav-bar-wrapper">
        <button class="hamburger-icon">
          {" "}
          <i class="fa fa-bars icon" id="render-icon"></i>
        </button>
        <div class="left-content">
          <a href="/index.html">
            <img class="logo" src={logo} />
          </a>
        </div>
        <div class="right-content">
          <button class="icon-wrapper">
            <i class="fa-solid fa-user icon"></i>
          </button>
          <button class="icon-wrapper">
            <i class="fa-solid fa-heart icon"></i>
          </button>
          <button class="icon-wrapper">
            <i class="fa-solid fa-bag-shopping icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
