import React from "react";
import "./Frame19882.css";

function Frame19882(props) {
  const { children, className } = props;

  return (
    <div className={`frame-1988-4 ${className || ""}`}>
      <div className="nov-13 ibmplexsans-semi-bold-quarter-spanish-white-16px">{children}</div>
    </div>
  );
}

export default Frame19882;
