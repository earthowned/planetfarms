import React from "react";
import Chevronrightoutline1 from "../Chevronrightoutline1";
import "./Frame28083.css";

function Frame28083(props) {
  const { byDate, chevronrightoutline1Props, className } = props;

  return (
    <div className={`frame-28083 border-1px-onyx ${className || ""}`}>
      <div className="by-date3 inter-medium-quarter-spanish-white-16px">{byDate}</div>
      <Chevronrightoutline1
        layer24Props={chevronrightoutline1Props.layer24Props}
        className="chevron-right-outline-1-14"
      />
    </div>
  );
}

export default Frame28083;
