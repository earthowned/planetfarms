import React from "react";
import Frame19882 from "../Frame19882";
import "./Frame2042.css";

function Frame2042(props) {
  const { frame19882Props, className } = props;

  return (
    <div className={`frame-2042 ${className || ""}`}>
      <Frame19882 className="frame-1988-32">{frame19882Props.children}</Frame19882>
    </div>
  );
}

export default Frame2042;
