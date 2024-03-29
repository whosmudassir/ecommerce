import React from "react";
import { Link, Outlet } from "react-router-dom";
import { cartStore } from "../../store/";

const NavBar = () => {
  const itemsInCart = cartStore((state) => state.cart);

  return (
    <div>
      <div className="nav-bar-wrapper">
        <div className="left-content">
          <Link to="/">
            <img
              className="logo"
              src={require("../../assets/images/logo.jpg")}
              alt="logo"
            />
          </Link>
        </div>
        <div className="right-content">
          <button className="icon-wrapper">
            <Link to="/user">
              <i className="fa-solid fa-user nav-icon"></i>
            </Link>
          </button>

          <button className="icon-wrapper">
            <Link to="/wish-list">
              <i className="fa-solid fa-heart nav-icon"></i>
            </Link>
          </button>

          <Link to="/cart">
            <div className="badge-wrapper">
              <button className="icon-wrapper">
                <i className="fa-solid fa-bag-shopping nav-icon"></i>
              </button>
              {itemsInCart.length > 0 && (
                <div className="notification">
                  <p className="notification-text">{itemsInCart.length}</p>
                </div>
              )}
            </div>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
