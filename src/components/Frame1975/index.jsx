import React from "react";
import "./Frame1975.css";

function Frame1975(props) {
  const { children, className } = props;

  return (
    <div className={`frame-1975 ${className || ""}`}>
      <div className="text-39 ibmplexsans-semi-bold-quarter-spanish-white-16px">{children}</div>
    </div>
  );
}

export default Frame1975;
