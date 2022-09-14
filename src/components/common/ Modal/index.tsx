import React from "react";
import "./index.css";

interface IModal {
  content: any;
}

const Modal = ({ content }: IModal) => {
  return (
    <div className="modal-wrapper-modal">
      <div className="modal-content">{content}</div>
    </div>
  );
};

export default Modal;
