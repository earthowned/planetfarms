import React from "react";
import "./Grid.css";

function Grid(props) {
  const { vector, vector2, vector3, vector4 } = props;

  return (
    <div className="grid">
      <div className="grid-outline-2">
        <div className="layer-27">
          <div className="grid-1">
            <img className="vector-63" src={vector} />
            <img className="vector-73" src={vector2} />
            <img className="vector-83" src={vector3} />
            <img className="vector-93" src={vector4} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
