import React from "react";
import Footer from "../../components/Footer";
import LoginForm from "../../components/Forms/LoginForm";
import RegisterForm from "../../components/Forms/RegisterForm";
import Dashboard from "../Dashboard";
import "./index.css";
const User = () => {
  return (
    <>
      <div class="body-wrapper">
        <div className="user-content-wrapper">
          {false ? (
            <>
              <LoginForm />
              <RegisterForm />
            </>
          ) : (
            <>
              <Dashboard />
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default User;
