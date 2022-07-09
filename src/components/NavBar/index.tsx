import React from "react";
import logo from "../../assets/images/logo.jpg";
import { Link, Outlet } from "react-router-dom";
import useStore from "../../store/";

const NavBar = () => {
  const itemsInCart = useStore((state) => state.cart);

  return (
    <div>
      <div className="nav-bar-wrapper">
        {/* <button className="hamburger-icon">
          <i className="fa fa-bars icon" id="render-icon"></i>
        </button> */}
        <div className="left-content">
          <Link to="/">
            <img className="logo" src={logo} alt={logo} />
          </Link>
        </div>
        <div className="right-content">
          <button className="icon-wrapper">
            {" "}
            <i className="fa-solid fa-magnifying-glass nav-icon"></i>
          </button>

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
