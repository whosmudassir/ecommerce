import React from "react";
import Card from "../../components/common/Card/index";
import Slider from "../../components/Slider";
import { shopList } from "../../data/shopList";
import { useEffect, useState } from "react";
import { cartStore } from "../../store";
import SuccessAlert from "../../components/Alerts/SuccessAlert";

const ProductList = () => {
  const [cardInfo, setCardInfo] = useState<any>(shopList);
  const [sortOrder, setSortOrder] = useState<any>(null);
  const [radioValue, setRadioValue] = useState<any>();
  const [selectedCategoryItem, setSelectedCategoryItem] = useState<any>([]);
  const [selectedBrandItem, setSelectedBrandItem] = useState<any>([]);
  //sorting func
  const sortItems = () => {
    const results = [...shopList];
    //@ts-ignore
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
  const addCategoryFilters = () => {
    let results = [...shopList];
    let filteredCategoryResults;
    if (selectedCategoryItem) {
      // if (selectedBrandItem.length > 0) {
      //   const categoryWBrand = cardInfo.filter((item) => {
      //     if (selectedBrandItem.includes(item.brandName)) {
      //       return item;
      //     }
      //   });
      //   setCardInfo(categoryWBrand);
      // } else {
      filteredCategoryResults = results.filter((item) => {
        if (selectedCategoryItem.includes(item.category)) {
          return item;
        }
      });
      setCardInfo(filteredCategoryResults);
      // }
    }
  };

  const addBrandFilters = () => {
    let results = [...shopList];
    let filteredBrandResults;
    if (selectedBrandItem) {
      filteredBrandResults = results.filter((item) => {
        if (selectedBrandItem.includes(item.brandName)) {
          return item;
        }
      });
      setCardInfo(filteredBrandResults);
    }
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
    if (selectedCategoryItem.length > 0) {
      addCategoryFilters();
    }
    if (selectedBrandItem.length > 0) {
      addBrandFilters();
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
        {cardInfo.map((item: any) => (
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
