import React from "react";
import "./Frame1974.css";

function Frame1974(props) {
  const { children, className } = props;

  return (
    <div className={`frame-19749 ${className || ""}`}>
      <div className="text-183">{children}</div>
    </div>
  );
}

export default Frame1974;
