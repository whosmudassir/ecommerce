import React from "react";
import Modal from "../../common/ Modal";
import { userLogin } from "../../../store";

const RegisterForm = () => {
  //store
  const hideSignupModal = userLogin((state) => state.hideSignupModal);

  const triggerSignupModalClose = () => {
    hideSignupModal();
  };
  const content = (
    <div>
      <p>form</p>
    </div>
  );

  const footer = (
    <div>
      <button>Sign up</button>
      <button onClick={triggerSignupModalClose}>Cancel</button>
    </div>
  );

  return (
    <>
      <Modal heading={"Sign up"} content={content} footer={footer} />
    </>
  );
};

export default RegisterForm;
