import React from "react";
import Frame19885 from "../Frame19885";
import "./Frame20422.css";

function Frame20422(props) {
  const { frame19885Props, className } = props;

  return (
    <div className={`frame-20422 ${className || ""}`}>
      <Frame19885>{frame19885Props.children}</Frame19885>
    </div>
  );
}

export default Frame20422;
