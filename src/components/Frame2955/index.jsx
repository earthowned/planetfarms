import React from "react";
import Frame29562 from "../Frame29562";
import Frame2957 from "../Frame2957";
import Frame2961 from "../Frame2961";
import "./Frame2955.css";

function Frame2955(props) {
  const { frame29562Props, frame2957Props, frame2961Props, className } = props;

  return (
    <div className={`frame-2955 border-1px-onyx ${className || ""}`}>
      <Frame29562
        text374={frame29562Props.text374}
        frame2962={frame29562Props.frame2962}
        frame2803Props={frame29562Props.frame2803Props}
        frame2804Props={frame29562Props.frame2804Props}
        frame2805Props={frame29562Props.frame2805Props}
      />
      <Frame2957>{frame2957Props.children}</Frame2957>
      <Frame2961
        frame2815={frame2961Props.frame2815}
        text375={frame2961Props.text375}
        paperplaneoutline1Props={frame2961Props.paperplaneoutline1Props}
      />
    </div>
  );
}

export default Frame2955;
