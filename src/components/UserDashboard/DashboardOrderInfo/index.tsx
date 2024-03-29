import React, { useEffect, useState } from "react";
import { loggedInUser } from "../../../store";
import { db } from "../../../firebase-config";
import { collection, query, onSnapshot } from "firebase/firestore";
import "./index.css";

const DashboardOrderInfo = () => {
  //store
  const loggedInUserData = loggedInUser((state) => state.loggedInUserData);
  const [singleOrder, setSingleOrder] = useState<Array<object>>([]);

  useEffect(() => {
    getUserName();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //setting up data from firestore collection matching user id of auth
  const getUserName = async () => {
    try {
      const q = query(
        collection(db, "users", loggedInUserData.userId, "orders")
      );
      await onSnapshot(q, (querySnapshot) => {
        var orders: Array<object> = [];

        querySnapshot.forEach((doc) => {
          orders.push(doc.data());
        });

        setSingleOrder(orders);
      });
    } catch (e) {
      console.log("error :: :: ::", e);
    }
  };

  return (
    <div className="dashboard-info-wrapper recent-orders-wrapper">
      <>
        {singleOrder.length > 0 ? (
          <>
            {singleOrder.map((order) => (
              <div className="cart-product-item-parent-box">
                <div className="cart-product-item-child-box">
                  <div>
                    <p className="order-date">
                      {/* @ts-ignore */}
                      Ordered on : {order[0].date ? order[0].date : "Recently"}
                    </p>
                    <img
                      className="cart-product-item-child-img"
                      //@ts-ignore
                      src={order[0].imageUrl}
                      alt=""
                    />
                  </div>

                  <div className="cart-product-item-child-img-text remove-btn-wrapper">
                    <p className="cart-product-item-child-item">
                      {/* @ts-ignore */}
                      {order[0].name} : {order[0].size}
                    </p>
                  </div>
                </div>
                <div className="cart-product-item-child-box cart-product-item-child-img-text">
                  <p className="cart-product-item-title">Price</p>
                  <p className="cart-product-item-child-item">
                    {/* @ts-ignore */}
                    Total: {order[0].price}
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
