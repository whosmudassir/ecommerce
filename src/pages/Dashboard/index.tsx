import React from "react";
import DashboardBody from "../../components/UserDashboard/DashboardBody";
import DashboardCouponInfo from "../../components/UserDashboard/DashboardCouponInfo";
import DashboardSideBar from "../../components/UserDashboard/DashboardSideBar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./index.css";

const Dashboard = () => {
  // let { path, url } = RouteMatch();
  return (
    <>
      <div>
        <div>
          <p className="dashboard-heading">My account</p>
        </div>
        <div className="dashboard-wrapper">
          <div className="dashboard-sidebar-wrapper">
            <DashboardSideBar />
            <Outlet />
          </div>
          <div className="dashboard-body-wrapper">
            {/* <BrowserRouter>
              <Routes>
          
                <Route path="/dashboard" element={<DashboardBody />} />
                <Route path="/couponcode" element={<DashboardCouponInfo />} />
              </Routes>
            </BrowserRouter> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
