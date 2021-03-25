import React from "react";
import Frame19884 from "../Frame19884";
import "./Frame20392.css";

function Frame20392(props) {
  const { frame19884Props, className } = props;

  return (
    <div className={`frame-20392 ${className || ""}`}>
      <Frame19884 className="frame-1988-33">{frame19884Props.children}</Frame19884>
    </div>
  );
}

export default Frame20392;
