import React from "react";
import Chevronrightoutline1 from "../Chevronrightoutline1";
import "./Frame28082.css";

function Frame28082(props) {
  const { byDate, chevronrightoutline1Props, className } = props;

  return (
    <div className={`frame-28082 border-1px-onyx ${className || ""}`}>
      <div className="by-date2 ibmplexsans-semi-bold-quarter-spanish-white-16px">{byDate}</div>
      <Chevronrightoutline1
        layer24Props={chevronrightoutline1Props.layer24Props}
        className="chevron-right-outline-1-13"
      />
    </div>
  );
}

export default Frame28082;
