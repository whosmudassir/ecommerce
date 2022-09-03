import React, { useState, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Carousel = ({ carouselData }: any) => {
  const [carouselImgSource, setCarouselImgSource] = useState([]);
  const [currentCarousel, setCurrentCarousel] = useState(0);

  useEffect(() => {
    setCarouselImgSource(
      carouselData.map((carousel: any) => {
        return carousel.img;
      })
    );
  }, []);

  // auto swipe on carousels
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
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

  const dotSlider = (index: any) => {
    setCurrentCarousel(index);
  };

  return (
    <div>
      <div className="carousel">
        <div className="carousel-arrow-left">
          <button className="icon-wrapper" onClick={previousSlide}>
            <i className="fa-solid fa-chevron-left icon"></i>
          </button>
        </div>
        <div className="carousel-img-wrapper">
          <Link to="/shop">
            <img
              className="responsive-img"
              src={carouselImgSource[currentCarousel]}
            />
          </Link>
        </div>
        <div className="carousel-arrow-right">
          <button className="icon-wrapper" onClick={nextSlide}>
            <i className="fa-solid fa-chevron-right icon"></i>
          </button>
        </div>

        <div className="dot-wrapper">
          {Array.from({ length: carouselImgSource.length }).map(
            (dot, index) => (
              <div className="dot">
                <div
                  onClick={() => dotSlider(index)}
                  className={
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
