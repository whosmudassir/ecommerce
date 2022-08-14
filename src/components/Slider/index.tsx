import React from "react";

const Slider = ({
  highToLowSort,
  lowToHighSort,
  clearFilters,
  radioValue,
  selectedCategoryItem,
  setSelectedCategoryItem,
  selectedBrandItem,
  setSelectedBrandItem,
}) => {
  const onSelectedCategoryItem = (item) => {
    setSelectedCategoryItem([...selectedCategoryItem, item]);
  };

  const onSelectedBrandItem = (item) => {
    setSelectedBrandItem([...selectedBrandItem, item]);
  };

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
                id="lth"
                className="input-color"
                type="radio"
                value={radioValue}
                name="price"
                checked={"low" == radioValue}
                onChange={() => {
                  lowToHighSort();
                }}
              />
              <label for="lth" className="label-text">
                Price: Low to High
              </label>
            </div>
            <div className="input-text">
              <input
                id="htl"
                className="input-color"
                type="radio"
                value={radioValue}
                name="price"
                checked={"high" == radioValue}
                onChange={() => {
                  highToLowSort();
                }}
              />
              <label for="htl" className="label-text">
                Price: High to Low
              </label>
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
                onChange={() => onSelectedCategoryItem("t-shirts")}
                // checked={todo.completed}
              />
              T-shirts
            </div>
            <div className="input-text">
              <input
                type="checkbox"
                id="input-color"
                name="category"
                value="hoodies"
                onChange={() => onSelectedCategoryItem("hoodies")}
              />
              Hoodies
            </div>
            <div className="input-text">
              <input
                type="checkbox"
                id="input-color"
                name="category"
                value="sweatshirts"
                onChange={() => onSelectedCategoryItem("sweatshirts")}
              />
              Sweatshirts
            </div>
            <div className="input-text">
              <input
                type="checkbox"
                id="input-color"
                name="category"
                value="accessories"
                onChange={() => onSelectedCategoryItem("accessories")}
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
                onChange={() => onSelectedBrandItem("demons")}
              />
              Demons
            </div>
            <div className="input-text">
              <input
                type="checkbox"
                id="input-color"
                name="brand"
                value="cavempt"
                onChange={() => onSelectedBrandItem("cavempt")}
              />
              Cavempt
            </div>
            <div className="input-text">
              <input
                type="checkbox"
                id="input-color"
                name="brand"
                value="vetements"
                onChange={() => onSelectedBrandItem("vetements")}
              />
              Vetements
            </div>
            <div className="input-text">
              <input
                type="checkbox"
                id="input-color"
                name="brand"
                value="pleasures"
                onChange={() => onSelectedBrandItem("pleasures")}
              />
              Pleasures
            </div>
            <div className="input-text">
              <input
                type="checkbox"
                id="input-color"
                name="brand"
                value="bstroy"
                onChange={() => onSelectedBrandItem("bstroy")}
              />
              BStroy
            </div>
            <div className="input-text">
              <input
                type="checkbox"
                id="input-color"
                name="brand"
                value="numbernine"
                onChange={() => onSelectedBrandItem("numbernine")}
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
