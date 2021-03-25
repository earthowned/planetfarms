import React from "react";
import "./Component32.css";

function Component32(props) {
  const { component3, ellipse704 } = props;

  return (
    <div className="component-32" style={{ backgroundImage: `url(${component3})` }}>
      <img className="ellipse-704" src={ellipse704} />
    </div>
  );
}

export default Component32;
