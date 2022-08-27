import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { addOrderService } from "../../../services/addOrderServices";
import { useNavigate } from "react-router-dom";
const PlaceOrderButton = ({ finalTotal }) => {
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

    // const options = {
    //   key: "rzp_test_SP206ka3zuV4SX",
    //   amount: finalTotal * 100,
    //   currency: "INR",
    //   name: "MsftsRep",
    //   description: "Thank you for shopping with us",

    //   handler: function () {
    //     console.log("::entered");
    //     const orderId = "122";

    //     const orderData = {
    //       products: "products",
    //       amount: finalTotal * 100,
    //       // paymentId: response.razorpay_payment_id,
    //       orderId,
    //       delivery: "address",
    //     };

    //     // const { data, status } = await addOrderService(orderData, "sdsds");
    //     console.log("::::status", status);
    //     if (true) {
    //       // setSelectedCoupon({});
    //       // dispatchOrder({ type: "GET_ORDERS", payload: data.order });
    //       navigate("/order-confirmation");
    //     }
    //   },

    //   prefill: {
    //     name: "mudassir",
    //     email: "pay@msftsrep.shop",
    //     contact: "9999999999",
    //   },
    // };
    var options = {
      key: "rzp_test_SP206ka3zuV4SX",
      amount: finalTotal * 100,
      currency: "INR",
      name: "MsftsRep",
      description: "Thank you for shopping with us",

      // image: "https://example.com/your_logo",
      order_id: "order_IluGWxBm9U8zJ8", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new Razorpay(options);
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
