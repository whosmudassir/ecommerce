import React from "react";
import Carousel from "../../components/Carousel";
import { carouselClothingData } from "../../data/carouselClothingData";
import { carouselDiscountData } from "../../data/carouselDiscountData";
import "./index.css";
const Home = () => {
  return (
    <div class="body-wrapper">
      <div class="home-page-wrapper">
        <Carousel carouselData={carouselClothingData} />
        <Carousel carouselData={carouselDiscountData} />
      </div>
    </div>
  );
};

export default Home;
