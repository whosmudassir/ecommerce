import React from "react";
import EmptyScreenTemplate from "../../components/EmptyScreenTemplate";

const EmptyWishList = () => {
  return (
    <>
      <EmptyScreenTemplate
        icon={"fa-regular fa-heart"}
        headingText={"Wishlist is empty."}
        bodyText={
          "You don't have any products added in your wishlist. Search and save items to your liking!"
        }
      />
    </>
  );
};

export default EmptyWishList;
