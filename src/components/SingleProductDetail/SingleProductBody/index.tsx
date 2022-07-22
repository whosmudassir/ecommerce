import React from "react";

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
    <div>
      <img className="card-img" src={imageUrl} alt="" />
    </div>
  );
};

export default SingleProductBody;
