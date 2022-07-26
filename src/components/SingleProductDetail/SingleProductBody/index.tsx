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
  const addToCart = cartStore((state) => state.addToCart);
  const setAlertText = alertTextStore((state) => state.setAlertText);
  const showAlert = isAlertVisible((state) => state.showAlert);
  const hideAlert = isAlertVisible((state) => state.hideAlert);
  const addToWishlist = wishlistStore((state) => state.addToWishlist);
  const removeFromWishlist = wishlistStore((state) => state.removeFromWishlist);

  //state
  const [selectedSize, setSelectedSize] = useState("");
  const [heartIcon, setHeartIcon] = useState("regular");

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
    addToCart(item);
    setAlertText("Item added to your bag");
    showAlert();
    hideSuccessAlert();
    setSelectedSize("");
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

  return (
    <div className="single-product-body-wrapper">
      <img className="product-detail-img " src={imageUrl} alt="" />
      <div>
        <p className="brand-name-text">{brandName}</p>
        <p className="name-text">{name}</p>
        <p className="price-text">{price}</p>
        <p className="tax-text">Tax and Duties not included</p>
        <SizeSelectorHorizontal setSelectedSize={setSelectedSize} />
        <AddToBagButton
          selectedSize={selectedSize}
          addItemToCart={addItemToCart}
        />
        <button
          className="icon-wrapper"
          onClick={() => {
            addItemToWishlist(item);
          }}
        >
          <i className={`fa-regular fa-heart`}></i>
        </button>
      </div>
    </div>
  );
};

export default SingleProductBody;
