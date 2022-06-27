import React from "react";
import Dashboard from "../Dashboard";
import Login from "../Login";
import "./index.css";
const User = () => {
  return (
    <>
      <div class="body-wrapper">
        <div className="user-content-wrapper">
          {true ? (
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
