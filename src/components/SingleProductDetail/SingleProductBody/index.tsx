import React from "react";
import AddToBagButton from "../../common/AddToBagButton";
import SizeSelectorHorizontal from "../../common/SizeSelectorHorizontal";

import "./index.css";
interface ISingleProductBody {
  id: number;
  brandName: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

const SingleProductBody = ({
  id,
  brandName,
  name,
  price,
  category,
  imageUrl,
}: ISingleProductBody) => {
  return (
    <div className="single-product-body-wrapper">
      <img className="product-detail-img " src={imageUrl} alt="" />
      <div>
        <p>{brandName}</p>
        <p>{name}</p>
        <p>{price}</p>
        <p>Tax and Duties not included</p>
        <SizeSelectorHorizontal />
        <AddToBagButton />
      </div>
    </div>
  );
};

export default SingleProductBody;
