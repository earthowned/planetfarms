import React from "react";
import Eyeoutline1 from "../Eyeoutline1";
import "./Frame2805.css";

function Frame2805(props) {
  const { address, eyeoutline1Props } = props;

  return (
    <div className="frame-2805">
      <Eyeoutline1 eyeProps={eyeoutline1Props.eyeProps} />
      <div className="address6 valign-text-middle inter-medium-monsoon-16px">{address}</div>
    </div>
  );
}

export default Frame2805;
