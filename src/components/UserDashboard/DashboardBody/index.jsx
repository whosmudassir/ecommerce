import React from "react";
import DashboardInfo from "../DashboardInfo";
import DashboardOrderInfo from "../DashboardOrderInfo";
import "./index.css";

const DashboardBody = () => {
  return (
    <div className="dashboard-content-wrapper">
      {/* <DashboardInfo /> */}
      <DashboardOrderInfo />
    </div>
  );
};

export default DashboardBody;
