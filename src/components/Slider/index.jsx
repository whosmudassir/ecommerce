import React from "react";

const Slider = () => {
  return (
    <div>
      <div id="trigger-slider" class="list-box-close list-box">
        <div class="category-divider">
          <div class="heading-text-wrapper">
            <p class="filter-heading">Filters</p>
            <p class="filter-heading">Clear</p>
          </div>
        </div>
        <div class="category-divider">
          <div class="categories-wrapper">
            <p class="filter-heading">Sort by</p>
            <div class="input-text">
              <input type="radio" value="high" name="price" />
              Price: High to Low
            </div>
            <div class="input-text">
              <input type="radio" value="low" name="price" />
              Price: Low to High
            </div>
          </div>
        </div>
        <div class="category-divider">
          <div class="categories-wrapper">
            <p class="filter-heading">Categories</p>
            <div class="input-text">
              <input type="checkbox" name="category" value="tshirts" />
              T-shirts
            </div>
            <div class="input-text">
              <input type="checkbox" name="category" value="hoodies" />
              Hoodies
            </div>
            <div class="input-text">
              <input type="checkbox" name="category" value="sweatshirts" />
              Sweatshirts
            </div>
            <div class="input-text">
              <input type="checkbox" name="category" value="accessories" />
              Accessories
            </div>
          </div>
        </div>

        <div class="category-divider">
          <div class="categories-wrapper">
            <p class="filter-heading">Brands</p>
            <div class="input-text">
              <input type="checkbox" name="brand" value="demons" />
              Demons
            </div>
            <div class="input-text">
              <input type="checkbox" name="brand" value="cavempt" />
              Cavempt
            </div>
            <div class="input-text">
              <input type="checkbox" name="brand" value="vetements" />
              Vetements
            </div>
            <div class="input-text">
              <input type="checkbox" name="brand" value="pleasures" />
              Pleasures
            </div>
            <div class="input-text">
              <input type="checkbox" name="brand" value="bstroy" />
              BStroy
            </div>
            <div class="input-text">
              <input type="checkbox" name="brand" value="numbernine" />
              NumberNine
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
