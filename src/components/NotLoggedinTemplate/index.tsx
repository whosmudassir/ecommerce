import React from "react";
import EmptyScreenTemplate from "../common/EmptyScreenTemplate";
import "./index.css";

interface INotLoggedinTemplate {
  screenName: string;
}

const NotLoggedinTemplate = ({ screenName }: INotLoggedinTemplate) => {
  return (
    <>
      <EmptyScreenTemplate
        icon={"fa-solid fa-user-large-slash"}
        headingText={"You are not logged in"}
        bodyText={`Please login to view your ${screenName}`}
      />
    </>
  );
};

export default NotLoggedinTemplate;
