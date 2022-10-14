import React from "react";
import "./index.css";

interface IModal {
  content: any;
  onClose: () => void;
}

const Modal = ({ content, onClose }: IModal) => {
  return (
    <>
      <div className="modal-wrapper-modal">
        <div className="modal-wrapper-modal" onClick={onClose}></div>
        <div className="modal-content">{content}</div>
      </div>
    </>
  );
};

export default Modal;
