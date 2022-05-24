import React from "react";
import Card from "../../components/Card";
import Slider from "../../components/Slider";

const ProductList = () => {
  return (
    <div class="body-wrapper">
      <Slider />
      <div class="product-list-wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ProductList;
