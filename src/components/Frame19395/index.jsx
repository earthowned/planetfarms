import React from "react";
import { Link } from "react-router-dom";
import Frame3318 from "../Frame3318";
import Frame33183 from "../Frame33183";
import Frame33184 from "../Frame33184";
import "./Frame19395.css";

function Frame19395(props) {
  const { frame3318Props, frame33183Props, frame33184Props } = props;

  return (
    <div className="frame-19396">
      <Link to="/32-add-news-video">
        <div className="frame-33174 border-0-5px-quarter-spanish-white">
          <Frame3318 text116={frame3318Props.text116} videooutlineProps={frame3318Props.videooutlineProps} />
        </div>
      </Link>
      <Link to="/3-4-add-new-block-photo">
        <div className="frame-33188 border-0-5px-quarter-spanish-white">
          <Frame33183 text117={frame33183Props.text117} cameraoutlineProps={frame33183Props.cameraoutlineProps} />
        </div>
      </Link>
      <Link to="/3-3-add-new-block-text-1">
        <div className="frame-33194 border-0-5px-quarter-spanish-white">
          <Frame33184 text118={frame33184Props.text118} filetextoutlineProps={frame33184Props.filetextoutlineProps} />
        </div>
      </Link>
    </div>
  );
}

export default Frame19395;
