import React, { useState } from "react";
import AddToCartPopup from "./AddToCartPopup";
import QuickAddButton from "./QuickAddButton";

interface ICardProps {
  id: number;
  brandName: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  showSizebar: () => void;
  isExpanded: any;
}

const Card = ({
  id,
  brandName,
  name,
  price,
  category,
  imageUrl,
  showSizeBar,
  isExpanded,
}: ICardProps) => {
  const [heartIcon, setHeartIcon] = useState("regular");

  const addToWishlist = () => {
    if (heartIcon == "regular") {
      setHeartIcon("solid");
    } else {
      setHeartIcon("regular");
    }
  };

  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <div>
      <div className="card-wrapper">
        {isExpanded !== id && (
          <div
            className="card-head"
            // style={{
            //   background: "rgba(0,0,0,.3)",

            //   opacity: visible ? "0" : "1",
            //   transition: "all .2s",
            //   visibility: visible ? "hidden" : "visible",
            // }}
          >
            <>
              <img className="card-img" src={imageUrl} alt="" />
              <button
                className="icon-wrapper"
                onClick={() => {
                  addToWishlist();
                }}
              >
                <i className={`fa-${heartIcon} fa-heart card-heart-icon`}></i>
              </button>
            </>
          </div>
        )}
        <div
          className="card-body"
          style={{ borderRadius: isExpanded == id && "6px 6px 0px 0px" }}
        >
          <div className="card-info">
            <p className="card-brand-name">{brandName}</p>
            <p className="card-name"> {name} </p>
          </div>
          {isExpanded == id && (
            <div className="card-sizes-wrapper">
              <AddToCartPopup />
            </div>
          )}

          <div className="card-footer">
            <p className="">₹{price}</p>

            <div className="card-btn-wrapper">
              <button className="primary-btn " onClick={showSizeBar}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
