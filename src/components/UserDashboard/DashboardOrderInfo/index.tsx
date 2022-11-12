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

const DashboardOrderInfo = () => {
  //store
  const loggedInUserData = loggedInUser((state) => state.loggedInUserData);
  console.log(":::orders", loggedInUserData?.orders);

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
      // const usersRef = collection(db, "users", loggedInUserData.userId, "orders" );

      const q = query(
        collection(db, "users", loggedInUserData.userId, "orders")
      );
      const unsubscribe = await onSnapshot(q, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            console.log("New city: ", change.doc.data());
          }
          if (change.type === "modified") {
            console.log("Modified city: ", change.doc.data());
          }
          if (change.type === "removed") {
            console.log("Removed city: ", change.doc.data());
          }
        });
      });

      // const usersQuerySnapshot = await getDocs(usersRef);
      // usersQuerySnapshot.docs.filter((doc) => {
      // console.log('::::::::::::::::::: snap shot', doc)
      // });
    } catch (e) {
      console.log("error :: :: ::", e);
    }
  };

  console.log("::::", userOrders);

  // var response = {
  //   11791146: {m_serverQuery: "", m_key: 11791146}
  // }

  // var mKey = Object.keys(response).m_key
  // console.log(mKey);

  return (
    <div className="dashboard-info-wrapper">
      {/* {Object.keys(userOrders).map((orderId) => (
        <p>{orderId}</p>
      ))}

      {Object.values(userOrders).map((orders, ind) => {
        return Object.values(orders).map((or) => (
          <p style={{ backgroundColor: "red" }}>{or.name}</p>
        ));
      })} */}
    </div>
  );
};

export default DashboardOrderInfo;
