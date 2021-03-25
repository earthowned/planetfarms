import React from "react";
import "./Frame28242.css";

function Frame28242(props) {
  const { numbersOfVisits, number, className } = props;

  return (
    <div className={`frame-28243 ${className || ""}`}>
      <div className="numbers-of-visits">{numbersOfVisits}</div>
      <div className="number4 ibmplexsans-semi-bold-quarter-spanish-white-16px">{number}</div>
    </div>
  );
}

export default Frame28242;
