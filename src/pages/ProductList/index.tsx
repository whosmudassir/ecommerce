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
  const [isSorted, setIsSorted] = useState<any>(false);

  //sorting
  const lowToHighSort = () => {
    setSortOrder("low");
    setIsSorted(!isSorted);
  };

  const highToLowSort = () => {
    setSortOrder("high");
    setIsSorted(!isSorted);
  };

  //clear filters
  const clearFilters = () => {
    setSortOrder(null);
  };

  useEffect(() => {
    setCardInfo(originalCopy);
  }, [clearFilters]);

  console.log(":::::card info", cardInfo);
  return (
    <div className="body-wrapper">
      <Slider
        highToLowSort={highToLowSort}
        lowToHighSort={lowToHighSort}
        clearFilters={clearFilters}
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
