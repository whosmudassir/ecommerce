import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

interface IPlaceOrderButton {
  handleOnClick: any;
}

const PlaceOrderButton = ({ handleOnClick }: IPlaceOrderButton) => {
  return (
    <div className="place-order-btn-wrapper">
      <div className="place-order-btn-item">
        <Link to="">
          <button
            className="primary-btn place-order-btn"
            onClick={handleOnClick}
          >
            Place Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PlaceOrderButton;
