import React from "react";
import Card from "../../components/common/Card/index";
import Slider from "../../components/Slider";
import { shopList } from "../../data/shopList";
import axios from "axios";
import { useEffect, useState } from "react";
import { cartStore } from "../../store";
import SuccessAlert from "../../components/Alerts/SuccessAlert";

const ProductList = () => {
  const [cardInfo, setCardInfo] = useState<any>([]);

  //sorting
  const lowToHighSort = () => {
    const sortedList = shopList.sort((firstItem, secondItem) => {
      return firstItem.price - secondItem.price;
    });
    console.log(":::low clicked");
    setCardInfo(sortedList);
  };

  const highToLowSort = () => {
    const sortedList = shopList.sort((firstItem, secondItem) => {
      return secondItem.price - firstItem.price;
    });
    console.log(":::hight clicked");
    setCardInfo(sortedList);
    console.log(":::hight clicked");
  };

  useEffect(() => {
    setCardInfo(shopList);
  }, []);
  return (
    <div className="body-wrapper">
      <Slider highToLowSort={highToLowSort} lowToHighSort={lowToHighSort} />
      <div className="product-list-wrapper">
        <SuccessAlert />
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
