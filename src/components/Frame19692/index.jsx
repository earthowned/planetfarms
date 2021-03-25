import React from "react";
import "./Frame19692.css";

function Frame19692(props) {
  const { frame1969, address } = props;

  return (
    <div className="frame-19694" style={{ backgroundImage: `url(${frame1969})` }}>
      <div className="rectangle-12002"></div>
      <div className="frame-34702 border-0-5px-quarter-spanish-white">
        <div className="address2">{address}</div>
      </div>
    </div>
  );
}

export default Frame19692;
