import React from "react";
import Frame3067 from "../Frame3067";
import Frame3317 from "../Frame3317";
import Frame33182 from "../Frame33182";
import Frame3319 from "../Frame3319";
import "./Frame2829.css";

function Frame2829(props) {
  const { text, frame1969, name, frame3067Props, frame3317Props, frame33182Props, frame3319Props } = props;

  return (
    <div className="frame-282914 border-1px-onyx">
      <Frame3067>{frame3067Props.children}</Frame3067>
      <div className="text8 valign-text-middle">{text}</div>
      <div className="frame-196922" style={{ backgroundImage: `url(${frame1969})` }}></div>
      <p className="name18 ibmplexsans-normal-quarter-spanish-white-16px">{name}</p>
      <div className="frame-19397">
        <Frame3317 frame3318Props={frame3317Props.frame3318Props} />
        <Frame33182 frame33183Props={frame33182Props.frame33183Props} />
        <Frame3319 frame33184Props={frame3319Props.frame33184Props} />
      </div>
    </div>
  );
}

export default Frame2829;
