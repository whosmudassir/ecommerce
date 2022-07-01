import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const DashboardInfo = () => {
  return (
    <div className="dashboard-info-wrapper">
      <p>
        Hello <span className="bold-text">Mudassir Khan </span>(not
        <span className="bold-text">Mudassir Khan</span>? Log out)
      </p>
      <p>
        From your account dashboard you can view your{" "}
        <Link to="/">recent orders</Link>, manage your{" "}
        <Link to="/">shipping and billing addresses</Link>, and{" "}
        <Link to="/">edit your password and account details.</Link>
      </p>
    </div>
  );
};

export default DashboardInfo;
