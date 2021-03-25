import React from "react";
import Layer24 from "../Layer24";
import "./Chevronrightoutline1.css";

function Chevronrightoutline1(props) {
  const { layer24Props, className } = props;

  return (
    <div className={`chevron-right-outline-1 ${className || ""}`}>
      <Layer24 vector={layer24Props.vector} vector2={layer24Props.vector2} />
    </div>
  );
}

export default Chevronrightoutline1;
