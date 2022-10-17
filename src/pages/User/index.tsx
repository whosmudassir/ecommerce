import React, { useState } from "react";
import Dashboard from "../Dashboard";
import Login from "../Login";
import "./index.css";
import { auth } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const User = () => {
  const [user, setUser] = useState<any>({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

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
