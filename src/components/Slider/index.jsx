import React from "react";

const Slider = () => {
  return (
    <div>
      <div id="trigger-slider" class="list-box-close list-box">
        <div class="category-divider">
          <div class="heading-text-wrapper">
            <p>Filters</p>
            <p>Clear</p>
          </div>
        </div>
        <div class="category-divider">
          <div class="categories-wrapper">
            <p>All Categories</p>
            <p>T-shirts</p>
            <p>Hoodies</p>
            <p>Sweatshirts</p>
            <p>Accessories</p>
          </div>
        </div>
        <div class="category-divider">
          <div class="categories-wrapper">
            <p>Sort by</p>
            <p>Price: High to Low</p>
            <p>Price: Low to High</p>
          </div>
        </div>
        <div class="category-divider">
          <div class="categories-wrapper">
            <p>Brands</p>
            <p>Cavempt</p>
            <p>Vetements</p>
            <p>Vetements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
