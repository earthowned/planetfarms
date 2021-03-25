import React from "react";
import { Link } from "react-router-dom";
import Emailoutline from "../Emailoutline";
import Belloutline from "../Belloutline";
import Frame2848 from "../Frame2848";
import "./Frame19548.css";

function Frame19548(props) {
  const { ragrariansI1454626, frame1951, emailoutlineProps, belloutlineProps, frame2848Props } = props;

  return (
    <div className="frame-19549">
      <div className="ragrarians-i1454626 ibmplexsans-semi-bold-quarter-spanish-white-24px">{ragrariansI1454626}</div>
      <div className="frame-19738">
        <Emailoutline layer22Props={emailoutlineProps.layer22Props} />
        <Belloutline vector={belloutlineProps.vector} vector2={belloutlineProps.vector2} />
        <Link to="/10-4-my-personals-1">
          <div className="frame-19519">
            <Link to="/10-4-my-personals-1" onClick={window.event.stopPropagation()}>
              <img className="frame-1951-17" src={frame1951} />
            </Link>
          </div>
        </Link>
      </div>
      <Frame2848 text88={frame2848Props.text88} personoutline1Props={frame2848Props.personoutline1Props} />
    </div>
  );
}

export default Frame19548;
