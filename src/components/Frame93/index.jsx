import React from "react";
import "./Frame93.css";

function Frame93(props) {
  const { lastName, ugrymov, className } = props;

  return (
    <div className={`frame-99 ${className || ""}`}>
      <div className="last-name">{lastName}</div>
      <div className="ugrymov ibmplexsans-normal-quarter-spanish-white-16px">{ugrymov}</div>
    </div>
  );
}

export default Frame93;
