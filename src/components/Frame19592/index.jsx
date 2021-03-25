import React from "react";
import Frame27942 from "../Frame27942";
import Frame2790 from "../Frame2790";
import Frame27963 from "../Frame27963";
import "./Frame19592.css";

function Frame19592(props) {
  const { frame1969, x2564Followers, frame27942Props, frame2790Props, frame27963Props, className } = props;

  return (
    <div className={`frame-19594 border-1px-onyx ${className || ""}`}>
      <div className="frame-196923" style={{ backgroundImage: `url(${frame1969})` }}></div>
      <div className="frame-19794">
        <Frame27942 farmers={frame27942Props.farmers} thinkLikeAFarmer={frame27942Props.thinkLikeAFarmer} />
        <div className="frame-27934">
          <div className="frame-27896">
            <div className="frame-279120">
              <div className="x2564-followers2">{x2564Followers}</div>
            </div>
          </div>
          <Frame2790>{frame2790Props.children}</Frame2790>
        </div>
        <Frame27963 dontRecommend={frame27963Props.dontRecommend} follow={frame27963Props.follow} />
      </div>
    </div>
  );
}

export default Frame19592;
