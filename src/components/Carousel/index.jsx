import React, { useState, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Carousel = ({ carouselData }) => {
  const [carouselImgSource, setCarouselImgSource] = useState([]);
  const [currentCarousel, setCurrentCarousel] = useState(0);

  useEffect(() => {
    setCarouselImgSource(
      carouselData.map((carousel) => {
        return carousel.img;
      })
    );
  }, []);

  // auto swipe on carousels
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [currentCarousel]);

  const nextSlide = () => {
    if (currentCarousel != carouselImgSource.length - 1) {
      setCurrentCarousel((currentSlide) => {
        return currentSlide + 1;
      });
    } else {
      setCurrentCarousel(0);
    }
  };

  const previousSlide = () => {
    if (currentCarousel != 0) {
      setCurrentCarousel((currentSlide) => {
        return currentSlide - 1;
      });
    } else {
      setCurrentCarousel(carouselImgSource.length - 1);
    }
  };

  const dotSlider = (index) => {
    setCurrentCarousel(index);
  };

  return (
    <div>
      <div class="carousel">
        <div class="carousel-arrow-left">
          <button class="icon-wrapper" onClick={previousSlide}>
            <i class="fa-solid fa-chevron-left icon"></i>
          </button>
        </div>

        <Link to="/">
          <div class="current-image" />
          <img
            class="responsive-img"
            src={carouselImgSource[currentCarousel]}
          />
        </Link>

        <div class="carousel-arrow-right">
          <button class="icon-wrapper" onClick={nextSlide}>
            <i class="fa-solid fa-chevron-right icon"></i>
          </button>
        </div>

        <div class="dot-wrapper">
          {Array.from({ length: carouselImgSource.length }).map(
            (dot, index) => (
              <div class="dot">
                <div
                  onClick={() => dotSlider(index)}
                  class={
                    currentCarousel == index ? "dot-active" : "dot-inactive"
                  }
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
