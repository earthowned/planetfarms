import React from "react";
import './back-button.css'
function Backbtn() {
  return (
    <div className="back-btn-container">
      <div className="icon-wrapper">
        <img className="icon-image-btn" src="/img/back-button-icon.svg" />
      </div>

      <div className="back-text">Back</div>
    </div>
  );
}
export default Backbtn;
