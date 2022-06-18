import React from "react";
import DashboardBody from "../../components/DashboardBody";
import DashboardSideBar from "../../components/DashboardSideBar";
import "./index.css";

const Dashboard = () => {
  return (
    <div>
      <div>
        <p className="dashboard-heading">My account</p>
      </div>
      <div className="dashboard-wrapper">
        <div className="dashboard-sidebar-wrapper">
          {" "}
          <DashboardSideBar />{" "}
        </div>
        <div className="dashboard-body-wrapper">
          {" "}
          <DashboardBody />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
