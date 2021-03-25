import React from "react";
import Layer23 from "../Layer23";
import "./Closeoutline1.css";

function Closeoutline1(props) {
  const { layer23Props, className } = props;

  return (
    <div className={`close-outline-12 ${className || ""}`}>
      <Layer23 closeProps={layer23Props.closeProps} />
    </div>
  );
}

export default Closeoutline1;
