import React from "react";
import Carousel from "../../components/Carousel";
import { carouselData } from "../../data/carouselData";
const Home = () => {
  return (
    <div class="body-wrapper">
      <Carousel carouselData={carouselData} />
    </div>
  );
};

export default Home;
