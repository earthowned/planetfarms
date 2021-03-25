import React from "react";
import { Link } from "react-router-dom";
import Frame19548 from "../Frame19548";
import Frame45 from "../Frame45";
import Frame3007 from "../Frame3007";
import Frame3060 from "../Frame3060";
import Frame3061 from "../Frame3061";
import Frame3063 from "../Frame3063";
import Frame2970 from "../Frame2970";
import Frame46 from "../Frame46";
import Frame47 from "../Frame47";
import Frame19438 from "../Frame19438";
import "./X101MyDashboard.css";

function X101MyDashboard(props) {
  const {
    frame2818,
    mikhailUgryumov,
    text242,
    text243,
    myCommunities,
    vector,
    vector2,
    myProfile,
    vector3,
    vector4,
    achievements,
    vector5,
    vector6,
    surveys,
    vector7,
    vector8,
    myLibrary,
    vector9,
    vector10,
    myCourses,
    frame3060,
    text248,
    vector11,
    vector12,
    addCourse,
    vector13,
    vector14,
    vector15,
    vector16,
    myGroups,
    frame2926,
    frame19548Props,
    frame45Props,
    frame3007Props,
    frame3060Props,
    frame3061Props,
    frame30612Props,
    frame3063Props,
    frame2970Props,
    frame46Props,
    frame30072Props,
    frame30632Props,
    frame29702Props,
    frame47Props,
    frame30602Props,
    frame30613Props,
    frame30614Props,
    frame30633Props,
    frame29703Props,
    frame29704Props,
    frame29705Props,
    frame19438Props,
  } = props;

  return (
    <div className="x10-1-my-dashboard screen ">
      <Frame19548
        ragrariansI1454626={frame19548Props.ragrariansI1454626}
        frame1951={frame19548Props.frame1951}
        emailoutlineProps={frame19548Props.emailoutlineProps}
        belloutlineProps={frame19548Props.belloutlineProps}
        frame2848Props={frame19548Props.frame2848Props}
      />
      <div className="frame-28293 border-1px-onyx">
        <div className="frame-3012">
          <div className="frame-28182" style={{ backgroundImage: `url(${frame2818})` }}></div>
          <div className="frame-3017">
            <div className="mikhail-ugryumov ibmplexsans-semi-bold-quarter-spanish-white-24px">{mikhailUgryumov}</div>
            <p className="text-242 ibmplexsans-normal-monsoon-16px">{text242}</p>
          </div>
          <div className="frame-3016">
            <div className="text-243 ibmplexsans-normal-monsoon-16px">{text243}</div>
            <div className="my-communities">{myCommunities}</div>
          </div>
        </div>
        <Link to="/10-4-my-personals-1">
          <div className="frame-3007 border-1px-onyx">
            <div className="frame-3011">
              <div className="user">
                <img className="vector12" src={vector} />
                <img className="vector-121" src={vector2} />
              </div>
              <div className="my-profile ibmplexsans-semi-bold-quarter-spanish-white-16px">{myProfile}</div>
            </div>
          </div>
        </Link>
        <Link to="/10-2-my-achievements">
          <div className="frame-3013 border-1px-onyx">
            <div className="frame-3011-1">
              <div className="award">
                <img className="vector-213" src={vector3} />
                <img className="vector-37" src={vector4} />
              </div>
              <div className="achievements ibmplexsans-semi-bold-quarter-spanish-white-16px">{achievements}</div>
            </div>
          </div>
        </Link>
        <Link to="/10-5-my-surveys">
          <div className="frame-3014 border-1px-onyx">
            <div className="frame-3011-2">
              <div className="check-square-1">
                <img className="vector-46" src={vector5} />
                <img className="vector-55" src={vector6} />
              </div>
              <div className="surveys ibmplexsans-semi-bold-quarter-spanish-white-16px">{surveys}</div>
            </div>
          </div>
        </Link>
      </div>
      <div className="frame-3296 border-1px-onyx">
        <div className="frame-2818-1">
          <div className="frame-329">
            <div className="book3">
              <img className="vector-65" src={vector7} />
              <img className="vector-75" src={vector8} />
            </div>
            <div className="my-library ibmplexsans-semi-bold-quarter-spanish-white-24px">{myLibrary}</div>
            <Frame45>{frame45Props.children}</Frame45>
          </div>
        </div>
        <Frame3007 src={frame3007Props.src} />
        <Frame3060
          frame3060={frame3060Props.frame3060}
          text244={frame3060Props.text244}
          frame1971Props={frame3060Props.frame1971Props}
        />
        <Frame3061 frame3061={frame3061Props.frame3061} text245={frame3061Props.text245} />
        <Frame3061 frame3061={frame30612Props.frame3061} text245={frame30612Props.text245} className="frame-3064" />
        <Frame3063 frame3063={frame3063Props.frame3063} group={frame3063Props.group} text247={frame3063Props.text247} />
        <Frame2970 vector={frame2970Props.vector} vector2={frame2970Props.vector2} />
        <div className="frame-2818-2">
          <div className="frame-329">
            <div className="book-open-1">
              <img className="vector-85" src={vector9} />
              <img className="vector-95" src={vector10} />
            </div>
            <div className="my-courses ibmplexsans-semi-bold-quarter-spanish-white-24px">{myCourses}</div>
            <Frame46>{frame46Props.children}</Frame46>
          </div>
        </div>
        <Frame3007 src={frame30072Props.src} className="frame-3007-2" />
        <div className="frame-3060 border-class-1">
          <img className="frame-3060-1" src={frame3060} />
          <p className="text-248 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{text248}</p>
        </div>
        <Frame3063
          frame3063={frame30632Props.frame3063}
          group={frame30632Props.group}
          text247={frame30632Props.text247}
          className="frame-3063-1"
        />
        <Frame2970 vector={frame29702Props.vector} vector2={frame29702Props.vector2} className="frame-2970-1" />
        <div className="frame-3062 border-1px-onyx">
          <div className="frame-2739">
            <div className="plus-1">
              <img className="vector-105" src={vector11} />
              <img className="vector-1110" src={vector12} />
            </div>
            <div className="add-course">{addCourse}</div>
          </div>
        </div>
        <div className="frame-2818-3">
          <div className="frame-329">
            <div className="users-1">
              <img className="vector-124" src={vector13} />
              <img className="vector-134" src={vector14} />
              <img className="vector-144" src={vector15} />
              <img className="vector-154" src={vector16} />
            </div>
            <div className="my-groups ibmplexsans-semi-bold-quarter-spanish-white-24px">{myGroups}</div>
            <Frame47>{frame47Props.children}</Frame47>
          </div>
        </div>
        <img className="frame-2926" src={frame2926} />
        <Frame3060
          frame3060={frame30602Props.frame3060}
          text244={frame30602Props.text244}
          frame1971Props={frame30602Props.frame1971Props}
          className="frame-3060-4"
        />
        <Frame3061 frame3061={frame30613Props.frame3061} text245={frame30613Props.text245} className="frame-3061-2" />
        <Frame3061 frame3061={frame30614Props.frame3061} text245={frame30614Props.text245} className="frame-3064-1" />
        <Frame3063
          frame3063={frame30633Props.frame3063}
          group={frame30633Props.group}
          text247={frame30633Props.text247}
          className="frame-3063-2"
        />
        <Frame2970 vector={frame29703Props.vector} vector2={frame29703Props.vector2} className="frame-2970-2" />
        <Frame2970 vector={frame29704Props.vector} vector2={frame29704Props.vector2} className="frame-3065" />
        <Frame2970 vector={frame29705Props.vector} vector2={frame29705Props.vector2} className="frame-3065-1" />
      </div>
      <Frame19438 {...frame19438Props} />
    </div>
  );
}

export default X101MyDashboard;
