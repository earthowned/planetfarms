import React from "react";
import Frame2794 from "../Frame2794";
import Frame27932 from "../Frame27932";
import Frame27922 from "../Frame27922";
import "./Frame1961.css";

function Frame1961(props) {
  const { frame1969, dismiss, frame2794Props, frame27932Props, frame27922Props, className } = props;

  return (
    <div className={`frame-1961 border-1px-onyx ${className || ""}`}>
      <div className="frame-196914" style={{ backgroundImage: `url(${frame1969})` }}></div>
      <Frame2794 className="frame-2794-12">{frame2794Props.children}</Frame2794>
      <div className="frame-34773">
        <Frame27932 text785={frame27932Props.text785} address={frame27932Props.address} />
        <div className="frame-27974">
          <div className="frame-27955 border-0-5px-white">
            <div className="dismiss ibmplexsans-semi-bold-quarter-spanish-white-16px">{dismiss}</div>
          </div>
          <Frame27922>{frame27922Props.children}</Frame27922>
        </div>
      </div>
    </div>
  );
}

export default Frame1961;
