import React from "react";
import Modal from "../../common/ Modal";

const RegisterForm = () => {
  const content = (
    <div>
      <p>form</p>
    </div>
  );

  const footer = (
    <div>
      <button>Sign up</button>
      <button>Cancel</button>
    </div>
  );

  return (
    <>
      <Modal heading={"Sign up"} content={content} footer={footer} />
    </>
  );
};

export default RegisterForm;
