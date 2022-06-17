import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const EmptyWishList = () => {
  return (
    <>
      <div className="empty-cart-wrapper">
        <i class="fa-regular fa-heart  empty-cart"></i>

        <p className="empty-cart-heading">Wishlist is empty.</p>
        <p className="empty-cart-body">
          You don't have any products added in your cart. Search and save items
          to your liking!
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

export default EmptyWishList;
