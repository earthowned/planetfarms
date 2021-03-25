import React from "react";
import Frame2847 from "../Frame2847";
import Frame1974 from "../Frame1974";
import Frame19752 from "../Frame19752";
import "./Frame19442.css";

function Frame19442(props) {
  const { frame2847Props, frame1974Props, frame19752Props, frame19742Props, className } = props;

  return (
    <div className={`frame-19448 ${className || ""}`}>
      <Frame2847 frame1953Props={frame2847Props.frame1953Props} className="frame-28474" />
      <Frame1974>{frame1974Props.children}</Frame1974>
      <Frame19752>{frame19752Props.children}</Frame19752>
      <Frame1974 className="frame-19764">{frame19742Props.children}</Frame1974>
      <div className="frame-19777"></div>
      <div className="frame-19787"></div>
    </div>
  );
}

export default Frame19442;
