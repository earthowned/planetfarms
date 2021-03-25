import React from "react";
import Chevronrightoutline2 from "../Chevronrightoutline2";
import "./Frame20232.css";

function Frame20232(props) {
  const { chevronrightoutline2Props, chevronrightoutline22Props, className } = props;

  return (
    <div className={`frame-20232 ${className || ""}`}>
      <Chevronrightoutline2 vector={chevronrightoutline2Props.vector} vector2={chevronrightoutline2Props.vector2} />
      <Chevronrightoutline2
        vector={chevronrightoutline22Props.vector}
        vector2={chevronrightoutline22Props.vector2}
        className="chevron-right-outline-110"
      />
    </div>
  );
}

export default Frame20232;
