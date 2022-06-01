import React from "react";
import "./index.css";
import logo from "../../assets/images/msftsrep_logo.jpg";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-left-contetn">
        <img class="logo" src={logo} alt={logo} />
        <div className="icons-wrapper">
          <button class="icon-wrapper">
            <i class="fa-brands fa-github icon"></i>
          </button>
          <button class="icon-wrapper">
            <i class="fa-brands fa-instagram icon"></i>
          </button>
          <button class="icon-wrapper">
            <i class="fa-brands fa-twitter icon"></i>
          </button>
        </div>
      </div>
      <div className="footer-center-content">
        <p className="footer-title-text">Shop</p>
        <p className="footer-text">T-shirts</p>
        <p className="footer-text">SweatShirts</p>
        <p className="footer-text">Hoodies</p>
        <p className="footer-text">Accessories</p>
      </div>
      <div className="footer-right-content">
        <p className="footer-title-text">Help</p>
        <p className="footer-text">Terms & Conditions</p>
        <p className="footer-text">Privacy Policy</p>
        <p className="footer-text">FAQ</p>
        <p className="footer-text">Contact</p>
      </div>
    </div>
  );
};

export default Footer;
