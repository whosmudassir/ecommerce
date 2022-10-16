import React, { useState } from "react";
import Dashboard from "../Dashboard";
import Login from "../Login";
import "./index.css";
import { auth } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const User = () => {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  console.log("::::::user", user);

  return (
    <>
      <div className="body-wrapper">
        <div className="user-content-wrapper">
          {!user?.email ? (
            <div className="login-wrapper">
              <Login />
            </div>
          ) : (
            <>
              <Dashboard />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default User;
