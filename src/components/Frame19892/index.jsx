import React from "react";
import Frame2817 from "../Frame2817";
import Chevronrightoutline1 from "../Chevronrightoutline1";
import "./Frame19892.css";

function Frame19892(props) {
  const { frame2817Props, chevronrightoutline1Props, chevronrightoutline12Props } = props;

  return (
    <div className="frame-19895 border-1px-onyx">
      <Frame2817
        filterByCategory={frame2817Props.filterByCategory}
        funneloutline1Props={frame2817Props.funneloutline1Props}
      />
      <Chevronrightoutline1 layer24Props={chevronrightoutline1Props.layer24Props} />
      <Chevronrightoutline1
        layer24Props={chevronrightoutline12Props.layer24Props}
        className="chevron-right-outline-14"
      />
    </div>
  );
}

export default Frame19892;
