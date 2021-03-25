import React from "react";
import Frame1969 from "../Frame1969";
import Frame1979 from "../Frame1979";
import "./Frame2917.css";

function Frame2917(props) {
  const { frame1969Props, frame1979Props } = props;

  return (
    <div className="frame-29172 border-1px-onyx">
      <Frame1969
        frame1969={frame1969Props.frame1969}
        date={frame1969Props.date}
        frame3470Props={frame1969Props.frame3470Props}
      />
      <Frame1979 text17={frame1979Props.text17} text18={frame1979Props.text18} text19={frame1979Props.text19} />
    </div>
  );
}

export default Frame2917;
