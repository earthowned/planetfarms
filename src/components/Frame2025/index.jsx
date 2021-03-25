import React from "react";
import Frame1988 from "../Frame1988";
import Frame3471 from "../Frame3471";
import "./Frame2025.css";

function Frame2025(props) {
  const { frame1988Props, frame3471Props } = props;

  return (
    <div className="frame-2025">
      <Frame1988 className="frame-1988-2">{frame1988Props.children}</Frame1988>
      <Frame3471 className="frame-3471-1">{frame3471Props.children}</Frame3471>
    </div>
  );
}

export default Frame2025;
