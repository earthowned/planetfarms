import React from "react";
import "./Frame2303.css";

function Frame2303(props) {
  const { vector, vector2, className } = props;

  return (
    <div className={`frame-2303 ${className || ""}`}>
      <div className="chevrons-right-1">
        <img className="vector-183" src={vector} />
        <img className="vector-193" src={vector2} />
      </div>
    </div>
  );
}

export default Frame2303;
