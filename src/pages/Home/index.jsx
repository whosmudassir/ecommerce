import React from "react";
import Carousel from "../../components/Carousel";
import { carouselClothingData } from "../../data/carouselClothingData";
import { carouselDiscountData } from "../../data/carouselDiscountData";
import BestSellers from "../../components/BestSellers";
import "./index.css";
import Categories from "../../components/Categories";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div class="body-wrapper">
      <div class="home-page-wrapper">
        <Carousel carouselData={carouselClothingData} />
        <Categories />
        <Carousel carouselData={carouselDiscountData} />
        <BestSellers />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
