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
    <div className="categories-wrapper">
      {displayCategory.map((category) => (
        <>
          <div className="category-wrapper">
            <div className="img-wrapper">
              <img className="responsive-img" src={category.img} />
            </div>
            <div className="category-name">{category.text}</div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Categories;
