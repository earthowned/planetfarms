import React from "react";
import Chevronrightoutline1 from "../Chevronrightoutline1";
import "./Frame29572.css";

function Frame29572(props) {
  const { mostNewest, chevronrightoutline1Props } = props;

  return (
    <div className="frame-29572">
      <div className="frame-28132">
        <div className="most-newest valign-text-middle">{mostNewest}</div>
        <Chevronrightoutline1
          layer24Props={chevronrightoutline1Props.layer24Props}
          className="chevron-right-outline-1-5"
        />
      </div>
    </div>
  );
}

export default Frame29572;
