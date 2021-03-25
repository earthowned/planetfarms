import React from "react";
import "./Component1.css";

function Component1(props) {
  const { vector, vector2, vector3 } = props;

  return (
    <div className="component-1">
      <div className="layer-234">
        <div className="checkmark-circle-2">
          <img className="vector23" src={vector} />
          <img className="vector-140" src={vector2} />
          <img className="vector-224" src={vector3} />
        </div>
      </div>
    </div>
  );
}

export default Component1;
