import React from "react";
import Frame3501 from "../Frame3501";
import Frame1889 from "../Frame1889";
import "./Frame19793.css";

function Frame19793(props) {
  const { text86, date, address, frame3501Props, frame1889Props } = props;

  return (
    <div className="frame-19793">
      <Frame3501 farming={frame3501Props.farming} text81={frame3501Props.text81} />
      <p className="text-86 ibmplexsans-normal-quarter-spanish-white-16px">{text86}</p>
      <div className="frame-27892">
        <div className="date3">{date}</div>
        <Frame1889 src={frame1889Props.src} className="frame-18892" />
        <div className="address3">{address}</div>
      </div>
    </div>
  );
}

export default Frame19793;
