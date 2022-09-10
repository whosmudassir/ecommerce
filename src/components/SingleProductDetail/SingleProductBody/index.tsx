import React, { useState } from "react";
import AddToBagButton from "../../common/AddToBagButton";
import SizeSelectorHorizontal from "../../common/SizeSelectorHorizontal";
import {
  alertTextStore,
  isAlertVisible,
  cartStore,
  wishlistStore,
} from "../../../store";
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
  //store
  const addToCart = cartStore<any>((state) => state.addToCart);
  const setAlertText = alertTextStore<any>((state) => state.setAlertText);
  const showAlert = isAlertVisible<any>((state) => state.showAlert);
  const hideAlert = isAlertVisible<any>((state) => state.hideAlert);
  const addToWishlist = wishlistStore<any>((state) => state.addToWishlist);
  const removeFromWishlist = wishlistStore<any>(
    (state) => state.removeFromWishlist
  );

  //state
  const [selectedSize, setSelectedSize] = useState<any>("");
  const [heartIcon, setHeartIcon] = useState<any>("regular");

  //product detail item
  const item = {
    id: id,
    brandName: brandName,
    name: name,
    price: price,
    size: selectedSize,
    category: category,
    imageUrl: imageUrl,
  };

  //alert hide
  const hideSuccessAlert = () => {
    setTimeout(() => {
      hideAlert();
    }, 2000);
  };

  //on add to cart
  const addItemToCart = () => {
    if (selectedSize.length > 0) {
      addToCart(item);
      setAlertText("Item added to your bag");
      showAlert();
      hideSuccessAlert();
      setSelectedSize("");
    }
  };

  //on add to wishlist
  const addItemToWishlist = () => {
    if (heartIcon === "regular") {
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

  //product info text
  const productInfoText = [
    {
      title: "Composition",
      info: "100% premium cotton",
    },
    {
      title: "GSM",
      info: "180",
    },
    {
      title: "Country of production",
      info: "India",
    },
    {
      title: "Wash care",
      info: "Machine wash cold with similar colors",
    },
    {
      title: "Sizing",
      info: "Oversized",
    },
    {
      title: "Estimated order processing time",
      info: "48 hours",
    },
  ];

  return (
    <div className="single-product-body-wrapper">
      <img className="product-detail-img " src={imageUrl} alt="" />
      <div>
        <p className="brand-name-text">{brandName}</p>
        <p className="name-text">{name}</p>
        <p className="price-text">₹ {price}</p>
        <p className="tax-text">Tax and Duties not included</p>
        <SizeSelectorHorizontal setSelectedSize={setSelectedSize} />
        <div className="btn-heart-wrapper">
          <AddToBagButton
            selectedSize={selectedSize}
            addItemToCart={addItemToCart}
          />
          <button
            className="icon-wrapper horizontal-icon"
            onClick={() => {
              addItemToWishlist();
            }}
          >
            <i className={`fa-${heartIcon} fa-heart horizontal-heart`}></i>
          </button>
        </div>
        <div className="product-info-wrapper">
          {productInfoText.map((item) => (
            <p className="product-info-text">
              <span className="product-info-title">{item.title}</span>:{" "}
              {item.info}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProductBody;
