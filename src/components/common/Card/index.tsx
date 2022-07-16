import React, { useState } from "react";
import AddToCartPopup from "./AddToCartPopup";
import { cartStore } from "../../../store";
import { isAlertVisible } from "../../../store";
import { setExpandedCard } from "../../../store";
import { wishlistStore } from "../../../store";
import { alertTextStore } from "../../../store";
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
  //icon
  const [heartIcon, setHeartIcon] = useState("regular");
  //store
  const addToCart = cartStore((state) => state.addToCart);
  const showAlert = isAlertVisible((state) => state.showAlert);
  const hideAlert = isAlertVisible((state) => state.hideAlert);
  const expandedCardId = setExpandedCard((state) => state.expandedCardId);
  const setExpandedCardId = setExpandedCard((state) => state.setExpandedCardId);
  const addToWishlist = wishlistStore((state) => state.addToWishlist);
  const removeFromWishlist = wishlistStore((state) => state.removeFromWishlist);
  const setAlertText = alertTextStore((state) => state.setAlertText);
  //states
  const [selectedSize, setSelectedSize] = useState("");

  const item = {
    id: id,
    brandName: brandName,
    name: name,
    price: price,
    size: selectedSize,
    category: category,
    imageUrl: imageUrl,
  };

  //on add to wishlist
  const addItemToWishlist = (item) => {
    if (heartIcon == "regular") {
      setHeartIcon("solid");
      addToWishlist(item);
      setAlertText("Item added to wishlist");
      showAlert();
      hideSuccessAlert();
    } else {
      setHeartIcon("regular");
      removeFromWishlist(item.id);
    }
  };

  const hideSuccessAlert = () => {
    setTimeout(() => {
      hideAlert();
    }, 2000);
  };

  //on add to cart
  const addItemToCart = (item) => {
    addToCart(item);
    setExpandedCardId(null);
    setAlertText("Item added to your bag");
    showAlert();
    hideSuccessAlert();
    setSelectedSize("");
  };

  //on close quick view
  const closeQuickView = () => {
    setExpandedCardId(null);
    setSelectedSize("");
  };

  return (
    <div>
      <div className="card-wrapper">
        {expandedCardId !== id && (
          <div className="card-head">
            <>
              <img className="card-img" src={imageUrl} alt="" />
              <button
                className="icon-wrapper"
                onClick={() => {
                  addItemToWishlist(item);
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
            borderRadius: expandedCardId == id && "6px 6px 0px 0px",
          }}
        >
          <div className="card-info">
            <div className="card-close-btn-wrapper">
              <p className="card-brand-name">{brandName}</p>{" "}
              {expandedCardId == id && (
                <button className="icon-wrapper " onClick={closeQuickView}>
                  <i className="fa-solid fa-xmark card-close-btn-icon"></i>
                </button>
              )}
            </div>
            <p className="card-name"> {name} </p>
          </div>
          {expandedCardId == id && (
            <div className="card-sizes-wrapper">
              <AddToCartPopup setSelectedSize={setSelectedSize} />
            </div>
          )}

          <div className="card-footer">
            <p className="">₹{price}</p>

            <div className="card-btn-wrapper">
              {expandedCardId == id ? (
                <>
                  <button
                    className={` ${
                      selectedSize.length !== 0
                        ? "primary-btn btn-active"
                        : "secondary-btn btn-inactive"
                    }`}
                    onClick={() => addItemToCart(item)}
                  >
                    Add
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="icon-wrapper icon circle-plus-icon"
                    onClick={() => setExpandedCardId(id)}
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
