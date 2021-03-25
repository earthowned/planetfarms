import React from "react";
import "./Frame1965.css";

function Frame1965(props) {
  const { children, className } = props;

  return (
    <div className={`frame-1965 ${className || ""}`}>
      <div className="frame-6511 border-1px-onyx">
        <p className="text-119 ibmplexsans-normal-quarter-spanish-white-16px">{children}</p>
      </div>
    </div>
  );
}

export default Frame1965;
