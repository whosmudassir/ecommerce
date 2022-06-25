import React from "react";
import EmptyWishList from "../../components/EmptyWishList";

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
          <>
            <EmptyWishList />
          </>
        )}
      </div>
    </div>
  );
};

export default WishList;
