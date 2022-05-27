import React, { useState, useEffect } from "react";
import "./index.css";
import { carouselData } from "../../data/carouselData";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [carouselImgSource, setCarouselImgSource] = useState([]);
  const [currentCarousel, setCurrentCarousel] = useState(0);

  useEffect(() => {
    setCarouselImgSource(
      carouselData.map((carousel) => {
        return carousel.img;
      })
    );
  }, []);

  const nextSlide = () => {
    setCurrentCarousel((currentSlide) => {
      return currentSlide + 1;
    });
  };

  const previousSlide = () => {
    setCurrentCarousel((currentSlide) => {
      return currentSlide - 1;
    });
  };

  console.log("---->", carouselImgSource.length, currentCarousel);
  console.log("cal", currentCarousel, carouselImgSource.length - 1);
  return (
    <div class="carousel-wrapper">
      <div class="carousel">
        {currentCarousel != 0 && (
          <div class="carousel-arrow-left">
            <button class="icon-wrapper" onClick={previousSlide}>
              <i class="fa-solid fa-chevron-left icon"></i>
            </button>
          </div>
        )}
        <Link to="/">
          <img
            class="responsive-img"
            src={carouselImgSource[currentCarousel]}
          />
        </Link>
        {currentCarousel != carouselImgSource.length - 1 && (
          <div class="carousel-arrow-right">
            <button class="icon-wrapper" onClick={nextSlide}>
              <i class="fa-solid fa-chevron-right icon"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
