import React from "react";
import "./Funneloutline1.css";

function Funneloutline1(props) {
  const { vector, vector2 } = props;

  return (
    <div className="funnel-outline-1">
      <div className="layer-216">
        <div className="funnel">
          <img className="vector9" src={vector} />
          <img className="vector-118" src={vector2} />
        </div>
      </div>
    </div>
  );
}

export default Funneloutline1;
