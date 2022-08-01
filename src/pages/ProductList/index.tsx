import React from "react";
import Card from "../../components/common/Card/index";
import Slider from "../../components/Slider";
import { shopList } from "../../data/shopList";
import axios from "axios";
import { useEffect, useState } from "react";
import { cartStore } from "../../store";
import SuccessAlert from "../../components/Alerts/SuccessAlert";

const ProductList = () => {
  const [cardInfo, setCardInfo] = useState<any>(shopList);

  const [isSorted, setIsSorted] = useState<any>(false);

  //sorting
  const lowToHighSort = () => {
    const sortedList = cardInfo.sort((firstItem, secondItem) => {
      return firstItem.price - secondItem.price;
    });
    setIsSorted(!isSorted);
    setCardInfo(sortedList);
  };

  const highToLowSort = () => {
    let sortedList = cardInfo;

    sortedList.sort((firstItem, secondItem) => {
      return secondItem.price - firstItem.price;
    });
    setIsSorted(!isSorted);
    setCardInfo(sortedList);
  };

  useEffect(() => {}, [isSorted]);

  return (
    <div className="body-wrapper">
      <Slider highToLowSort={highToLowSort} lowToHighSort={lowToHighSort} />
      <div className="product-list-wrapper">
        {console.log(":::cardInfo", cardInfo)}
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
