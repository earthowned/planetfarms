import React from "react";
import Frame19884 from "../Frame19884";
import "./Frame20302.css";

function Frame20302(props) {
  const { callWithNewFar, x0300PmFindAn, address, frame19884Props } = props;

  return (
    <div className="frame-20302">
      <Frame19884 className="frame-1988-52">{frame19884Props.children}</Frame19884>
      <div className="frame-2063">
        <div className="frame-2059">
          <div className="call-with-new-far">{callWithNewFar}</div>
          <div className="frame-2057-1"></div>
        </div>
        <div className="frame-2060">
          <div className="x0300-pm-find-an2">{x0300PmFindAn}</div>
          <div className="frame-2057-1"></div>
        </div>
        <div className="address12">{address}</div>
      </div>
    </div>
  );
}

export default Frame20302;
