import React from "react";
import Grid from "../Grid";
import "./Frame2891.css";

function Frame2891(props) {
  const { gridProps, className } = props;

  return (
    <div className={`frame-2891 border-1px-quarter-spanish-white ${className || ""}`}>
      <Grid
        vector={gridProps.vector}
        vector2={gridProps.vector2}
        vector3={gridProps.vector3}
        vector4={gridProps.vector4}
      />
    </div>
  );
}

export default Frame2891;
