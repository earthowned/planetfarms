import React from "react";
import Emailoutline from "../Emailoutline";
import Belloutline from "../Belloutline";
import Frame2848 from "../Frame2848";
import "./Frame19544.css";

function Frame19544(props) {
  const { ragrariansI520753, frame1951, emailoutlineProps, belloutlineProps, frame2848Props } = props;

  return (
    <div className="frame-19544">
      <div className="ragrarians-i520753 ibmplexsans-semi-bold-quarter-spanish-white-24px">{ragrariansI520753}</div>
      <div className="frame-19734">
        <Emailoutline layer22Props={emailoutlineProps.layer22Props} />
        <Belloutline vector={belloutlineProps.vector} vector2={belloutlineProps.vector2} />
        <div className="frame-19514" style={{ backgroundImage: `url(${frame1951})` }}></div>
      </div>
      <Frame2848 text88={frame2848Props.text88} personoutline1Props={frame2848Props.personoutline1Props} />
    </div>
  );
}

export default Frame19544;
