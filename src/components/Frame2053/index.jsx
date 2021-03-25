import React from "react";
import "./Frame2053.css";

function Frame2053(props) {
  const { children, className } = props;

  return (
    <div className={`frame-2053 ${className || ""}`}>
      <div className="frame-19883">
        <div className="dec-1 ibmplexsans-semi-bold-quarter-spanish-white-16px">{children}</div>
      </div>
    </div>
  );
}

export default Frame2053;
