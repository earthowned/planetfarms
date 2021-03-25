import React from "react";
import "./Frame28232.css";

function Frame28232(props) {
  const { lastLogin, phone, className } = props;

  return (
    <div className={`frame-28233 ${className || ""}`}>
      <div className="last-login">{lastLogin}</div>
      <div className="phone4 ibmplexsans-semi-bold-quarter-spanish-white-16px">{phone}</div>
    </div>
  );
}

export default Frame28232;
