import React from "react";

const Slider = ({ highToLowSort, lowToHighSort, clearFilters, radioValue }) => {
  return (
    <div>
      {/* <form> */}
      <div id="trigger-slider" className="list-box-close list-box">
        <div className="category-divider">
          <div className="heading-text-wrapper">
            <p className="filter-heading">Filters</p>
            <button
              onClick={() => {
                clearFilters();
              }}
            >
              <p className="filter-heading">Clear</p>
            </button>
          </div>
        </div>
        <div className="category-divider">
          <div className="filter-wrapper">
            <p className="filter-heading">Sort by</p>
            <div className="input-text">
              <input
                id="input-color"
                type="radio"
                value={radioValue}
                name="price"
                checked={"high" == radioValue}
                onChange={() => {
                  highToLowSort();
                }}
              />
              Price: High to Low
            </div>
            <div className="input-text">
              <input
                id="input-color"
                type="radio"
                value={radioValue}
                name="price"
                checked={"low" == radioValue}
                onChange={() => {
                  lowToHighSort();
                }}
              />
              Price: Low to High
            </div>
          </div>
        </div>
        <div className="category-divider">
          <div className="filter-wrapper">
            <p className="filter-heading">Categories</p>
            <div className="input-text">
              <input
                id="input-color"
                type="checkbox"
                name="category"
                value="tshirts"
              />
              T-shirts
            </div>
            <div className="input-text">
              <input
                type="checkbox"
                id="input-color"
                name="category"
                value="hoodies"
              />
              Hoodies
            </div>
            <div className="input-text">
              <input
                type="checkbox"
                id="input-color"
                name="category"
                value="sweatshirts"
              />
              Sweatshirts
            </div>
            <div className="input-text">
              <input
                type="checkbox"
                id="input-color"
                name="category"
                value="accessories"
              />
              Accessories
            </div>
          </div>
        </div>

        <div className="category-divider">
          <div className="filter-wrapper">
            <p className="filter-heading">Brands</p>
            <div className="input-text">
              <input
                type="checkbox"
                id="input-color"
                name="brand"
                value="demons"
              />
              Demons
            </div>
            <div className="input-text">
              <input
                type="checkbox"
                id="input-color"
                name="brand"
                value="cavempt"
              />
              Cavempt
            </div>
            <div className="input-text">
              <input
                type="checkbox"
                id="input-color"
                name="brand"
                value="vetements"
              />
              Vetements
            </div>
            <div className="input-text">
              <input
                type="checkbox"
                id="input-color"
                name="brand"
                value="pleasures"
              />
              Pleasures
            </div>
            <div className="input-text">
              <input
                type="checkbox"
                id="input-color"
                name="brand"
                value="bstroy"
              />
              BStroy
            </div>
            <div className="input-text">
              <input
                type="checkbox"
                id="input-color"
                name="brand"
                value="numbernine"
              />
              NumberNine
            </div>
          </div>
        </div>
      </div>
      {/* </form> */}
    </div>
  );
};

export default Slider;
