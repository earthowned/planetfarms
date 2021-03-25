import React from "react";
import "./Frame1988.css";

function Frame1988(props) {
  const { children, className } = props;

  return (
    <div className={`frame-1988 ${className || ""}`}>
      <div className="nov-6 ibmplexsans-semi-bold-quarter-spanish-white-16px">{children}</div>
    </div>
  );
}

export default Frame1988;
