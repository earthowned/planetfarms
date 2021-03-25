import React from "react";
import Eye from "../Eye";
import "./Eyeoutline1.css";

function Eyeoutline1(props) {
  const { eyeProps } = props;

  return (
    <div className="eye-outline-1">
      <div className="layer-224">
        <Eye vector={eyeProps.vector} vector2={eyeProps.vector2} vector3={eyeProps.vector3} />
      </div>
    </div>
  );
}

export default Eyeoutline1;
