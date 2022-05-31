import React, { useState, useEffect } from "react";
import "./index.css";
import { categoriesData } from "../../data/categoriesData";

const Categories = () => {
  const [displayCategory, setDisplayCategory] = useState([]);
  useEffect(() => {
    setDisplayCategory(categoriesData);
  }, []);

  console.log("cat-->", displayCategory);

  return (
    <div class="categories-wrapper">
      {displayCategory.map((category) => (
        <>
          <div class="category-wrapper">
            <div class="img-wrapper">
              <img class="responsive-img" src={category.img} />
            </div>
            <div className="category-name">{category.text}</div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Categories;
