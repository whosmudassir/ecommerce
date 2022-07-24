import React, { useState } from "react";
import AddToBagButton from "../../common/AddToBagButton";
import SizeSelectorHorizontal from "../../common/SizeSelectorHorizontal";
import { alertTextStore, isAlertVisible, cartStore } from "../../../store";
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

  //state
  const [selectedSize, setSelectedSize] = useState("");

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

  return (
    <div className="single-product-body-wrapper">
      <img className="product-detail-img " src={imageUrl} alt="" />
      <div>
        <p>{brandName}</p>
        <p>{name}</p>
        <p>{price}</p>
        <p>Tax and Duties not included</p>
        <SizeSelectorHorizontal setSelectedSize={setSelectedSize} />
        <AddToBagButton
          selectedSize={selectedSize}
          addItemToCart={addItemToCart}
        />
      </div>
    </div>
  );
};

export default SingleProductBody;
