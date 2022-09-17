import React from "react";
import Modal from "../../common/ Modal";
import { userLogin } from "../../../store";
import "./index.css";

const RegisterForm = () => {
  //store
  const hideSignupModal = userLogin((state) => state.hideSignupModal);

  const triggerSignupModalClose = () => {
    hideSignupModal();
  };
  const content = (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-head">
          <p className="modal-head-text">Sign up</p>
          <button className="icon-wrapper" onClick={triggerSignupModalClose}>
            <i className="fa-solid fa-xmark close-btn"></i>
          </button>
        </div>
        <div className="modal-body">
          <p className="modal-text">Name</p>
          <input className="outlined-input" type="text" />
          <p className="modal-text">Email</p>
          <input className="outlined-input" type="text" />
          <p className="modal-text">Password</p>
          <input className="outlined-input" type="password" />
        </div>
        <div className="modal-foot">
          <button
            className="secondary-btn cancel-btn"
            onClick={triggerSignupModalClose}
          >
            Cancel
          </button>
          <button className="primary-btn">Submit</button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Modal content={content} />
    </>
  );
};

export default RegisterForm;
