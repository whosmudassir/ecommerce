import React, { useState } from "react";
import Modal from "../../common/ Modal";
import { userLogin, isLoading, triggerErrorModal } from "../../../store";
import "./index.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase-config";
import { collection, doc, addDoc, setDoc } from "firebase/firestore";

const RegisterForm = () => {
  //store
  const hideSignupModal = userLogin((state: any) => state.hideSignupModal);
  const showIsAppLoading = isLoading((state) => state.showIsAppLoading);
  const hideIsAppLoading = isLoading((state) => state.hideIsAppLoading);
  const showErrorModal = triggerErrorModal(
    (state: any) => state.showErrorModal
  );
  const setErrorModalMessage = triggerErrorModal(
    (state: any) => state.setErrorModalMessage
  );

  const triggerModalClose = () => {
    hideSignupModal();
  };

  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  //firestore db
  // const collectionRef = doc(db, "users");

  const [formValue, setFormValue] = useState<any>(initialState);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  // try {
  //   const docRef = await addDoc(collection(db, "users"), {
  //     first: "Ada",
  //     last: "Lovelace",
  //     born: 1815
  //   });
  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }

  const createUserInFirebase = async () => {
    showIsAppLoading();
    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        formValue.email,
        formValue.password
      );
      await setDoc(doc(db, "users", newUser.user.uid), {
        name: formValue.name,
        email: formValue.email,
        password: formValue.password,
        userId: newUser.user.uid,
      });
      triggerModalClose();
      hideIsAppLoading();
    } catch (e) {
      console.log(e);
      hideIsAppLoading();
      triggerModalClose();
      //@ts-ignore
      setErrorModalMessage(e.message);
      showErrorModal();
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
