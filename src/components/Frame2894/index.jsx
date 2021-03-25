import React from "react";
import "./Frame2894.css";

function Frame2894(props) {
  const { children, className } = props;

  return (
    <div className={`frame-2894 ${className || ""}`}>
      <div className="mon">{children}</div>
    </div>
  );
}

export default Frame2894;
