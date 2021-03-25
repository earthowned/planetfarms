import React from "react";
import Frame19884 from "../Frame19884";
import "./Frame20352.css";

function Frame20352(props) {
  const { frame19884Props, className } = props;

  return (
    <div className={`frame-20352 ${className || ""}`}>
      <Frame19884>{frame19884Props.children}</Frame19884>
    </div>
  );
}

export default Frame20352;
