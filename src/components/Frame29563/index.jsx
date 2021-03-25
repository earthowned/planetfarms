import React from "react";
import Frame2970 from "../Frame2970";
import Frame3244 from "../Frame3244";
import "./Frame29563.css";

function Frame29563(props) {
  const { frame2966, frame2967, frame2968, frame2969, rectangle876, frame2965, frame2970Props, frame3244Props } = props;

  return (
    <div className="frame-29564">
      <div className="frame-29662" style={{ backgroundImage: `url(${frame2966})` }}></div>
      <div className="frame-29672" style={{ backgroundImage: `url(${frame2967})` }}></div>
      <div className="frame-29682" style={{ backgroundImage: `url(${frame2968})` }}></div>
      <div className="frame-29692" style={{ backgroundImage: `url(${frame2969})` }}>
        <img className="rectangle-8762" src={rectangle876} />
      </div>
      <div className="frame-29652" style={{ backgroundImage: `url(${frame2965})` }}></div>
      <Frame2970 vector={frame2970Props.vector} vector2={frame2970Props.vector2} className="frame-29703" />
      <Frame3244
        enterprisePhotos={frame3244Props.enterprisePhotos}
        chevronrightoutline1Props={frame3244Props.chevronrightoutline1Props}
      />
    </div>
  );
}

export default Frame29563;
