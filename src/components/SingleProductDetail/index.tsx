import React from "react";
import Breadcrumb from "../common/Breadcrumb";
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
    </div>
  );
};

export default SingleProductDetail;
