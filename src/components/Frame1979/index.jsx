import React from "react";
import "./Frame1979.css";

function Frame1979(props) {
  const { text17, text18, text19 } = props;

  return (
    <div className="frame-1979">
      <div className="text-17">{text17}</div>
      <div className="text-18 ibmplexsans-semi-bold-quarter-spanish-white-24px">{text18}</div>
      <p className="text-19 ibmplexsans-normal-quarter-spanish-white-16px">{text19}</p>
    </div>
  );
}

export default Frame1979;
