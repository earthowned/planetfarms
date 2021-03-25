import React from "react";
import Frame3020 from "../Frame3020";
import Component3 from "../Component3";
import Component32 from "../Component32";
import "./Frame19393.css";

function Frame19393(props) {
  const {
    text703,
    text704,
    frame3020Props,
    frame30202Props,
    frame30203Props,
    component3Props,
    component32Props,
  } = props;

  return (
    <div className="frame-19394">
      <div className="rectangle-317"></div>
      <div className="rectangle-317-1"></div>
      <div className="rectangle-317-2"></div>
      <div className="rectangle-317-3"></div>
      <Frame3020 text700={frame3020Props.text700} component3Props={frame3020Props.component3Props} />
      <Frame3020
        text700={frame30202Props.text700}
        component3Props={frame30202Props.component3Props}
        className="frame-3021"
      />
      <Frame3020
        text700={frame30203Props.text700}
        component3Props={frame30203Props.component3Props}
        className="frame-3022"
      />
      <div className="frame-3023">
        <Component3 src={component3Props.src} className="component-3-1" />
        <div className="text-70 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{text703}</div>
      </div>
      <div className="frame-3019">
        <Component32 component3={component32Props.component3} ellipse704={component32Props.ellipse704} />
        <div className="text-70 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{text704}</div>
      </div>
    </div>
  );
}

export default Frame19393;
