import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <>
      <div className="empty-cart-wrapper">
        <i class="fa-solid fa-bag-shopping empty-cart"></i>

        <p className="empty-cart-heading">Cart is empty.</p>
        <p className="empty-cart-body">
          You don't have any products added in your cart
        </p>
        <div>
          <Link to="/shop">
            <button class="primary-btn empty-cart-btn">Return to shop </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;