import React from "react";
import "./index.css";
import logo from "../../assets/images/msftsrep_logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-wrapper">
      <div className="footer-left-content">
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
      <div className="footer-center-content">
        <p className="footer-title-text">Help</p>
        <p className="footer-text">Terms & Conditions</p>
        <p className="footer-text">Privacy Policy</p>
        <p className="footer-text">FAQ</p>
        <p className="footer-text">Contact</p>
      </div>
      <div className="footer-right-content">
        <p className="footer-title-text">Secure Payments</p>
        <div className="footer-right-content-icons">
          <i class="fa-solid fa-credit-card icon card-icon"></i>
          <i class="fa-brands fa-cc-visa icon card-icon"></i>
          <i class="fa-brands fa-cc-mastercard icon card-icon"></i>
          <i class="fa-brands fa-google-pay icon card-icon"></i>
          <i class="fa-brands fa-amazon-pay icon card-icon"></i>
        </div>

        <div className="copyright-text">
          <p className="footer-text">
            © MsftsRep {currentYear}. All rights reserved.
          </p>
        </div>
      </div>
      <div className="footer-right-content">
        <div className="built-by-text">
          <a href="https://whosmudassir.netlify.app/" target="_blank">
            <p className="footer-text">
              Built with <i class="fa fa-heart" style={{ color: "red" }}></i> by
              Mudassir Khan
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
