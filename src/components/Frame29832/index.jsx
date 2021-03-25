import React from "react";
import Filetextoutline from "../Filetextoutline";
import "./Frame29832.css";

function Frame29832(props) {
  const { materials, filetextoutlineProps } = props;

  return (
    <div className="frame-29836">
      <Filetextoutline
        vector={filetextoutlineProps.vector}
        vector2={filetextoutlineProps.vector2}
        vector3={filetextoutlineProps.vector3}
        vector4={filetextoutlineProps.vector4}
        className="file-text-outline2"
      />
      <div className="materials ibmplexsans-semi-bold-quarter-spanish-white-16px">{materials}</div>
    </div>
  );
}

export default Frame29832;
