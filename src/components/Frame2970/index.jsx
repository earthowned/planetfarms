import React from "react";
import "./Frame2970.css";

function Frame2970(props) {
  const { vector, vector2, className } = props;

  return (
    <div className={`frame-2970 ${className || ""}`}>
      <div className="arrow-forward-outline-1">
        <div className="layer-221">
          <div className="arrow-forward">
            <img className="vector-164" src={vector} />
            <img className="vector-174" src={vector2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frame2970;
