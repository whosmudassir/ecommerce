import React from "react";
import Card from "../../components/common/Card";
import Slider from "../../components/Slider";
import { shopList } from "../../data/shopList";
import axios from "axios";
import { useEffect } from "react";

const ProductList = () => {
  useEffect(() => {
    console.log("start");

    fetch(shopList)
      .then((res) => res)
      .then((data) => console.log(data));
  }, []);

  return (
    <div class="body-wrapper">
      <Slider />
      <div class="product-list-wrapper"></div>
    </div>
  );
};

export default ProductList;
