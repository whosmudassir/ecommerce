import React from "react";
import DashboardSideBar from "../../components/DashboardSideBar";
import "./index.css";

const Dashboard = () => {
  return (
    <div>
      <div>
        <p className="dashboard-heading">My account</p>
      </div>
      <div className="dashboard-wrapper">
        <DashboardSideBar />
      </div>
    </div>
  );
};

export default Dashboard;
