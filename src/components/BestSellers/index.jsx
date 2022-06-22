import React from "react";
import Card from "../common/Card";
import "./index.css";

const BestSellers = () => {
  return (
    <div className="bestsellers-wrapper">
      <p className="bestsellers-text">Best Sellers</p>
      <div className="bestsellers-card-wrapper">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default BestSellers;
