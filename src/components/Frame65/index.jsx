import React from "react";
import Frame1933 from "../Frame1933";
import "./Frame65.css";

function Frame65(props) {
  const { frame1933Props } = props;

  return (
    <div className="frame-652 border-class-3">
      <Frame1933
        username={frame1933Props.username}
        mikhail={frame1933Props.mikhail}
        layer2Props={frame1933Props.layer2Props}
      />
    </div>
  );
}

export default Frame65;
