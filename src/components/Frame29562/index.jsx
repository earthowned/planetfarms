import React from "react";
import Frame2803 from "../Frame2803";
import Frame2804 from "../Frame2804";
import Frame2805 from "../Frame2805";
import "./Frame29562.css";

function Frame29562(props) {
  const { text374, frame2962, frame2803Props, frame2804Props, frame2805Props } = props;

  return (
    <div className="frame-29563">
      <Frame2803
        frame2801={frame2803Props.frame2801}
        thinkLikeAFarmer={frame2803Props.thinkLikeAFarmer}
        text373={frame2803Props.text373}
      />
      <p className="text-374 valign-text-middle ibmplexsans-normal-quarter-spanish-white-16px">{text374}</p>
      <Frame2804
        address={frame2804Props.address}
        messagesquareoutline1Props={frame2804Props.messagesquareoutline1Props}
      />
      <Frame2805 address={frame2805Props.address} eyeoutline1Props={frame2805Props.eyeoutline1Props} />
      <div className="rectangle-8755"></div>
      <div className="frame-2962" style={{ backgroundImage: `url(${frame2962})` }}></div>
    </div>
  );
}

export default Frame29562;
