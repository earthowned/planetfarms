import React from "react";
import Frame19885 from "../Frame19885";
import "./Frame2046.css";

function Frame2046(props) {
  const { frame19885Props, className } = props;

  return (
    <div className={`frame-20463 ${className || ""}`}>
      <Frame19885 className="frame-1988-53">{frame19885Props.children}</Frame19885>
    </div>
  );
}

export default Frame2046;
