import React, { useState, useEffect } from "react";
import "./index.css";
import { categoriesData } from "../../data/categoriesData";
import { Link, useNavigate } from "react-router-dom";

const Categories = () => {
  const [displayCategory, setDisplayCategory] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setDisplayCategory(categoriesData);
  }, []);

  const handleClick = () => {
    navigate("/shop");
  };

  return (
    <div className="categories-wrapper">
      {displayCategory.map((category) => (
        <>
          <div className="category-wrapper">
            <div className="img-wrapper">
              <Link to="/shop">
                <img className="responsive-img" src={category.img} />
              </Link>
            </div>

            <div className="category-name" onClick={handleClick}>
              {category.text}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Categories;
