import React from "react";
import EmptyWishList from "../../components/EmptyWishList";
import "./index.css";
import NotLoggedinTemplate from "../../components/NotLoggedinTemplate";
import { wishlistStore } from "../../store";
import Card from "../../components/common/Card";

const WishList = () => {
  const isLoggedin = false;

  const wishlist = wishlistStore((state) => state.wishlist);

  return (
    <div className="body-wrapper">
      <div className="cart-wrapper">
        {true ? (
          <>
            {wishlist.length > 0 ? (
              <div>
                <p className="cart-heading">Your Wishlist</p>
                <div className="wishlist-wrapper">
                  {wishlist.map((item) => (
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
