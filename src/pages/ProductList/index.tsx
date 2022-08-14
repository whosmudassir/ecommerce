import React from "react";
import Card from "../../components/common/Card/index";
import Slider from "../../components/Slider";
import { shopList } from "../../data/shopList";
import { useEffect, useState } from "react";
import { cartStore } from "../../store";
import SuccessAlert from "../../components/Alerts/SuccessAlert";

const ProductList = () => {
  const [cardInfo, setCardInfo] = useState<any>(shopList);
  const [sortOrder, setSortOrder] = useState(null);
  const [radioValue, setRadioValue] = useState<any>();
  const [selectedCategoryItem, setSelectedCategoryItem] = useState([]);
  const [selectedBrandItem, setSelectedBrandItem] = useState([]);
  //sorting func
  const sortItems = () => {
    const results = [...shopList];
    results.sort((firstItem, secondItem) => {
      if (sortOrder == "high") {
        setRadioValue("high");
        return secondItem.price - firstItem.price;
      } else if (sortOrder == "low") {
        setRadioValue("low");
        return firstItem.price - secondItem.price;
      }
    });
    setCardInfo(results);
  };

  //filter func
  const addFilters = () => {
    let results = [...shopList];
    let filteredCategoryResults;
    if (selectedCategoryItem) {
      if (selectedBrandItem.length > 0) {
        const categoryWBrand = cardInfo.filter((item) => {
          if (selectedBrandItem.includes(item.brandName)) {
            return item;
          }
        });
        setCardInfo(categoryWBrand);
      } else {
        filteredCategoryResults = results.filter((item) => {
          if (selectedCategoryItem.includes(item.category)) {
            return item;
          }
        });
        setCardInfo(filteredCategoryResults);
      }
    }

    let filteredBrandResults;
    if (selectedBrandItem) {
      if (selectedCategoryItem.length > 0) {
        const brandWCategory = cardInfo.filter((item) => {
          if (selectedCategoryItem.includes(item.category)) {
            return item;
          }
        });
        setCardInfo(brandWCategory);
      } else {
        filteredBrandResults = results.filter((item) => {
          if (selectedBrandItem.includes(item.brandName)) {
            return item;
          }
        });
        setCardInfo(filteredBrandResults);
      }
    }

    console.log("::filter func::", filteredCategoryResults);
  };

  useEffect(() => {
    if (sortOrder == "unsort") {
      setRadioValue("");
      setCardInfo(shopList);
    } else if (sortOrder == "high" || "low") {
      sortItems();
    }
  }, [sortOrder]);

  useEffect(() => {
    if (selectedCategoryItem.length > 0 || selectedBrandItem.length > 0) {
      addFilters();
    }
  }, [selectedCategoryItem, selectedBrandItem]);

  //sorting
  const lowToHighSort = () => {
    setSortOrder("low");
  };

  const highToLowSort = () => {
    setSortOrder("high");
  };

  //clear filters
  const clearFilters = () => {
    setSortOrder("unsort");
  };

  console.log(":::::card info", cardInfo);

  return (
    <div className="body-wrapper">
      <Slider
        highToLowSort={highToLowSort}
        lowToHighSort={lowToHighSort}
        clearFilters={clearFilters}
        radioValue={radioValue}
        selectedCategoryItem={selectedCategoryItem}
        setSelectedCategoryItem={setSelectedCategoryItem}
        selectedBrandItem={selectedBrandItem}
        setSelectedBrandItem={setSelectedBrandItem}
      />
      <div className="product-list-wrapper">
        <SuccessAlert />
        {cardInfo.map((item) => (
          <div key={item.id}>
            <Card
              id={item.id}
              brandName={item.brandName}
              name={item.name}
              price={item.price}
              category={item.category}
              imageUrl={item.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
