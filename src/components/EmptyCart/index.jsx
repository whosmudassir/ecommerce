import React from "react";
import EmptyScreenTemplate from "../../components/EmptyScreenTemplate";

const EmptyCart = () => {
  return (
    <>
      <EmptyScreenTemplate
        icon={"fa fa-shopping-bag"}
        headingText={"Cart is empty."}
        bodyText={"You don't have any products added in your cart."}
      />
    </>
  );
};

export default EmptyCart;
