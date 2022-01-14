import React from "react";
import "./ToggleSwitch.scss";

function ToggleSwitch({ onClick, isFree }) {
  return (
    <>
      <div className="toggle" onClick={onClick}>
        <div className={`${isFree ? "toggle-item active" : "toggle-item"}`} />
        <div className="toggle-container" />
      </div>
    </>
  );
}

export default ToggleSwitch;
