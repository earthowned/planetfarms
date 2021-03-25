import React from "react";
import "./Frame1948.css";

function Frame1948(props) {
  const { graduationCap, text42, className } = props;

  return (
    <div className={`frame-19482 ${className || ""}`}>
      <div className="frame-1981">
        <div className="graduation-cap-1">
          <img className="graduation-cap" src={graduationCap} />
        </div>
        <div className="text-42 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text42}</div>
      </div>
    </div>
  );
}

export default Frame1948;
