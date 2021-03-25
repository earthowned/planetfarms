import React from "react";
import Frame28033 from "../Frame28033";
import Frame2804 from "../Frame2804";
import Frame2805 from "../Frame2805";
import Frame2957 from "../Frame2957";
import Frame2961 from "../Frame2961";
import Morehorizontal1 from "../Morehorizontal1";
import "./Frame29552.css";

function Frame29552(props) {
  const {
    text1080,
    frame2962,
    frame28033Props,
    frame2804Props,
    frame2805Props,
    frame2957Props,
    frame2961Props,
    morehorizontal1Props,
  } = props;

  return (
    <div className="frame-29556 border-1px-onyx">
      <div className="frame-29567">
        <Frame28033
          frame2801={frame28033Props.frame2801}
          thinkLikeAFarmer={frame28033Props.thinkLikeAFarmer}
          text1079={frame28033Props.text1079}
        />
        <p className="text-1080 valign-text-middle inter-medium-quarter-spanish-white-16px">{text1080}</p>
        <Frame2804
          address={frame2804Props.address}
          messagesquareoutline1Props={frame2804Props.messagesquareoutline1Props}
        />
        <Frame2805 address={frame2805Props.address} eyeoutline1Props={frame2805Props.eyeoutline1Props} />
        <div className="rectangle-87512"></div>
        <div className="frame-29624" style={{ backgroundImage: `url(${frame2962})` }}></div>
      </div>
      <Frame2957>{frame2957Props.children}</Frame2957>
      <Frame2961
        frame2815={frame2961Props.frame2815}
        text375={frame2961Props.text375}
        paperplaneoutline1Props={frame2961Props.paperplaneoutline1Props}
      />
      <Morehorizontal1
        vector={morehorizontal1Props.vector}
        vector2={morehorizontal1Props.vector2}
        vector3={morehorizontal1Props.vector3}
      />
    </div>
  );
}

export default Frame29552;
