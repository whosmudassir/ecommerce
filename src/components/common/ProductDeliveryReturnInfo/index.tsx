import React from "react";
import "./index.css";

const ProductDeliveryReturnInfo = () => {
  return (
    <div className="product-delivery-wrapper">
      <p className="delivery-info-title">Delivery</p>

      <p className="delivery-info-body">
        <i className="fa-solid fa-dolly"></i>
        Free shipping on orders over $2,250 Standard Delivery: Orders are
        delivered by FedEx within 4-6 business days, not inclusive of Public
        Holidays.
      </p>
      <p className="delivery-info-title">Returns & Exchange</p>
      <p className="delivery-info-body">
        All sales are final. We does not accept requests for cancellation of
        orders or the return of items.
      </p>
    </div>
  );
};

export default ProductDeliveryReturnInfo;
