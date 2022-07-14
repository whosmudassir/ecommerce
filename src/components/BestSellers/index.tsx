import React from "react";
import Card from "../common/Card";
import "./index.css";
import { bestSellers } from "../../data/bestSellers";

const BestSellers = () => {
  return (
    <div className="bestsellers-wrapper">
      <p className="bestsellers-text">Best Sellers</p>
      <div className="bestsellers-card-wrapper">
        {bestSellers.map((item) => (
          <div key={item.id}>
            <Card
              id={item.id}
              brandName={item.brandName}
              name={item.name}
              price={item.price}
              category={item.category}
              imageUrl={item.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
