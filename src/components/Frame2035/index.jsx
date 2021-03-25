import React from "react";
import Frame19882 from "../Frame19882";
import "./Frame2035.css";

function Frame2035(props) {
  const { frame19882Props, className } = props;

  return (
    <div className={`frame-2035 ${className || ""}`}>
      <Frame19882>{frame19882Props.children}</Frame19882>
    </div>
  );
}

export default Frame2035;
