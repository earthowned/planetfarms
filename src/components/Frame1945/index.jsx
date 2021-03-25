import React from "react";
import Frame2891 from "../Frame2891";
import Frame from "../Frame";
import "./Frame1945.css";

function Frame1945(props) {
  const { frame2891Props, frameProps } = props;

  return (
    <div className="frame-19452">
      <Frame2891 gridProps={frame2891Props.gridProps} className="frame-28912" />
      <Frame
        group={frameProps.group}
        vector={frameProps.vector}
        vector2={frameProps.vector2}
        vector3={frameProps.vector3}
        vector4={frameProps.vector4}
        vector5={frameProps.vector5}
      />
    </div>
  );
}

export default Frame1945;
