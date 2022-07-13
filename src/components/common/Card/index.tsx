import React, { useState } from "react";
import AddToCartPopup from "./AddToCartPopup";
import { cartStore } from "../../../store";
import { isAlertVisible } from "../../../store";
interface ICardProps {
  id: number;
  brandName: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  showSizeBar: any;
  isExpandedCardId: any;
  setIsExpandedCardId: any;
}

const Card = ({
  id,
  brandName,
  name,
  price,
  category,
  imageUrl,
  showSizeBar,
  isExpandedCardId,
  setIsExpandedCardId,
}: ICardProps) => {
  const [heartIcon, setHeartIcon] = useState("regular");
  const addToCart = cartStore((state) => state.addToCart);
  const showAlert = isAlertVisible((state) => state.showAlert);
  const hideAlert = isAlertVisible((state) => state.hideAlert);
  const item = {
    id: id,
    brandName: brandName,
    name: name,
    price: price,

    category: category,
    imageUrl: imageUrl,
  };

  const addToWishlist = () => {
    if (heartIcon == "regular") {
      setHeartIcon("solid");
    } else {
      setHeartIcon("regular");
    }
  };

  const hideSuccessAlert = () => {
    setTimeout(() => {
      hideAlert();
    }, 2000);
  };

  //add item to cart

  const addItemToCart = (item) => {
    addToCart(item);
    setIsExpandedCardId(null);
    showAlert();
    hideSuccessAlert();
  };

  return (
    <div>
      {console.log("-->card page")}
      <div className="card-wrapper">
        {isExpandedCardId !== id && (
          <div className="card-head">
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
          style={{
            //@ts-ignore
            borderRadius: isExpandedCardId == id && "6px 6px 0px 0px",
          }}
        >
          <div className="card-info">
            <div className="card-close-btn-wrapper">
              <p className="card-brand-name">{brandName}</p>{" "}
              {isExpandedCardId == id && (
                <button
                  className="icon-wrapper "
                  onClick={() => setIsExpandedCardId(null)}
                >
                  <i className="fa-solid fa-xmark card-close-btn-icon"></i>
                </button>
              )}
            </div>
            <p className="card-name"> {name} </p>
          </div>
          {isExpandedCardId == id && (
            <div className="card-sizes-wrapper">
              <AddToCartPopup />
            </div>
          )}

          <div className="card-footer">
            <p className="">₹{price}</p>

            <div className="card-btn-wrapper">
              {isExpandedCardId == id ? (
                <>
                  <button
                    className={` ${
                      true
                        ? "primary-btn btn-active"
                        : "secondary-btn btn-inactive"
                    }`}
                    onClick={() => addItemToCart(item)}
                  >
                    Add to bag
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="icon-wrapper icon circle-plus-icon"
                    onClick={() => showSizeBar(id)}
                  >
                    <i className="fa-solid fa-circle-plus"></i>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
