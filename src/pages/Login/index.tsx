import React from "react";
import LoginForm from "../../components/Forms/LoginForm";
import RegisterForm from "../../components/Forms/RegisterForm";
import "./index.css";

import { userLogin } from "../../store";

const Login = () => {
  //store
  const isLoginModalOpen = userLogin((state: any) => state.isLoginModalOpen);
  const showLoginModal = userLogin((state: any) => state.showLoginModal);

  const isSignupModalOpen = userLogin((state: any) => state.isSignupModalOpen);
  const showSignupModal = userLogin((state: any) => state.showSignupModal);

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
          <i className={"fa-solid fa-user empty-screen"}></i>
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
