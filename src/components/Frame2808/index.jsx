import React from "react";
import Chevronrightoutline1 from "../Chevronrightoutline1";
import "./Frame2808.css";

function Frame2808(props) {
  const { byDate, chevronrightoutline1Props, className } = props;

  return (
    <div className={`frame-2808 border-1px-onyx ${className || ""}`}>
      <div className="by-date ibmplexsans-normal-quarter-spanish-white-16px">{byDate}</div>
      <Chevronrightoutline1
        layer24Props={chevronrightoutline1Props.layer24Props}
        className="chevron-right-outline-1-12"
      />
    </div>
  );
}

export default Frame2808;
