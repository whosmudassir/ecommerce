import React from "react";
import EmptyWishList from "../../components/EmptyWishList";
import "./index.css";
import NotLoggedinTemplate from "../../components/NotLoggedinTemplate";

const WishList = () => {
  const isLoggedin = false;
  const wishListCount = [0];
  return (
    <div className="body-wrapper">
      <div className="cart-wrapper">
        {isLoggedin ? (
          <>
            {wishListCount.length > 0 ? (
              <div>
                <p className="cart-heading">Your Wishlist</p>
              </div>
            ) : (
              <div className="empty-wishlist-wrapper">
                <EmptyWishList />
              </div>
            )}
          </>
        ) : (
          <NotLoggedinTemplate screenName={"wishlist"} />
        )}
      </div>
    </div>
  );
};

export default WishList;
