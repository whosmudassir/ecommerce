import React from "react";
import EmptyWishList from "../../components/EmptyWishList";
import "./index.css";

const WishList = () => {
  return (
    <div class="body-wrapper">
      <div className="cart-wrapper">
        {false ? (
          <>
            <div>
              <p className="cart-heading">Your Wishlist</p>
            </div>
          </>
        ) : (
          <div className="empty-wishlist-wrapper">
            <EmptyWishList />
          </div>
        )}
      </div>
    </div>
  );
};

export default WishList;
