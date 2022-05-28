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

  useEffect(() => {
    // setInterval(() => {
    //   if (currentCarousel != carouselImgSource.length - 1) {
    //     setCurrentCarousel((currentSlide) => {
    //       return currentSlide + 1;
    //     });
    //   } else {
    //     setCurrentCarousel(0);
    //   }
    // }, 2000);
  }, []);

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

  console.log("---->", carouselImgSource.length, currentCarousel);
  console.log("cal", currentCarousel, carouselImgSource.length - 1);
  return (
    <div class="carousel-wrapper">
      <div class="carousel">
        <div class="carousel-arrow-left">
          <button class="icon-wrapper" onClick={previousSlide}>
            <i class="fa-solid fa-chevron-left icon"></i>
          </button>
        </div>

        <Link to="/">
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
      </div>
    </div>
  );
};

export default Carousel;
