import React from "react";
import "./Eyeoffoutline22.css";

function Eyeoffoutline22(props) {
  const { vector, vector2, vector3, vector4 } = props;

  return (
    <div className="eye-off-outline-22">
      <div className="layer-24">
        <div className="eye-off">
          <img className="vector-122" src={vector} />
          <img className="vector-132" src={vector2} />
          <img className="vector-142" src={vector3} />
          <img className="vector-152" src={vector4} />
        </div>
      </div>
    </div>
  );
}

export default Eyeoffoutline22;
