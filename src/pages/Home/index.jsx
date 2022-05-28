import React from "react";
import Carousel from "../../components/Carousel";
import { carouselData } from "../../data/carouselData";
import "./index.css";
const Home = () => {
  return (
    <div class="body-wrapper">
      <div class="home-page-wrapper">
        <Carousel carouselData={carouselData} />
        <Carousel carouselData={carouselData} />
      </div>
    </div>
  );
};

export default Home;
