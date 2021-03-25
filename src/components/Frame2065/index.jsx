import React from "react";
import Frame2074 from "../Frame2074";
import Closeoutline1 from "../Closeoutline1";
import "./Frame2065.css";

function Frame2065(props) {
  const {
    sunday,
    date,
    myEvents,
    frame2074Props,
    frame20742Props,
    frame20743Props,
    frame20744Props,
    frame20745Props,
    closeoutline1Props,
  } = props;

  return (
    <div className="frame-2065">
      <div className="frame-2066">
        <div className="sunday inter-medium-monsoon-16px">{sunday}</div>
        <div className="date5 inter-medium-quarter-spanish-white-16px">{date}</div>
      </div>
      <div className="my-events2">{myEvents}</div>
      <Frame2074 text830={frame2074Props.text830} />
      <Frame2074 text830={frame20742Props.text830} className="frame-20752" />
      <Frame2074 text830={frame20743Props.text830} className="frame-2076" />
      <Frame2074 text830={frame20744Props.text830} className="frame-2077" />
      <Frame2074 text830={frame20745Props.text830} className="frame-2078" />
      <Closeoutline1 layer23Props={closeoutline1Props.layer23Props} className="close-outline-14" />
    </div>
  );
}

export default Frame2065;
