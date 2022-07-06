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

  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <div>
      <div className="card-wrapper">
        {!visible && (
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
        <div className="card-body">
          <div className="card-info">
            <p className="card-brand-name">{brandName}</p>
            <p className="card-name"> {name} </p>
          </div>
          {visible && (
            <div className="card-sizes-wrapper">
              <AddToCartPopup />
            </div>
          )}
          {/* <p className="card-price">₹{price}</p>

          <div className="card-btn-wrapper">
            <button
              className="primary-btn card-plus-icon"
              onClick={visible ? hide : show}
            >
              Add
            </button>
          </div> */}
          <div className="card-footer">
            <p className="">₹{price}</p>

            <div className="card-btn-wrapper">
              <button className="primary-btn " onClick={visible ? hide : show}>
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
