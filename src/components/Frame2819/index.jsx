import React from "react";
import "./Frame2819.css";

function Frame2819(props) {
  const { lastName, ugryumov, className } = props;

  return (
    <div className={`frame-2819 ${className || ""}`}>
      <div className="last-name2">{lastName}</div>
      <div className="ugryumov ibmplexsans-semi-bold-quarter-spanish-white-16px">{ugryumov}</div>
    </div>
  );
}

export default Frame2819;
