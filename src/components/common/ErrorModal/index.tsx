import React, { useState } from "react";
import Modal from "../../common/ Modal";
import { triggerErrorModal } from "../../../store";
import "./index.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase-config";

const ErrorModal = () => {
  //store
  const hideErrorModal = triggerErrorModal(
    (state: any) => state.hideErrorModal
  );

  const triggerModalClose = () => {
    console.log("clicked");
    hideErrorModal();
  };

  const isErrorModalOpen = triggerErrorModal(
    (state: any) => state.isErrorModalOpen
  );

  const errorModalMessage = triggerErrorModal(
    (state) => state.errorModalMessage
  );

  const content = (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-head">
          <p className="modal-head-text">Something ai'nt right</p>
          <button className="icon-wrapper" onClick={triggerModalClose}>
            <i className="fa-solid fa-xmark close-btn form-close-mark"></i>
          </button>
        </div>
        <div className="modal-body">
          <p>
            {errorModalMessage.length > 0
              ? errorModalMessage
              : "Please try again"}
          </p>
        </div>
        <div className="modal-foot modal-login-footer">
          <button
            className="primary-btn btn-active"
            onClick={triggerModalClose}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {isErrorModalOpen ? (
        <Modal content={content} onClose={triggerModalClose} />
      ) : null}
    </>
  );
};

export default ErrorModal;
