import React from "react";
import "./Personaddoutline2.css";

function Personaddoutline2(props) {
  const { vector, vector2, vector3, vector4 } = props;

  return (
    <div className="person-add-outline-2">
      <div className="layer-226">
        <div className="person-add">
          <img className="vector14" src={vector} />
          <img className="vector-127" src={vector2} />
          <img className="vector-215" src={vector3} />
          <img className="vector-39" src={vector4} />
        </div>
      </div>
    </div>
  );
}

export default Personaddoutline2;
