import React from "react";
import "./Frame9.css";

function Frame9(props) {
  const { birthday, phone, className } = props;

  return (
    <div className={`frame-97 ${className || ""}`}>
      <div className="birthday">{birthday}</div>
      <div className="phone ibmplexsans-normal-quarter-spanish-white-16px">{phone}</div>
    </div>
  );
}

export default Frame9;
