import React from "react";
import "./Frame1976.css";

function Frame1976(props) {
  const { children, className } = props;

  return (
    <div className={`frame-1976 ${className || ""}`}>
      <div className="text-40 ibmplexsans-semi-bold-quarter-spanish-white-16px">{children}</div>
    </div>
  );
}

export default Frame1976;
