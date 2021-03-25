import React from "react";
import "./Frame3026.css";

function Frame3026(props) {
  const { text795, percent, className } = props;

  return (
    <div className={`frame-3026 border-1px-onyx ${className || ""}`}>
      <p className="text-795 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text795}</p>
      <div className="percent2">{percent}</div>
    </div>
  );
}

export default Frame3026;
