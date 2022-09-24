import React from "react";
import "./index.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-left-content">
          <img
            className="logo"
            src={require("../../assets/images/logo.jpg")}
            alt="logo"
          />
          <div className="icons-wrapper">
            <button className="icon-wrapper">
              <a
                href="https://github.com/whosmudassir/ecommerce"
                target="_blank"
              >
                <i className="fa-brands fa-github icon footer-icon"></i>
              </a>
            </button>
            <button className="icon-wrapper">
              <a href="https://instagram.com/whosmudassir/" target="_blank">
                <i className="fa-brands fa-instagram icon footer-icon"></i>
              </a>
            </button>
            <button className="icon-wrapper">
              <a href="https://twitter.com/whosmudassir" target="_blank">
                <i className="fa-brands fa-twitter icon footer-icon"></i>
              </a>
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
      </div>
      <div className="footer-right-content">
        <p className="footer-title-text">Secure Payments</p>
        <div className="footer-right-content-icons">
          <i className="fa-solid fa-credit-card icon card-icon"></i>
          <i className="fa-brands fa-cc-visa icon card-icon"></i>
          <i className="fa-brands fa-cc-mastercard icon card-icon"></i>
          <i className="fa-brands fa-google-pay icon card-icon"></i>
          <i className="fa-brands fa-amazon-pay icon card-icon"></i>
        </div>

        <div className="copyright-text">
          <a href="https://github.com/whosmudassir/ecommerce" target="_blank">
            <p className="footer-text">
              © MsftsRep {currentYear}. All rights reserved.
            </p>
          </a>
        </div>
      </div>
      <div className="footer-right-content">
        <div className="built-by-text">
          <a
            href="https://whosmudassir.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="footer-text">
              Built with{" "}
              <i className="fa fa-heart" style={{ color: "red" }}></i> by
              Mudassir Khan
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
