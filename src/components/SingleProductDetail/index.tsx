import React from "react";
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
  return <div>SingleProductDetail</div>;
};

export default SingleProductDetail;
