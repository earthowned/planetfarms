import React from "react";
import Close from "../Close";
import "./Layer23.css";

function Layer23(props) {
  const { closeProps } = props;

  return (
    <div className="layer-215">
      <Close vector={closeProps.vector} vector2={closeProps.vector2} />
    </div>
  );
}

export default Layer23;
