import React from "react";
import Eyeoutline1 from "../Eyeoutline1";
import "./Frame28053.css";

function Frame28053(props) {
  const { address, eyeoutline1Props } = props;

  return (
    <div className="frame-28053">
      <Eyeoutline1 eyeProps={eyeoutline1Props.eyeProps} />
      <div className="address13 valign-text-middle ibmplexsans-normal-monsoon-16px">{address}</div>
    </div>
  );
}

export default Frame28053;
