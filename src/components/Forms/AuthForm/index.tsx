import React, { useState } from "react";
import Modal from "../../common/ Modal";
import { userLogin } from "../../../store";
import "./index.css";
import { auth } from "../../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import Login from "../../../pages/Login";

const AuthForm = () => {
  const initialState = {
    email: "",
    password: "",
  };

  //store
  const hideLoginModal = userLogin((state: any) => state.hideLoginModal);

  const [formValue, setFormValue] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState("");

  const triggerModalClose = () => {
    hideLoginModal();
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        formValue.email,
        formValue.password
      );
      triggerModalClose();
    } catch (e) {
      console.log(e);
      //@ts-ignore
      setErrorMessage(e.code);
    }
  };

  const content = (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-head">
          <p className="modal-head-text">Login</p>
          <button className="icon-wrapper" onClick={triggerModalClose}>
            <i className="fa-solid fa-xmark close-btn form-close-mark"></i>
          </button>
        </div>
        <div className="modal-body">
          <Login />
        </div>
        <div className="modal-foot modal-login-footer"></div>
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
