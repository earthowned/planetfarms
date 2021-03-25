import React from "react";
import Frame19882 from "../Frame19882";
import "./Frame2051.css";

function Frame2051(props) {
  const { frame19882Props } = props;

  return (
    <div className="frame-2051">
      <Frame19882 className="frame-1988-7">{frame19882Props.children}</Frame19882>
    </div>
  );
}

export default Frame2051;
