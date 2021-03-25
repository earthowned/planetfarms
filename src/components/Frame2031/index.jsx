import React from "react";
import Frame1988 from "../Frame1988";
import "./Frame2031.css";

function Frame2031(props) {
  const { frame1988Props } = props;

  return (
    <div className="frame-2031">
      <Frame1988 className="frame-1988-3">{frame1988Props.children}</Frame1988>
    </div>
  );
}

export default Frame2031;
