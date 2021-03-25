import React from "react";
import Frame3501 from "../Frame3501";
import Frame2789 from "../Frame2789";
import "./Frame3469.css";

function Frame3469(props) {
  const { text84, frame3501Props, frame2789Props } = props;

  return (
    <div className="frame-3469">
      <Frame3501 farming={frame3501Props.farming} text81={frame3501Props.text81} />
      <p className="text-84 ibmplexsans-normal-quarter-spanish-white-16px">{text84}</p>
      <Frame2789 className="frame-2789-1">{frame2789Props.children}</Frame2789>
    </div>
  );
}

export default Frame3469;
