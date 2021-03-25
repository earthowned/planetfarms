import React from "react";
import { Link } from "react-router-dom";
import Layer22 from "../Layer22";
import Belloutline from "../Belloutline";
import Personoutline1 from "../Personoutline1";
import "./Frame19542.css";

function Frame19542(props) {
  const { ragrariansI519741, frame1951, text58, layer22Props, belloutlineProps, personoutline1Props } = props;

  return (
    <div className="frame-19542">
      <div className="ragrarians-i519741 ibmplexsans-semi-bold-quarter-spanish-white-24px">{ragrariansI519741}</div>
      <div className="frame-19732">
        <Link to="/14-1-messages-popup">
          <div className="email-outline3">
            <Layer22 emailProps={layer22Props.emailProps} />
          </div>
        </Link>
        <Belloutline vector={belloutlineProps.vector} vector2={belloutlineProps.vector2} />
        <Link to="/10-4-my-personals-1">
          <div className="frame-19512">
            <Link to="/10-4-my-personals-1" onClick={window.event.stopPropagation()}>
              <img className="frame-1951-12" src={frame1951} />
            </Link>
          </div>
        </Link>
      </div>
      <Link to="/10-1-my-dashboard">
        <div className="frame-28483">
          <Personoutline1
            vector={personoutline1Props.vector}
            vector2={personoutline1Props.vector2}
            vector3={personoutline1Props.vector3}
          />
          <div className="text-58 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text58}</div>
        </div>
      </Link>
    </div>
  );
}

export default Frame19542;
