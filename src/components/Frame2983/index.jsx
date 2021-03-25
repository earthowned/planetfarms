import React from "react";
import { Link } from "react-router-dom";
import Frame3239 from "../Frame3239";
import Frame2796 from "../Frame2796";
import "./Frame2983.css";

function Frame2983(props) {
  const { frame2983, frame3239Props, frame2796Props } = props;

  return (
    <Link to="/9-2-enterprise-user-view">
      <div className="frame-2983 border-class-1">
        <Link to="/9-2-enterprise-user-view" onClick={window.event.stopPropagation()}>
          <img className="frame-2983-1" src={frame2983} />
        </Link>
        <Frame3239 farmers={frame3239Props.farmers} text264={frame3239Props.text264} address={frame3239Props.address} />
        <Frame2796 dontRecommend={frame2796Props.dontRecommend} frame2792Props={frame2796Props.frame2792Props} />
      </div>
    </Link>
  );
}

export default Frame2983;
