import React from "react";
import Personoutline1 from "../Personoutline1";
import "./Frame2848.css";

function Frame2848(props) {
  const { text88, personoutline1Props } = props;

  return (
    <div className="frame-28485">
      <Personoutline1
        vector={personoutline1Props.vector}
        vector2={personoutline1Props.vector2}
        vector3={personoutline1Props.vector3}
      />
      <div className="text-88 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text88}</div>
    </div>
  );
}

export default Frame2848;
