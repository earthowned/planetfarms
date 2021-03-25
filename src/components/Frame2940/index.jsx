import React from "react";
import Personaddoutline2 from "../Personaddoutline2";
import "./Frame2940.css";

function Frame2940(props) {
  const { frame2926, name, address, follow, personaddoutline2Props, className } = props;

  return (
    <div className={`frame-2940 ${className || ""}`}>
      <div className="frame-29263" style={{ backgroundImage: `url(${frame2926})` }}></div>
      <div className="frame-29272">
        <div className="name5">{name}</div>
        <div className="address9">{address}</div>
      </div>
      <div className="frame-29283">
        <Personaddoutline2
          vector={personaddoutline2Props.vector}
          vector2={personaddoutline2Props.vector2}
          vector3={personaddoutline2Props.vector3}
          vector4={personaddoutline2Props.vector4}
        />
        <div className="follow4">{follow}</div>
      </div>
    </div>
  );
}

export default Frame2940;
