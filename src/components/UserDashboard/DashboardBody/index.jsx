import React from "react";
import DashboardInfo from "../DashboardInfo";
import DashboardOrderInfo from "../DashboardOrderInfo";
import DashboardAddressInfo from "../DashboardAddressInfo";
import "./index.css";

const DashboardBody = () => {
  return (
    <div className="dashboard-content-wrapper">
      {/* <DashboardInfo /> */}
      {/* <DashboardOrderInfo /> */}
      <DashboardAddressInfo />
    </div>
  );
};

export default DashboardBody;
