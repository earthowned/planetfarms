import React from "react";
import "./Frame2820.css";

function Frame2820(props) {
  const { dateOfBirhday, phone, className } = props;

  return (
    <div className={`frame-2820 ${className || ""}`}>
      <div className="date-of-birhday">{dateOfBirhday}</div>
      <div className="phone2 ibmplexsans-semi-bold-quarter-spanish-white-16px">{phone}</div>
    </div>
  );
}

export default Frame2820;
