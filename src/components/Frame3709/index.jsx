import React from "react";
import "./Frame3709.css";

function Frame3709(props) {
  const { spanText, spanText2, className } = props;

  return (
    <div className={`frame-3709 ${className || ""}`}>
      <div className="text-366">
        <span className="span010">{spanText}</span>
        <span className="span110">{spanText2}</span>
      </div>
    </div>
  );
}

export default Frame3709;
