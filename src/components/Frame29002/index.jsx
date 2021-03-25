import React from "react";
import Frame2893 from "../Frame2893";
import "./Frame29002.css";

function Frame29002(props) {
  const { mon, tue, wed, fri, sat, frame2893Props, frame28932Props } = props;

  return (
    <div className="frame-29002">
      <Frame2893>{frame2893Props.children}</Frame2893>
      <div className="frame-28942">
        <div className="mon2 inter-medium-monsoon-16px">{mon}</div>
      </div>
      <div className="frame-28952">
        <div className="tue2 inter-medium-monsoon-16px">{tue}</div>
      </div>
      <div className="frame-28962">
        <div className="wed inter-medium-monsoon-16px">{wed}</div>
      </div>
      <Frame2893 className="frame-28972">{frame28932Props.children}</Frame2893>
      <div className="frame-28982">
        <div className="fri2 inter-medium-monsoon-16px">{fri}</div>
      </div>
      <div className="frame-28992">
        <div className="s-at2 inter-medium-monsoon-16px">{sat}</div>
      </div>
    </div>
  );
}

export default Frame29002;
