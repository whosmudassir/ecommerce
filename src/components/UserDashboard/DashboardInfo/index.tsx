import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { loggedInUser } from "../../../store";

const DashboardInfo = () => {
  //store
  const setLoggedInUserData = loggedInUser(
    (state) => state.setLoggedInUserData
  );

  const [user, setUser] = useState<any>({});
  const [userName, setUserName] = useState<any>("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  //setting up data from firestore collection matching user id of auth
  const getUserName = async () => {
    try {
      const usersRef = collection(db, "users");
      const usersQuerySnapshot = await getDocs(usersRef);
      usersQuerySnapshot.docs.filter((doc) => {
        if (doc.id === user.uid) {
          setUserName(doc.data().name);
          setLoggedInUserData(doc.data());
        }
        return null;
      });
    } catch (e) {
      console.log("error :: :: ::", e);
    }
  };

  useEffect(() => {
    getUserName();
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="dashboard-info-wrapper">
      <p>
        Hello <span className="bold-text"> {userName} </span>
      </p>
      <p>
        From your account dashboard you can view your{" "}
        <Link to="/">recent orders</Link>, manage your{" "}
        <Link to="/">shipping and billing addresses</Link>, and{" "}
        <Link to="/">edit your password and account details.</Link>
      </p>
    </div>
  );
};

export default DashboardInfo;
