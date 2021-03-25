import React from "react";
import Frame2970 from "../Frame2970";
import Frame3244 from "../Frame3244";
import "./Frame2956.css";

function Frame2956(props) {
  const { frame2966, frame2967, frame2968, frame2969, rectangle876, frame2965, frame2970Props, frame3244Props } = props;

  return (
    <div className="frame-2956">
      <div className="frame-2966" style={{ backgroundImage: `url(${frame2966})` }}></div>
      <div className="frame-2967" style={{ backgroundImage: `url(${frame2967})` }}></div>
      <div className="frame-2968" style={{ backgroundImage: `url(${frame2968})` }}></div>
      <div className="frame-2969" style={{ backgroundImage: `url(${frame2969})` }}>
        <img className="rectangle-876" src={rectangle876} />
      </div>
      <div className="frame-2965" style={{ backgroundImage: `url(${frame2965})` }}></div>
      <Frame2970 vector={frame2970Props.vector} vector2={frame2970Props.vector2} className="frame-29702" />
      <Frame3244
        enterprisePhotos={frame3244Props.enterprisePhotos}
        chevronrightoutline1Props={frame3244Props.chevronrightoutline1Props}
      />
    </div>
  );
}

export default Frame2956;
