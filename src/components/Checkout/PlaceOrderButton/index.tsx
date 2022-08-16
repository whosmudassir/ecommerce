import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { addOrderService } from "../../../services/addOrderServices";
import { useNavigate } from "react-router-dom";
const PlaceOrderButton = () => {
  const navigate = useNavigate();
  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      return console.log("error");
    }

    const options = {
      key: "rzp_test_SP206ka3zuV4SX",
      amount: "222",
      currency: "INR",
      name: "Essence",
      description: "Thank you for shopping with us",
      handler: async function (response) {
        const orderId = "122";

        const orderData = {
          products: "products",
          amount: "222",
          paymentId: response.razorpay_payment_id,
          orderId,
          delivery: "address",
        };

        const { data, status } = await addOrderService(orderData, "sdsds");

        if (status === 201) {
          // setSelectedCoupon({});
          // dispatchOrder({ type: "GET_ORDERS", payload: data.order });
          navigate("/order-confirmation");
        }
      },

      prefill: {
        name: "mudassir",
        email: "sadsa@sd.co",
        contact: "93225088143",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="place-order-btn-wrapper">
      <div className="place-order-btn-item">
        <Link to="">
          <button
            className="primary-btn place-order-btn"
            onClick={displayRazorpay}
          >
            Place Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PlaceOrderButton;
