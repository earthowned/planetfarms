import React from "react";
import Frame2794 from "../Frame2794";
import Frame27932 from "../Frame27932";
import Frame411 from "../Frame411";
import Frame27922 from "../Frame27922";
import "./Frame1959.css";

function Frame1959(props) {
  const { frame1969, frame2794Props, frame27932Props, frame411Props, frame27922Props, className } = props;

  return (
    <div className={`frame-19593 border-1px-onyx ${className || ""}`}>
      <div className="frame-196913" style={{ backgroundImage: `url(${frame1969})` }}></div>
      <Frame2794>{frame2794Props.children}</Frame2794>
      <div className="frame-34772">
        <Frame27932 text785={frame27932Props.text785} address={frame27932Props.address} />
        <div className="frame-27973">
          <Frame411>{frame411Props.children}</Frame411>
          <Frame27922>{frame27922Props.children}</Frame27922>
        </div>
      </div>
    </div>
  );
}

export default Frame1959;
