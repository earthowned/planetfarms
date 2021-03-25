import React from "react";
import Frame2847 from "../Frame2847";
import Frame1976 from "../Frame1976";
import Frame1975 from "../Frame1975";
import "./Frame1944.css";

function Frame1944(props) {
  const { frame2847Props, frame1976Props, frame1975Props, frame19762Props } = props;

  return (
    <div className="frame-19444">
      <Frame2847 frame1953Props={frame2847Props.frame1953Props} />
      <Frame1976 className="frame-19742">{frame1976Props.children}</Frame1976>
      <Frame1975>{frame1975Props.children}</Frame1975>
      <Frame1976>{frame19762Props.children}</Frame1976>
      <div className="frame-19773"></div>
      <div className="frame-19783"></div>
    </div>
  );
}

export default Frame1944;
