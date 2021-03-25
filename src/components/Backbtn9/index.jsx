import React from "react";
import Frame2923 from "../Frame2923";
import "./Backbtn9.css";

function Backbtn9(props) {
  const { frame2923Props } = props;

  return (
    <div className="back-btn9">
      <Frame2923 place={frame2923Props.place} iconsArrowsLeftProps={frame2923Props.iconsArrowsLeftProps} />
    </div>
  );
}

export default Backbtn9;
