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
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
