import React from "react";
import "./Frame3004.css";

function Frame3004(props) {
  const { frame1980, frame2956 } = props;

  return (
    <div className="frame-30044 border-1px-onyx">
      <img className="frame-198010" src={frame1980} />
      <img className="frame-29568" src={frame2956} />
    </div>
  );
}

export default Frame3004;
