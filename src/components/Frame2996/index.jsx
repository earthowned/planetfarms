import React from "react";
import Component4 from "../Component4";
import Frame2833 from "../Frame2833";
import Frame2986 from "../Frame2986";
import "./Frame2996.css";

function Frame2996(props) {
  const { component4Props, frame2833Props, frame2986Props, className } = props;

  return (
    <div className={`frame-2996 ${className || ""}`}>
      <div className="frame-29892">
        <Component4
          vector={component4Props.vector}
          vector2={component4Props.vector2}
          vector3={component4Props.vector3}
          vector4={component4Props.vector4}
          vector5={component4Props.vector5}
        />
        <Frame2833>{frame2833Props.children}</Frame2833>
        <Frame2986
          vector={frame2986Props.vector}
          vector2={frame2986Props.vector2}
          vector3={frame2986Props.vector3}
          vector4={frame2986Props.vector4}
          vector5={frame2986Props.vector5}
          vector6={frame2986Props.vector6}
          className="frame-2986-1"
        />
      </div>
    </div>
  );
}

export default Frame2996;
