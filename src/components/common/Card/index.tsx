import React, { useState } from "react";

interface ICardProps {
  id: number;
  brandName: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

const Card = ({
  id,
  brandName,
  name,
  price,
  category,
  imageUrl,
}: ICardProps) => {
  const [heartIcon, setHeartIcon] = useState("regular");

  const addToWishlist = () => {
    if (heartIcon == "regular") {
      setHeartIcon("solid");
    } else {
      setHeartIcon("regular");
    }
  };

  return (
    <div>
      <div className="card-wrapper">
        <div className="card-head">
          <img className="card-img" src={imageUrl} alt="" />
        </div>
        <div className="card-body">
          <div className="card-info">
            <p className="card-brand-name">{brandName}</p>
            <p className="card-name"> {name} </p>
            <p className="card-price">₹{price}</p>
          </div>
          <div className="card-btn-wrapper">
            <button
              className="icon-wrapper"
              onClick={() => {
                addToWishlist();
              }}
            >
              <i className={`fa-${heartIcon} fa-heart card-heart-icon`}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
