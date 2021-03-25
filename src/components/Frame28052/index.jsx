import React from "react";
import Eyeoutline1 from "../Eyeoutline1";
import "./Frame28052.css";

function Frame28052(props) {
  const { address, eyeoutline1Props } = props;

  return (
    <div className="frame-28052">
      <Eyeoutline1 eyeProps={eyeoutline1Props.eyeProps} />
      <div className="address8 valign-text-middle inter-medium-monsoon-16px">{address}</div>
    </div>
  );
}

export default Frame28052;
