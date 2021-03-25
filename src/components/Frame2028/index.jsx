import React from "react";
import Frame1988 from "../Frame1988";
import "./Frame2028.css";

function Frame2028(props) {
  const { frame1988Props, className } = props;

  return (
    <div className={`frame-2028 ${className || ""}`}>
      <Frame1988>{frame1988Props.children}</Frame1988>
    </div>
  );
}

export default Frame2028;
