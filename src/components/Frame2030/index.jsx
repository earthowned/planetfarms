import React from "react";
import Frame1988 from "../Frame1988";
import Frame2062 from "../Frame2062";
import "./Frame2030.css";

function Frame2030(props) {
  const { frame1988Props, frame2062Props } = props;

  return (
    <div className="frame-2030">
      <Frame1988 className="frame-1988-1">{frame1988Props.children}</Frame1988>
      <Frame2062
        x0300PmFindAn={frame2062Props.x0300PmFindAn}
        x3Events={frame2062Props.x3Events}
        frame3471Props={frame2062Props.frame3471Props}
      />
    </div>
  );
}

export default Frame2030;
