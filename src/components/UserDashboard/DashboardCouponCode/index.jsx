import React from "react";
import "./index.css";
import Tippy from "@tippyjs/react";

const DashboardCouponCode = () => {
  const copyToClipboard = () => {};

  return (
    <div>
      <div className="dashboard-single-coupon">
        <p className="dashboard-coupon-name">20% off on first purchase</p>
        <div className="dashboard-coupon-code-wrapper">
          <p className="dashboard-coupon-code">IMBROKEAF</p>
          <Tippy content="copy" arrow={true} className="tippy-copy">
            <button
              class="icon-wrapper"
              onClick={() => {
                copyToClipboard();
              }}
            >
              <i class="fa-solid fa-copy icon"></i>
            </button>
          </Tippy>
        </div>
      </div>
    </div>
  );
};

export default DashboardCouponCode;
