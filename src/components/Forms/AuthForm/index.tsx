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
  const hideAuthModal = userLogin((state: any) => state.hideAuthModal);

  const [formValue, setFormValue] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState("");

  const triggerModalClose = () => {
    hideAuthModal();
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
