import React from "react";
import Frame19882 from "../Frame19882";
import "./Frame2039.css";

function Frame2039(props) {
  const { x0230PmCallWi, x0300PmFindAn, x5Events, frame19882Props } = props;

  return (
    <div className="frame-2039">
      <Frame19882 className="frame-1988-8">{frame19882Props.children}</Frame19882>
      <div className="frame-20622">
        <div className="frame-34732">
          <div className="frame-34712">
            <div className="frame-20"></div>
            <div className="x0pm-">{x0230PmCallWi}</div>
          </div>
          <div className="frame-34722">
            <div className="frame-20"></div>
            <div className="x0pm-">{x0300PmFindAn}</div>
          </div>
        </div>
        <div className="x5-events">{x5Events}</div>
      </div>
    </div>
  );
}

export default Frame2039;
