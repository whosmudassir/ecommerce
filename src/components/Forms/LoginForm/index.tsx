import React from "react";
import Modal from "../../common/ Modal";

const LoginForm = () => {
  const content = (
    <div>
      <p>form</p>
    </div>
  );

  const footer = (
    <div>
      <button>ok</button>
    </div>
  );

  return (
    <>
      <Modal heading={"Log in"} content={content} footer={footer} />
    </>
  );
};

export default LoginForm;
