import React from "react";
import { Link } from "react-router-dom";
import Frame2797 from "../Frame2797";
import Frame2963 from "../Frame2963";
import Frame3423 from "../Frame3423";
import Frame3424 from "../Frame3424";
import "./Frame2799.css";

function Frame2799(props) {
  const { frame1969, frame2797Props, frame2963Props, frame3423Props, frame3424Props } = props;

  return (
    <div className="frame-2799">
      <Frame2797
        surname={frame2797Props.surname}
        text355={frame2797Props.text355}
        dueToTheAdvantage={frame2797Props.dueToTheAdvantage}
      />
      <img className="frame-19699" src={frame1969} />
      <Link to="/9-3-enterprise-user-view">
        <div className="frame-27963 border-0-5px-quarter-spanish-white">
          <Frame2963
            youreFollower={frame2963Props.youreFollower}
            chevronrightoutline1Props={frame2963Props.chevronrightoutline1Props}
          />
        </div>
      </Link>
      <div className="rectangle-8753"></div>
      <Frame3423
        joinMessenger={frame3423Props.joinMessenger}
        text356={frame3423Props.text356}
        text357={frame3423Props.text357}
        frame2904={frame3423Props.frame2904}
        frame3392={frame3423Props.frame3392}
        frame3393={frame3423Props.frame3393}
        text358={frame3423Props.text358}
      />
      <Frame3424 {...frame3424Props} />
    </div>
  );
}

export default Frame2799;
