import React from "react";
import LoginForm from "../../components/Forms/LoginForm";
import RegisterForm from "../../components/Forms/RegisterForm";
import "./index.css";

import { userLogin } from "../../store";

const Login = () => {
  //store
  const isLoginModalOpen = userLogin((state) => state.isLoginModalOpen);
  const showLoginModal = userLogin((state) => state.showLoginModal);

  const isSignupModalOpen = userLogin((state) => state.isSignupModalOpen);
  const showSignupModal = userLogin((state) => state.showSignupModal);

  const triggerLogin = () => {
    showLoginModal();
  };

  const triggerSignup = () => {
    showSignupModal();
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
      {isSignupModalOpen && <RegisterForm />}
    </>
  );
};

export default Login;
