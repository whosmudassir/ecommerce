import React from "react";
import "./index.css";
import Tippy from "@tippyjs/react";

import "tippy.js/dist/tippy.css";
const DashboardCouponCode = () => {
  const copyToClipboard = (couponCode: any) => {
    navigator.clipboard.writeText(couponCode);
  };

  return (
    <div className="dashboard-info-wrapper">
      <div className="dashboard-single-coupon">
        <p className="dashboard-coupon-name">20% off on first purchase</p>
        <div className="dashboard-coupon-code-wrapper">
          <p className="dashboard-coupon-code">IMBROKEAF</p>
          <div>
            <button
              className="icon-wrapper"
              onClick={() => {
                copyToClipboard("IMBROKEAF");
              }}
            >
              <Tippy content={"copy"} className="tippy-copy">
                <i className="fa-solid fa-copy icon"></i>
              </Tippy>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCouponCode;
