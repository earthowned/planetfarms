import React from "react";
import Component4 from "../Component4";
import Frame2986 from "../Frame2986";
import "./Frame2995.css";

function Frame2995(props) {
  const { text632, component4Props, frame2986Props, className } = props;

  return (
    <div className={`frame-2995 ${className || ""}`}>
      <div className="frame-29872">
        <Component4
          vector={component4Props.vector}
          vector2={component4Props.vector2}
          vector3={component4Props.vector3}
          vector4={component4Props.vector4}
          vector5={component4Props.vector5}
        />
        <div className="frame-28322">
          <div className="text-632 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text632}</div>
        </div>
        <Frame2986
          vector={frame2986Props.vector}
          vector2={frame2986Props.vector2}
          vector3={frame2986Props.vector3}
          vector4={frame2986Props.vector4}
          vector5={frame2986Props.vector5}
          vector6={frame2986Props.vector6}
        />
      </div>
    </div>
  );
}

export default Frame2995;
