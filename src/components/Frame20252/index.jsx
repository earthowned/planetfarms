import React from "react";
import Frame19883 from "../Frame19883";
import "./Frame20252.css";

function Frame20252(props) {
  const { findNewPlace, frame19883Props } = props;

  return (
    <div className="frame-20252">
      <Frame19883 className="frame-1988-22">{frame19883Props.children}</Frame19883>
      <div className="frame-2058">
        <div className="find-new-place">{findNewPlace}</div>
        <div className="frame-20573"></div>
      </div>
    </div>
  );
}

export default Frame20252;
