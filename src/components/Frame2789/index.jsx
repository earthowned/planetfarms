import React from "react";
import "./Frame2789.css";

function Frame2789(props) {
  const { children, className } = props;

  return (
    <div className={`frame-2789 ${className || ""}`}>
      <div className="date2">{children}</div>
    </div>
  );
}

export default Frame2789;
