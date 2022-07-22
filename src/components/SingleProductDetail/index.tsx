import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import SingleProductBody from "./SingleProductBody";
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
    <div>
      <Breadcrumb />
      <SingleProductBody
        id={id}
        brandName={brandName}
        name={name}
        price={price}
        category={category}
        imageUrl={imageUrl}
      />
    </div>
  );
};

export default SingleProductDetail;
