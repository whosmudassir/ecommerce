import React, { useState } from "react";
import LoginForm from "../../components/Forms/LoginForm";
import RegisterForm from "../../components/Forms/RegisterForm";
import "./index.css";

const Login = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const triggerLogin = () => {
    setIsLoginOpen(true);
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
      {isLoginOpen && <LoginForm />}
      {isSignupOpen && <RegisterForm />}
    </>
  );
};

export default Login;
