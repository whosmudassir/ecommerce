import React from "react";
import LoginForm from "../../components/Forms/LoginForm";
import RegisterForm from "../../components/Forms/RegisterForm";
import "./index.css";

const Login = () => {
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
            <button className="primary-btn login-btn">Sign up</button>
          </div>
          <div>
            <button className="primary-btn login-btn">Login</button>
          </div>
        </div>
      </div>
      <LoginForm />
      <RegisterForm />
    </>
  );
};

export default Login;
