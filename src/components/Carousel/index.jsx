import React, { useState, useEffect } from "react";
import "./index.css";
import { carouselData } from "../../data/carouselData";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [carouselImgSource, setCarouselImgSource] = useState([]);
  const [currentCarousel, setCurrentCarousel] = useState();

  useEffect(() => {
    setCarouselImgSource(
      carouselData.map((carousel) => {
        return carousel.img;
      })
    );
  }, []);
  console.log("imgs-->", carouselImgSource);
  return (
    <div class="carousel-wrapper">
      <div class="carousel">
        <div class="carousel-arrow-left">
          <button class="icon-wrapper">
            <i class="fa-solid fa-chevron-left icon"></i>
          </button>
        </div>
        <Link to="/">
          <img class="responsive-img" src={carouselImgSource[0]} />
        </Link>
        <div class="carousel-arrow-right">
          <button class="icon-wrapper">
            <i class="fa-solid fa-chevron-right icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
