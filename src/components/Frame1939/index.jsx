import React from "react";
import Frame3317 from "../Frame3317";
import Frame33182 from "../Frame33182";
import Frame3319 from "../Frame3319";
import "./Frame1939.css";

function Frame1939(props) {
  const { frame3317Props, frame33182Props, frame3319Props } = props;

  return (
    <div className="frame-1939">
      <Frame3317 frame3318Props={frame3317Props.frame3318Props} />
      <Frame33182 frame33183Props={frame33182Props.frame33183Props} />
      <Frame3319 frame33184Props={frame3319Props.frame33184Props} />
    </div>
  );
}

export default Frame1939;
