import React, { useEffect, useState } from "react";
import { loggedInUser } from "../../../store";
import { auth, db } from "../../../firebase-config";
import {
  collection,
  doc,
  query,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import "./index.css";

const DashboardOrderInfo = () => {
  //store
  const loggedInUserData = loggedInUser((state) => state.loggedInUserData);

  const [userOrders, setUserOrders] = useState([]);
  const [singleOrder, setSingleOrder] = useState([]);

  useEffect(() => {
    setUserOrders(loggedInUserData);
  }, [loggedInUserData]);

  useEffect(() => {
    getUserName();
  }, []);

  //setting up data from firestore collection matching user id of auth
  const getUserName = async () => {
    try {
      const q = query(
        collection(db, "users", loggedInUserData.userId, "orders")
      );
      const unsubscribe = await onSnapshot(q, (querySnapshot) => {
        var orders = [];

        querySnapshot.forEach((doc) => {
          orders.push(doc.data());
        });

        setSingleOrder(orders);
        console.log("Current orders in CA: ", orders);
      });
    } catch (e) {
      console.log("error :: :: ::", e);
    }
  };

  return (
    <div className="dashboard-info-wrapper recent-orders-wrapper">
      <>
        {singleOrder.length > 1 ? (
          <>
            {singleOrder.map((order) => (
              <div className="cart-product-item-parent-box">
                <div className="cart-product-item-child-box">
                  <div>
                    <img
                      className="cart-product-item-child-img"
                      src={order[0].imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="cart-product-item-child-img-text remove-btn-wrapper">
                    <p className="cart-product-item-child-item">
                      {order[0].name} : {order[0].size}
                    </p>
                  </div>
                </div>
                <div className="cart-product-item-child-box cart-product-item-child-img-text">
                  <p className="cart-product-item-title">Price</p>
                  <p className="cart-product-item-child-item">
                    {order[0].price}
                  </p>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p>No previous orders</p>
        )}
      </>
    </div>
  );
};

export default DashboardOrderInfo;
