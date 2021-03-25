import React from "react";
import Frame65 from "../Frame65";
import "./Frame4.css";

function Frame4(props) {
  const { frame65Props } = props;

  return (
    <div className="frame-4">
      <Frame65 frame1933Props={frame65Props.frame1933Props} />
    </div>
  );
}

export default Frame4;
