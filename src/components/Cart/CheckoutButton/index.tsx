import React, { useState } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { userLogin } from "../../../store";
import AuthForm from "../../Forms/AuthForm";

const CheckoutButton = () => {
  //store
  const isAuthModalOpen = userLogin((state: any) => state.isAuthModalOpen);
  const showAuthModal = userLogin((state: any) => state.showAuthModal);

  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const authNavigation = () => {
    if (!user?.email) {
      showAuthModal();
    } else {
      navigate("/checkout");
    }
  };

  return (
    <>
      <div className="checkout-btn-wrapper">
        <div className="checkout-btn-item">
          {/* <Link to="/checkout"> */}
          <button onClick={authNavigation} className="primary-btn checkout-btn">
            Proceed to checkout{" "}
          </button>
          {/* </Link> */}
        </div>
      </div>
      {isAuthModalOpen && <AuthForm />}
    </>
  );
};

export default CheckoutButton;
