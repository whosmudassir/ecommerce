import React from "react";
import Footer from "../../components/Footer";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import Dashboard from "../Dashboard";

const User = () => {
  return (
    <>
      <div class="body-wrapper">
        <div className="cart-wrapper">
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
