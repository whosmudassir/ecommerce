import React from "react";
import Card from "../../components/common/Card/index";
import Slider from "../../components/Slider";
import { shopList } from "../../data/shopList";
import axios from "axios";
import { useEffect, useState } from "react";
import { cartStore } from "../../store";
import SuccessAlert from "../../components/Alerts/SuccessAlert";

const ProductList = () => {
  const originalCopy = [...shopList];
  const [cardInfo, setCardInfo] = useState<any>(shopList);
  const [sortOrder, setSortOrder] = useState(null);
  const [radioIsActive, setRadioIsActive] = useState<any>("");

  //sorting
  const lowToHighSort = (e) => {
    setSortOrder("low");
    setRadioIsActive("low");
  };

  const highToLowSort = (e) => {
    setRadioIsActive("high");
    setSortOrder("high");
  };

  //clear filters
  const clearFilters = () => {
    setSortOrder(null);
  };

  useEffect(() => {
    setCardInfo(originalCopy);
    setRadioIsActive("");
  }, [clearFilters]);

  console.log(":::::card info", cardInfo);
  return (
    <div className="body-wrapper">
      <Slider
        highToLowSort={highToLowSort}
        lowToHighSort={lowToHighSort}
        clearFilters={clearFilters}
        radioIsActive={radioIsActive}
      />
      <div className="product-list-wrapper">
        <SuccessAlert />
        {cardInfo
          .sort((firstItem, secondItem) => {
            if (sortOrder == "high") {
              return secondItem.price - firstItem.price;
            } else if (sortOrder == "low") {
              return firstItem.price - secondItem.price;
            } else {
              return null;
            }
          })
          .map((item) => (
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
