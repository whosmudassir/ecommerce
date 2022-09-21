import React, { useState } from "react";
import Modal from "../../common/ Modal";
import { userLogin } from "../../../store";
import "./index.css";

const RegisterForm = () => {
  //store
  const hideSignupModal = userLogin((state: any) => state.hideSignupModal);

  const triggerSignupModalClose = () => {
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
