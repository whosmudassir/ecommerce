import React, { useState, useEffect } from "react";
import SingleProductDetail from "../../components/SingleProductDetail";
import { shopList } from "../../data/shopList";
import { useParams } from "react-router-dom";
import "./index.css";
import SuccessAlert from "../../components/Alerts/SuccessAlert";

const ProductDetail = () => {
  const { shopitem } = useParams();
  //setting up single product
  const [itemDetail, setItemDetail] = useState<any>([]);
  useEffect(() => {
    const filteredItem = shopList.find((item) => item.name === shopitem);
    setItemDetail(filteredItem);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="body-wrapper">
      <div className="product-detail-wrapper">
        <SuccessAlert />
        <SingleProductDetail
          id={itemDetail.id}
          brandName={itemDetail.brandName}
          name={itemDetail.name}
          price={itemDetail.price}
          category={itemDetail.category}
          imageUrl={itemDetail.imageUrl}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
