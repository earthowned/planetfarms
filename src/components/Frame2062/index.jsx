import React from "react";
import Frame3471 from "../Frame3471";
import "./Frame2062.css";

function Frame2062(props) {
  const { x0300PmFindAn, x3Events, frame3471Props } = props;

  return (
    <div className="frame-2062">
      <div className="frame-3473">
        <Frame3471>{frame3471Props.children}</Frame3471>
        <div className="frame-3472">
          <div className="frame-2057"></div>
          <div className="x0300-pm-find-an">{x0300PmFindAn}</div>
        </div>
      </div>
      <div className="x3-events">{x3Events}</div>
    </div>
  );
}

export default Frame2062;
