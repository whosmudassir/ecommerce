import React from "react";
import Card from "../../components/common/Card/index";
import Slider from "../../components/Slider";
import { shopList } from "../../data/shopList";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [cardInfo, setCardInfo] = useState<any>([]);
  useEffect(() => {
    setCardInfo(shopList);
  }, []);

  // to display sizes
  const [isExpanded, setIsExpanded] = useState(null);

  const showSizeBar = (id) => (isExpanded) => {
    // if expanded, set id to open/expand, close it otherwise
    setIsExpanded(isExpanded ? id : false);
  };
  return (
    <div className="body-wrapper">
      <Slider />
      <div className="product-list-wrapper">
        {cardInfo.map((item) => (
          <div key={item.id}>
            <Card
              id={item.id}
              brandName={item.brandName}
              name={item.name}
              price={item.price}
              category={item.category}
              imageUrl={item.imageUrl}
              showSizeBar={showSizeBar(item.id)}
              isExpanded={isExpanded}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
