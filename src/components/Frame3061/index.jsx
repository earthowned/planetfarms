import React from "react";
import "./Frame3061.css";

function Frame3061(props) {
  const { frame3061, text245, className } = props;

  return (
    <div className={`frame-3061 border-class-1 ${className || ""}`}>
      <img className="frame-3061-1" src={frame3061} />
      <p className="text-245 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{text245}</p>
    </div>
  );
}

export default Frame3061;
