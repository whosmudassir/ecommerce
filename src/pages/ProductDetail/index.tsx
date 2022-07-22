import React, { useState, useEffect } from "react";
import SingleProductDetail from "../../components/SingleProductDetail";
import { shopList } from "../../data/shopList";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { shopitem } = useParams();
  //setting up single product
  const [itemDetail, setItemDetail] = useState([]);
  useEffect(() => {
    const filteredItem = shopList.find((item) => item.name == shopitem);
    setItemDetail(filteredItem);
  }, [shopitem]);

  return (
    <div className="body-wrapper">
      {itemDetail.map((item) => (
        <div key={item.id}>
          <SingleProductDetail
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
  );
};

export default ProductDetail;
