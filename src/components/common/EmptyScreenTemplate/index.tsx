import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

interface IEmptyScreenTemplate {
  icon: string;
  headingText: string;
  bodyText: string;
}

const EmptyScreenTemplate = ({
  icon,
  headingText,
  bodyText,
}: IEmptyScreenTemplate) => {
  return (
    <>
      <div className="empty-screen-wrapper">
        <i className={`${icon} empty-screen`}></i>
        <p className="empty-screen-heading">{headingText}</p>
        <p className="empty-screen-body">{bodyText}</p>
        <div>
          <Link to="/shop">
            <button className="primary-btn empty-screen-btn">
              Return to shop
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EmptyScreenTemplate;
