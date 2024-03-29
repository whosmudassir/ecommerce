import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb-wrapper">
      <Link to={"/"}>
        <p className="breadcrumb-text">Home</p>
      </Link>
      <i className="fa-solid fa-angle-right breadcrumb-icon"></i>
      <Link to={"/shop"}>
        <p className="breadcrumb-text">Shop</p>
      </Link>
    </div>
  );
};

export default Breadcrumb;
