import React, { useEffect } from "react";
import DashboardSideBar from "../../components/UserDashboard/DashboardSideBar";
import { useNavigate, Outlet } from "react-router-dom";
import "./index.css";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/user/dashboard");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div>
        <div>
          <p className="dashboard-heading">My account</p>
        </div>
        <div className="dashboard-wrapper">
          <DashboardSideBar />
          <Outlet />

          <div className="dashboard-body-wrapper"></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
