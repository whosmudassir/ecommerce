import React from "react";
import LoginForm from "../../components/Forms/LoginForm";
import RegisterForm from "../../components/Forms/RegisterForm";
import "./index.css";
import { auth, db } from "../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  isLoading,
  userLogin,
  triggerErrorModal,
  loggedInUser,
} from "../../store";
import { getDocs, collection } from "firebase/firestore";

interface ILogin {
  showUserTitle?: boolean;
}

const Login = ({ showUserTitle }: ILogin) => {
  //store
  const isLoginModalOpen = userLogin((state: any) => state.isLoginModalOpen);
  const showLoginModal = userLogin((state: any) => state.showLoginModal);
  const showIsAppLoading = isLoading((state) => state.showIsAppLoading);
  const hideIsAppLoading = isLoading((state) => state.hideIsAppLoading);
  const isSignupModalOpen = userLogin((state: any) => state.isSignupModalOpen);
  const showSignupModal = userLogin((state: any) => state.showSignupModal);
  const hideAuthModal = userLogin((state: any) => state.hideAuthModal);
  const setLoggedInUserData = loggedInUser(
    (state: any) => state.setLoggedInUserData
  );

  const showErrorModal = triggerErrorModal(
    (state: any) => state.showErrorModal
  );
  const setErrorModalMessage = triggerErrorModal(
    (state: any) => state.setErrorModalMessage
  );

  const triggerLogin = () => {
    showLoginModal();
  };

  const triggerSignup = () => {
    showSignupModal();
  };

  //firestore
  const collectionRef = collection(db, "users");

  const setUpLoggedInUserData = () => {};

  //login as default user
  const loginUser = async () => {
    try {
      showIsAppLoading();
      hideAuthModal();
      await signInWithEmailAndPassword(auth, "default@gmail.com", "123456");
      hideIsAppLoading();
    } catch (e) {
      hideIsAppLoading();
      //@ts-ignore
      setErrorModalMessage(e.message);
      showErrorModal();
    }
  };

  const userTitle = (
    <div>
      <p className="dashboard-heading">My account</p>
    </div>
  );

  return (
    <>
      <div>
        {showUserTitle && userTitle}
        <div className="login-btn-wrapper">
          <i className={"fa-solid fa-user empty-screen"}></i>
          <div>
            <button className="primary-btn login-btn" onClick={loginUser}>
              Login as guest
            </button>
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

      {isSignupModalOpen && <RegisterForm />}
      {isLoginModalOpen && <LoginForm />}
    </>
  );
};

export default Login;
