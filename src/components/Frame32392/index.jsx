import React from "react";
import "./Frame32392.css";

function Frame32392(props) {
  const { name, text604, className } = props;

  return (
    <div className={`frame-32392 ${className || ""}`}>
      <div className="frame-3240">
        <div className="name6 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-24px">{name}</div>
      </div>
      <p className="text-604 valign-text-middle ibmplexsans-normal-quarter-spanish-white-16px">{text604}</p>
    </div>
  );
}

export default Frame32392;
