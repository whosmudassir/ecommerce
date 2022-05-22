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
            <div>
              <input type="radio" value="high" name="price" /> Price: High to
              Low
            </div>
            <div>
              <input type="radio" value="low" name="price" /> Price: Low to High
            </div>
          </div>
        </div>
        <div class="category-divider">
          <div class="categories-wrapper">
            <p class="filter-heading">Categories</p>
            <div>
              <input type="checkbox" name="category" value="tshirts" />
              T-shirts
            </div>
            <div>
              <input type="checkbox" name="category" value="hoodies" />
              Hoodies
            </div>
            <div>
              <input type="checkbox" name="category" value="sweatshirts" />
              Sweatshirts
            </div>
            <div>
              <input type="checkbox" name="category" value="accessories" />
              Accessories
            </div>
          </div>
        </div>

        <div class="category-divider">
          <div class="categories-wrapper">
            <p class="filter-heading">Brands</p>
            <div>
              <input type="checkbox" name="brand" value="demons" />
              Demons
            </div>
            <div>
              <input type="checkbox" name="brand" value="cavempt" />
              Cavempt
            </div>
            <div>
              <input type="checkbox" name="brand" value="vetements" />
              Vetements
            </div>
            <div>
              <input type="checkbox" name="brand" value="pleasures" />
              Pleasures
            </div>
            <div>
              <input type="checkbox" name="brand" value="bstroy" />
              BStroy
            </div>
            <div>
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
