import React from "react";
import Frame3470 from "../Frame3470";
import "./Frame19693.css";

function Frame19693(props) {
  const { frame1969, frame3470Props } = props;

  return (
    <div className="frame-19695" style={{ backgroundImage: `url(${frame1969})` }}>
      <div className="rectangle-12012"></div>
      <Frame3470 className="frame-3470-1">{frame3470Props.children}</Frame3470>
    </div>
  );
}

export default Frame19693;
