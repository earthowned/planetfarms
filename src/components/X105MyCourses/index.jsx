import React from "react";
import { Link } from "react-router-dom";
import Frame195413 from "../Frame195413";
import Backbtn7 from "../Backbtn7";
import Frame30673 from "../Frame30673";
import Frame32392 from "../Frame32392";
import Frame194316 from "../Frame194316";
import "./X105MyCourses.css";

function X105MyCourses(props) {
  const {
    frame3040,
    frame3053,
    x18Lessons,
    frame3041,
    frame30532,
    x1214Lessons,
    frame30402,
    frame30412,
    frame3078,
    frame195413Props,
    backbtn7Props,
    frame30673Props,
    frame32392Props,
    frame323922Props,
    frame306732Props,
    frame323923Props,
    frame323924Props,
    frame323925Props,
    frame194316Props,
  } = props;

  return (
    <div className="x10-5-my-courses screen ">
      <Frame195413
        ragrariansI169223={frame195413Props.ragrariansI169223}
        frame1951={frame195413Props.frame1951}
        text603={frame195413Props.text603}
        emailoutlineProps={frame195413Props.emailoutlineProps}
        belloutlineProps={frame195413Props.belloutlineProps}
        personoutline1Props={frame195413Props.personoutline1Props}
      />
      <Backbtn7 place={backbtn7Props.place} iconsArrowsLeftProps={backbtn7Props.iconsArrowsLeftProps} />
      <div className="frame-28297 border-1px-onyx">
        <Frame30673>{frame30673Props.children}</Frame30673>
        <Link to="/10-6-course-page">
          <div className="frame-3040-1">
            <Link to="/10-6-course-page" onClick={window.event.stopPropagation()}>
              <img className="frame-30" src={frame3040} />
            </Link>
            <Frame32392 name={frame32392Props.name} text604={frame32392Props.text604} />
            <div className="frame-3054">
              <div className="frame-3053" style={{ backgroundImage: `url(${frame3053})` }}></div>
              <div className="x18-lessons valign-text-middle">{x18Lessons}</div>
            </div>
          </div>
        </Link>
        <Link to="/10-6-course-page">
          <div className="frame-3041">
            <Link to="/10-6-course-page" onClick={window.event.stopPropagation()}>
              <img className="frame-30" src={frame3041} />
            </Link>
            <Frame32392 name={frame323922Props.name} text604={frame323922Props.text604} />
            <div className="frame-3054">
              <div className="frame-3053-1" style={{ backgroundImage: `url(${frame30532})` }}></div>
              <div className="x1214-lessons valign-text-middle">{x1214Lessons}</div>
            </div>
          </div>
        </Link>
      </div>
      <div className="frame-28302 border-1px-onyx">
        <Frame30673>{frame306732Props.children}</Frame30673>
        <Link to="/10-6-course-page">
          <div className="frame-3040-1">
            <Link to="/10-6-course-page" onClick={window.event.stopPropagation()}>
              <img className="frame-30" src={frame30402} />
            </Link>
            <Frame32392 name={frame323923Props.name} text604={frame323923Props.text604} className="frame-3239-1" />
          </div>
        </Link>
        <Link to="/10-6-course-page">
          <div className="frame-3041">
            <Link to="/10-6-course-page" onClick={window.event.stopPropagation()}>
              <img className="frame-30" src={frame30412} />
            </Link>
            <Frame32392 name={frame323924Props.name} text604={frame323924Props.text604} className="frame-3239-1" />
          </div>
        </Link>
        <Link to="/10-6-course-page">
          <div className="frame-3078">
            <Link to="/10-6-course-page" onClick={window.event.stopPropagation()}>
              <img className="frame-30" src={frame3078} />
            </Link>
            <Frame32392 name={frame323925Props.name} text604={frame323925Props.text604} className="frame-3239-1" />
          </div>
        </Link>
      </div>
      <Frame194316 {...frame194316Props} />
    </div>
  );
}

export default X105MyCourses;
