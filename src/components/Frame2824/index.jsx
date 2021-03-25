import React from "react";
import "./Frame2824.css";

function Frame2824(props) {
  const { phone, text158, className } = props;

  return (
    <div className={`frame-2824 ${className || ""}`}>
      <div className="phone3">{phone}</div>
      <div className="text-158 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text158}</div>
    </div>
  );
}

export default Frame2824;
