import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const EmptyScreenTemplate = ({ icon, headingText, bodyText }) => {
  return (
    <>
      <div className="empty-screen-wrapper">
        <i class={`${icon} empty-screen`}></i>
        <p className="empty-screen-heading">{headingText}</p>
        <p className="empty-screen-body">{bodyText}</p>
        <div>
          <Link to="/shop">
            <button class="primary-btn empty-screen-btn">Return to shop</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EmptyScreenTemplate;
