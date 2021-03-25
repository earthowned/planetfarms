import React from "react";
import "./Frame29282.css";

function Frame29282(props) {
  const { vector, vector2, vector3, vector4, followed, className } = props;

  return (
    <div className={`frame-2928-1 ${className || ""}`}>
      <div className="person-done-outline-1">
        <div className="layer-227">
          <div className="person-done">
            <img className="vector-48" src={vector} />
            <img className="vector-57" src={vector2} />
            <img className="vector-67" src={vector3} />
            <img className="vector-77" src={vector4} />
          </div>
        </div>
      </div>
      <div className="followed">{followed}</div>
    </div>
  );
}

export default Frame29282;
