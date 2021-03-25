import React from "react";
import Frame19883 from "../Frame19883";
import "./Frame20282.css";

function Frame20282(props) {
  const { frame19883Props, className } = props;

  return (
    <div className={`frame-20282 ${className || ""}`}>
      <Frame19883>{frame19883Props.children}</Frame19883>
    </div>
  );
}

export default Frame20282;
