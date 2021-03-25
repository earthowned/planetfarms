import React from "react";
import Personaddoutline2 from "../Personaddoutline2";
import "./Frame2928.css";

function Frame2928(props) {
  const { follow, personaddoutline2Props } = props;

  return (
    <div className="frame-29282">
      <Personaddoutline2
        vector={personaddoutline2Props.vector}
        vector2={personaddoutline2Props.vector2}
        vector3={personaddoutline2Props.vector3}
        vector4={personaddoutline2Props.vector4}
      />
      <div className="follow3">{follow}</div>
    </div>
  );
}

export default Frame2928;
