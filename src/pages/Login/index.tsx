import React, { useState } from "react";
import LoginForm from "../../components/Forms/LoginForm";
import RegisterForm from "../../components/Forms/RegisterForm";
import "./index.css";

import { userLogin } from "../../store";

const Login = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  //store
  const isLoginModalOpen = userLogin((state) => state.isLoginModalOpen);
  const showLoginModal = userLogin((state) => state.showLoginModal);

  const triggerLogin = () => {
    showLoginModal();
  };

  const triggerSignup = () => {
    setIsSignupOpen(true);
  };

  return (
    <>
      <div>
        <div>
          <p className="dashboard-heading">My account</p>
        </div>
        <div className="login-btn-wrapper">
          <div>
            <button className="primary-btn login-btn">Login as guest</button>
          </div>{" "}
          <div>
            <button className="primary-btn login-btn" onClick={triggerSignup}>
              Sign up
            </button>
          </div>
          <div>
            <button className="primary-btn login-btn" onClick={triggerLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
      {isLoginModalOpen && <LoginForm />}
      {isSignupOpen && <RegisterForm />}
    </>
  );
};

export default Login;
