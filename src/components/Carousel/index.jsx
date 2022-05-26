import React, { useState, useEffect } from "react";
import "./index.css";
import { carouselData } from "../../data/carouselData";

const Carousel = () => {
  const [carouselImgSource, setCarouselImgSource] = useState([]);
  // const []
  useEffect(() => {
    setCarouselImgSource(
      carouselData.map((carousel) => {
        return carousel.img;
      })
    );
  }, []);
  console.log("imgs-->", carouselData);
  return (
    <div class="carousel-wrapper">
      <div class="carousel">{/* <img src={}/> */}</div>
    </div>
  );
};

export default Carousel;
