import React from "react";
import Frame3470 from "../Frame3470";
import "./Frame1969.css";

function Frame1969(props) {
  const { frame1969, date, frame3470Props } = props;

  return (
    <div className="frame-1969" style={{ backgroundImage: `url(${frame1969})` }}>
      <div className="rectangle-1200"></div>
      <Frame3470>{frame3470Props.children}</Frame3470>
      <div className="date">{date}</div>
    </div>
  );
}

export default Frame1969;
