import React from "react";
import Frame3239 from "../Frame3239";
import Frame2796 from "../Frame2796";
import "./Frame19695.css";

function Frame19695(props) {
  const { frame1969, frame3239Props, frame2796Props, className } = props;

  return (
    <div className={`frame-19698 border-1px-onyx ${className || ""}`} style={{ backgroundImage: `url(${frame1969})` }}>
      <Frame3239 farmers={frame3239Props.farmers} text264={frame3239Props.text264} address={frame3239Props.address} />
      <Frame2796 dontRecommend={frame2796Props.dontRecommend} frame2792Props={frame2796Props.frame2792Props} />
    </div>
  );
}

export default Frame19695;
