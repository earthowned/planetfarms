import React from "react";
import "./Layer24.css";

function Layer24(props) {
  const { vector, vector2, className } = props;

  return (
    <div className={`layer-217 ${className || ""}`}>
      <div className="chevron-right">
        <img className="vector-211" src={vector} />
        <img className="vector-36" src={vector2} />
      </div>
    </div>
  );
}

export default Layer24;
