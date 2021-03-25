import React from "react";
import "./Frame3470.css";

function Frame3470(props) {
  const { children, className } = props;

  return (
    <div className={`frame-3470 border-0-5px-white ${className || ""}`}>
      <div className="address">{children}</div>
    </div>
  );
}

export default Frame3470;
