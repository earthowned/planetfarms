/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import "./ToggleSwitch.scss";

function ToggleSwitch({ onClick, isFree }) {
  return (
    <div className="toggle" onClick={onClick}>
      <div className={`${isFree ? "toggle-item active" : "toggle-item"}`} />
      <div className="toggle-container" />
    </div>
  );
}

export default ToggleSwitch;
