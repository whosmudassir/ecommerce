import React from "react";
import "./index.css";

interface IModal {
  heading: string;
  footer: any;
  content: any;
}

const Modal = ({ heading, content, footer }: IModal) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <div className="modal-head">
          <p>{heading} </p>
        </div>
        <div className="modal-body">{content}</div>
        <div className="modal-footer">{footer}</div>
      </div>
    </div>
  );
};

export default Modal;
