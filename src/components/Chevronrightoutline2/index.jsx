import React from "react";
import "./Chevronrightoutline2.css";

function Chevronrightoutline2(props) {
  const { vector, vector2, className } = props;

  return (
    <div className={`chevron-right-outline-2 ${className || ""}`}>
      <div className="layer-219">
        <div className="chevron-right2">
          <img className="vector10" src={vector} />
          <img className="vector-119" src={vector2} />
        </div>
      </div>
    </div>
  );
}

export default Chevronrightoutline2;
