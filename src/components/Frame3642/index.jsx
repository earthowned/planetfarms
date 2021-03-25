import React from "react";
import "./Frame3642.css";

function Frame3642(props) {
  const { am, pm, className } = props;

  return (
    <div className={`frame-3642 ${className || ""}`}>
      <div className="am ibmplexsans-semi-bold-quarter-spanish-white-16px">{am}</div>
      <div className="pm ibmplexsans-semi-bold-quarter-spanish-white-16px">{pm}</div>
    </div>
  );
}

export default Frame3642;
