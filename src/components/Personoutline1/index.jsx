import React from "react";
import "./Personoutline1.css";

function Personoutline1(props) {
  const { vector, vector2, vector3 } = props;

  return (
    <div className="person-outline-1">
      <div className="layer-210">
        <div className="person3">
          <img className="vector-242" src={vector} />
          <img className="vector-25" src={vector2} />
          <img className="vector-26" src={vector3} />
        </div>
      </div>
    </div>
  );
}

export default Personoutline1;
