import React from "react";
import Frame2080 from "../Frame2080";
import Frame20802 from "../Frame20802";
import "./Frame2079.css";

function Frame2079(props) {
  const { text466, text468, frame2080Props, frame20802Props, className } = props;

  return (
    <div className={`frame-2079 hidden  ${className || ""}`}>
      <div className="frame-2081">
        <Frame2080>{frame2080Props.children}</Frame2080>
      </div>
      <div className="frame-2084">
        <div className="frame-2080">
          <div className="text-466 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text466}</div>
        </div>
      </div>
      <div className="frame-2083">
        <Frame20802>{frame20802Props.children}</Frame20802>
      </div>
      <div className="frame-2082">
        <div className="frame-2080-1">
          <div className="text-468">{text468}</div>
        </div>
      </div>
    </div>
  );
}

export default Frame2079;
