import React from "react";
import Modal from "../../common/ Modal";
import { userLogin } from "../../../store";
import "./index.css";
import Login from "../../../pages/Login";

const AuthForm = () => {
  //store
  const hideAuthModal = userLogin((state: any) => state.hideAuthModal);

  const triggerModalClose = () => {
    hideAuthModal();
  };

  const content = (
    <div className="modal-wrapper ">
      <div className="modal auth-modal">
        <div className="modal-head auth-modal-text">
          <p className="modal-head-text ">Login to Proceed</p>
        </div>
        <div className="modal-body auth-body">
          <Login showUserTitle={false} />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Modal content={content} onClose={triggerModalClose} />
    </>
  );
};

export default AuthForm;
