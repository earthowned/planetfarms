import React from "react";
import Frame3501 from "../Frame3501";
import Frame2789 from "../Frame2789";
import "./Frame19792.css";

function Frame19792(props) {
  const { text82, frame3501Props, frame2789Props } = props;

  return (
    <div className="frame-19792">
      <Frame3501 farming={frame3501Props.farming} text81={frame3501Props.text81} />
      <p className="text-82 ibmplexsans-normal-quarter-spanish-white-16px">{text82}</p>
      <Frame2789>{frame2789Props.children}</Frame2789>
    </div>
  );
}

export default Frame19792;
