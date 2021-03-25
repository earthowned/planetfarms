import React from "react";
import { Link } from "react-router-dom";
import Frame3239 from "../Frame3239";
import Frame27962 from "../Frame27962";
import "./Frame2984.css";

function Frame2984(props) {
  const { frame2984, frame3239Props, frame27962Props } = props;

  return (
    <Link to="/9-2-enterprise-user-view">
      <div className="frame-2984 border-class-1">
        <Link to="/9-2-enterprise-user-view" onClick={window.event.stopPropagation()}>
          <img className="frame-2984-1" src={frame2984} />
        </Link>
        <Frame3239 farmers={frame3239Props.farmers} text264={frame3239Props.text264} address={frame3239Props.address} />
        <Frame27962>{frame27962Props.children}</Frame27962>
      </div>
    </Link>
  );
}

export default Frame2984;
