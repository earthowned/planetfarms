import React from "react";
import Frame2894 from "../Frame2894";
import "./Frame2900.css";

function Frame2900(props) {
  const { place, tue, thu, fri, sat, frame2894Props, frame28942Props } = props;

  return (
    <div className="frame-2900">
      <div className="frame-2893">
        <div className="place5">{place}</div>
      </div>
      <Frame2894>{frame2894Props.children}</Frame2894>
      <div className="frame-2895">
        <div className="tue">{tue}</div>
      </div>
      <Frame2894 className="frame-2896">{frame28942Props.children}</Frame2894>
      <div className="frame-2897">
        <div className="thu">{thu}</div>
      </div>
      <div className="frame-2898">
        <div className="fri">{fri}</div>
      </div>
      <div className="frame-2899">
        <div className="s-at">{sat}</div>
      </div>
    </div>
  );
}

export default Frame2900;
