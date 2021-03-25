import React from "react";
import "./Component3.css";

function Component3(props) {
  const { src, className } = props;

  return <div className={`component-3 ${className || ""}`} style={{ backgroundImage: `url(${src})` }}></div>;
}

export default Component3;
