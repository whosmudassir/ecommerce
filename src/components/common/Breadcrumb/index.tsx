import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb-wrapper">
      <Link to={"/"}>
        <p className="breadcrumb-text">Home</p>
      </Link>
      <i class="fa-solid fa-angle-right"></i>
      <Link to={"/shop"}>
        <p className="breadcrumb-text">Shop</p>
      </Link>
    </div>
  );
};

export default Breadcrumb;
