import React from "react";
import Eye from "../Eye";
import "./EyeOpen.css";

function EyeOpen(props) {
  const { eyeProps } = props;

  return (
    <div className="eye-open">
      <Eye vector={eyeProps.vector} vector2={eyeProps.vector2} vector3={eyeProps.vector3} />
    </div>
  );
}

export default EyeOpen;
