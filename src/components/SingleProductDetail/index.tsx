import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import ProductDeliveryReturnInfo from "../common/ProductDeliveryReturnInfo";
import SingleProductBody from "./SingleProductBody";
import "./index.css";
interface ISingleProductDetail {
  id: number;
  brandName: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}
const SingleProductDetail = ({
  id,
  brandName,
  name,
  price,
  category,
  imageUrl,
}: ISingleProductDetail) => {
  return (
    <div className="single-product-detail-wrapper">
      <SingleProductBody
        id={id}
        brandName={brandName}
        name={name}
        price={price}
        category={category}
        imageUrl={imageUrl}
      />
      <ProductDeliveryReturnInfo />
    </div>
  );
};

export default SingleProductDetail;
