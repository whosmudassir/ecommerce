import React from "react";
import Modal from "../../common/ Modal";
import { userLogin } from "../../../store";
import "./index.css";
const LoginForm = () => {
  //store
  const hideLoginModal = userLogin((state) => state.hideLoginModal);

  const triggerModalClose = () => {
    hideLoginModal();
  };

  const content = (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-head">
          <p className="modal-head-text">Login</p>
          <button className="icon-wrapper" onClick={triggerModalClose}>
            <i className="fa-solid fa-xmark close-btn"></i>
          </button>
        </div>
        <div className="modal-body">
          <p className="modal-text">Email</p>
          <input className="outlined-input" type="text" />
          <p className="modal-text">Password</p>
          <input className="outlined-input" type="password" />
        </div>
        <div className="modal-foot">
          <button
            className="secondary-btn cancel-btn"
            onClick={triggerModalClose}
          >
            Cancel
          </button>
          <button className="primary-btn">Continue</button>
        </div>
      </div>
    </div>
  );

  const footer = (
    <div>
      <button onClick={triggerModalClose}>ok</button>
    </div>
  );

  return (
    <>
      <Modal content={content} />
    </>
  );
};

export default LoginForm;
