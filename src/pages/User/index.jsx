import React from "react";
import LoginForm from "../../components/Forms/LoginForm";
import RegisterForm from "../../components/Forms/RegisterForm";
import Dashboard from "../Dashboard";
import "./index.css";
const User = () => {
  return (
    <>
      <div class="body-wrapper">
        <div className="user-content-wrapper">
          {true ? (
            <div className="login-wrapper">
              <LoginForm />
              <RegisterForm />
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
