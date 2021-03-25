import React from "react";
import "./Frame3063.css";

function Frame3063(props) {
  const { frame3063, group, text247, className } = props;

  return (
    <div className={`frame-3063 ${className || ""}`} style={{ backgroundImage: `url(${frame3063})` }}>
      <div className="frame-19713">
        <div className="play-button-12">
          <div className="group-2">
            <div className="group-3" style={{ backgroundImage: `url(${group})` }}></div>
          </div>
        </div>
      </div>
      <p className="text-247 valign-text-middle">{text247}</p>
    </div>
  );
}

export default Frame3063;
