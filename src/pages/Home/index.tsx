import React from "react";
import Carousel from "../../components/Carousel";
import { carouselClothingData } from "../../data/carouselClothingData";
import { carouselDiscountData } from "../../data/carouselDiscountData";
import BestSellers from "../../components/BestSellers";
import "./index.css";
import Categories from "../../components/Categories";
import SuccessAlert from "../../components/Alerts/SuccessAlert";

const Home = () => {
  return (
    <div className="body-wrapper">
      <div className="home-page-wrapper">
        <SuccessAlert />
        <Carousel carouselData={carouselClothingData} />
        <Categories />
        <Carousel carouselData={carouselDiscountData} />
        <BestSellers />
      </div>
    </div>
  );
};

export default Home;
