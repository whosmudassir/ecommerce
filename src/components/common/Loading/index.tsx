import React from "react";
//@ts-ignore
import spinAnimation from "../../../assets/icons/spin-animation.svg";
import { isLoading } from "../../../store/index";

const Loading = () => {
  const isAppLoading = isLoading((state) => state.isAppLoading);

  return (
    <>
      {isAppLoading ? (
        <div className="body-wrapper">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "60vh",
            }}
          >
            <img src={spinAnimation} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Loading;
