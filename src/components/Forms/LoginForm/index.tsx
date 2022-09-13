import React from "react";
import Modal from "../../common/ Modal";
import { userLogin } from "../../../store";

const LoginForm = () => {
  //store
  const hideLoginModal = userLogin((state) => state.hideLoginModal);

  const triggerModalClose = () => {
    hideLoginModal();
  };

  const content = (
    <div>
      <p>form</p>
    </div>
  );

  const footer = (
    <div>
      <button onClick={triggerModalClose}>ok</button>
    </div>
  );

  return (
    <>
      <Modal heading={"Log in"} content={content} footer={footer} />
    </>
  );
};

export default LoginForm;
