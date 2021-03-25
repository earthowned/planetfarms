import React from "react";
import Frame2807 from "../Frame2807";
import Frame28082 from "../Frame28082";
import Frame2810 from "../Frame2810";
import "./Frame2801.css";

function Frame2801(props) {
  const { frame2807Props, frame28082Props, frame280822Props, frame2810Props } = props;

  return (
    <div className="frame-28014 border-1px-onyx">
      <Frame2807>{frame2807Props.children}</Frame2807>
      <Frame28082
        byDate={frame28082Props.byDate}
        chevronrightoutline1Props={frame28082Props.chevronrightoutline1Props}
      />
      <Frame28082
        byDate={frame280822Props.byDate}
        chevronrightoutline1Props={frame280822Props.chevronrightoutline1Props}
        className="frame-28092"
      />
      <Frame2810>{frame2810Props.children}</Frame2810>
    </div>
  );
}

export default Frame2801;
