import React from "react";
import EmptyScreenTemplate from "../../components/common/EmptyScreenTemplate";

const NotFound = () => {
  return (
    <div className="body-wrapper">
      <div className="cart-wrapper">
        <EmptyScreenTemplate
          icon={"fa-regular fa-face-frown"}
          headingText={"Error 404"}
          bodyText={"This page doesn't exist."}
        />
      </div>
    </div>
  );
};

export default NotFound;
