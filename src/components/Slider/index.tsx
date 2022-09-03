import React from "react";

interface ISlider {
  highToLowSort: any;
  lowToHighSort: any;
  clearFilters: any;
  radioValue: any;
  selectedCategoryItem: any;
  setSelectedCategoryItem: any;
  selectedBrandItem: any;
  setSelectedBrandItem: any;
}

const Slider = ({
  highToLowSort,
  lowToHighSort,
  clearFilters,
  radioValue,
  selectedCategoryItem,
  setSelectedCategoryItem,
  selectedBrandItem,
  setSelectedBrandItem,
}: ISlider) => {
  const onSelectedCategoryItem = (item: any) => {
    setSelectedCategoryItem([...selectedCategoryItem, item]);
  };

  const onSelectedBrandItem = (item: any) => {
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
              className="link-btn-text footer-text"
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
                checked={"low" === radioValue}
                onChange={() => {
                  lowToHighSort();
                }}
              />
              <label htmlFor="lth" className="label-text">
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
                checked={"high" === radioValue}
                onChange={() => {
                  highToLowSort();
                }}
              />
              <label htmlFor="htl" className="label-text">
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
                id="tshirts"
                type="checkbox"
                name="category"
                value="tshirts"
                onChange={() => onSelectedCategoryItem("t-shirts")}
                // checked={todo.completed}
              />
              <label htmlFor="tshirts" className="label-text">
                T-shirts
              </label>
            </div>
            <div className="input-text">
              <input
                type="checkbox"
                id="hoodies"
                name="category"
                value="hoodies"
                onChange={() => onSelectedCategoryItem("hoodies")}
              />
              <label htmlFor="hoodies" className="label-text">
                Hoodies
              </label>
            </div>
            <div className="input-text">
              <input
                type="checkbox"
                id="sweatshirts"
                name="category"
                value="sweatshirts"
                onChange={() => onSelectedCategoryItem("sweatshirts")}
              />
              <label htmlFor="sweatshirts" className="label-text">
                Sweatshirts
              </label>
            </div>
            <div className="input-text">
              <input
                type="checkbox"
                id="accessories"
                name="category"
                value="accessories"
                onChange={() => onSelectedCategoryItem("accessories")}
              />
              <label htmlFor="accessories" className="label-text">
                Accessories
              </label>
            </div>
          </div>
        </div>

        <div className="category-divider">
          <div className="filter-wrapper">
            <p className="filter-heading">Brands</p>
            <div className="input-text">
              <input
                type="checkbox"
                id="demons"
                name="brand"
                value="demons"
                onChange={() => onSelectedBrandItem("demons")}
              />
              <label htmlFor="demons" className="label-text">
                Demons
              </label>
            </div>
            <div className="input-text">
              <input
                type="checkbox"
                id="cavempt"
                name="brand"
                value="cavempt"
                onChange={() => onSelectedBrandItem("cavempt")}
              />
              <label htmlFor="cavempt" className="label-text">
                Cavempt
              </label>
            </div>
            <div className="input-text">
              <input
                type="checkbox"
                id="vetements"
                name="brand"
                value="vetements"
                onChange={() => onSelectedBrandItem("vetements")}
              />
              <label htmlFor="vetements" className="label-text">
                Vetements
              </label>
            </div>
            <div className="input-text">
              <input
                type="checkbox"
                id="pleasures"
                name="brand"
                value="pleasures"
                onChange={() => onSelectedBrandItem("pleasures")}
              />
              <label htmlFor="pleasures" className="label-text">
                Pleasures
              </label>
            </div>
            <div className="input-text">
              <input
                type="checkbox"
                id="bstroy"
                name="brand"
                value="bstroy"
                onChange={() => onSelectedBrandItem("bstroy")}
              />
              <label htmlFor="bstroy" className="label-text">
                BStroy
              </label>
            </div>
            <div className="input-text">
              <input
                type="checkbox"
                id="numbernine"
                name="brand"
                value="numbernine"
                onChange={() => onSelectedBrandItem("numbernine")}
              />
              <label htmlFor="numbernine" className="label-text">
                NumberNine
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* </form> */}
    </div>
  );
};

export default Slider;
