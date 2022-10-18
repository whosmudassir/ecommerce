import React, { useState } from "react";
import Modal from "../../common/ Modal";
import { userLogin } from "../../../store";
import "./index.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase-config";

const RegisterForm = () => {
  //store
  const hideSignupModal = userLogin((state: any) => state.hideSignupModal);

  const triggerModalClose = () => {
    hideSignupModal();
  };

  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const [formValue, setFormValue] = useState<any>(initialState);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const createUserInFirebase = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        formValue.email,
        formValue.password
      );
      triggerModalClose();
    } catch (e) {
      console.log(e);
      triggerModalClose();
    }
  };

  const content = (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-head">
          <p className="modal-head-text">Sign up</p>
          <button className="icon-wrapper" onClick={triggerModalClose}>
            <i className="fa-solid fa-xmark close-btn form-close-mark"></i>
          </button>
        </div>
        <div className="modal-body">
          <p className="modal-text">Name</p>
          <input
            className="outlined-input"
            type="text"
            value={formValue.name}
            name="name"
            autoComplete="cc-given-name"
            onChange={handleChange}
          />
          <p className="modal-text">Email</p>
          <input
            className="outlined-input"
            type="text"
            name="email"
            value={formValue.email}
            autoComplete="email"
            onChange={handleChange}
          />
          <p className="modal-text">Password</p>
          <input
            className="outlined-input"
            type="password"
            name="password"
            value={formValue.password}
            onChange={handleChange}
          />
        </div>
        <div className="modal-foot modal-login-footer">
          <button
            className="secondary-btn cancel-btn"
            onClick={triggerModalClose}
          >
            Cancel
          </button>
          <button
            className="primary-btn btn-active"
            onClick={createUserInFirebase}
          >
            Submit
          </button>
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

export default RegisterForm;
