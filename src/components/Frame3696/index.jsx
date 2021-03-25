import React from "react";
import Component22 from "../Component22";
import "./Frame3696.css";

function Frame3696(props) {
  const { marketerSales, component22Props, className } = props;

  return (
    <div className={`frame-3696 ${className || ""}`}>
      <Component22
        vector={component22Props.vector}
        subtract={component22Props.subtract}
        vector2={component22Props.vector2}
      />
      <div className="marketer-sales ibmplexsans-semi-bold-quarter-spanish-white-16px">{marketerSales}</div>
    </div>
  );
}

export default Frame3696;
