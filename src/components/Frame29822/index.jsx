import React from "react";
import Frame3239 from "../Frame3239";
import Frame27962 from "../Frame27962";
import "./Frame29822.css";

function Frame29822(props) {
  const { frame2982, frame3239Props, frame27962Props, className } = props;

  return (
    <div className={`frame-29822 border-class-1 ${className || ""}`} style={{ backgroundImage: `url(${frame2982})` }}>
      <Frame3239 farmers={frame3239Props.farmers} text264={frame3239Props.text264} address={frame3239Props.address} />
      <Frame27962>{frame27962Props.children}</Frame27962>
    </div>
  );
}

export default Frame29822;
