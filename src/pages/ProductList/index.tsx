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
  useEffect(() => {
    setCardInfo(shopList);
  }, []);

  // to display sizes inside card
  const [isExpandedCardId, setIsExpandedCardId] = useState(null);

  const showSizeBar = (id) => {
    setIsExpandedCardId(id);
  };

  return (
    <div className="body-wrapper">
      <Slider />
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
              showSizeBar={showSizeBar}
              isExpandedCardId={isExpandedCardId}
              setIsExpandedCardId={setIsExpandedCardId}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
