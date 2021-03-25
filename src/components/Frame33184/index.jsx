import React from "react";
import Filetextoutline from "../Filetextoutline";
import "./Frame33184.css";

function Frame33184(props) {
  const { text118, filetextoutlineProps } = props;

  return (
    <div className="frame-33184">
      <Filetextoutline
        vector={filetextoutlineProps.vector}
        vector2={filetextoutlineProps.vector2}
        vector3={filetextoutlineProps.vector3}
        vector4={filetextoutlineProps.vector4}
      />
      <div className="text-118 valign-text-middle">{text118}</div>
    </div>
  );
}

export default Frame33184;
