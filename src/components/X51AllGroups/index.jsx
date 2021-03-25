import React from "react";
import { Link } from "react-router-dom";
import Searchoutline1 from "../Searchoutline1";
import Frame2817 from "../Frame2817";
import Chevronrightoutline1 from "../Chevronrightoutline1";
import Frame2793 from "../Frame2793";
import Frame52 from "../Frame52";
import Frame53 from "../Frame53";
import Frame2792 from "../Frame2792";
import Frame19545 from "../Frame19545";
import Frame19434 from "../Frame19434";
import "./X51AllGroups.css";

function X51AllGroups(props) {
  const {
    searchGroups,
    allGroups,
    yourGroups,
    createGroup,
    frame1969,
    farmers,
    thinkLikeAFarmer,
    frame19692,
    farmers2,
    thinkLikeAFarmer2,
    unfollow,
    frame19693,
    ecology,
    text121,
    frame19694,
    ecology2,
    text122,
    dontRecommend,
    searchoutline1Props,
    frame2817Props,
    chevronrightoutline1Props,
    frame2793Props,
    frame52Props,
    frame27932Props,
    frame27933Props,
    frame53Props,
    frame2792Props,
    frame27934Props,
    frame27922Props,
    frame19545Props,
    frame19434Props,
  } = props;

  return (
    <div className="x5-1-all-groups screen ">
      <div className="frame-19803 border-1px-onyx">
        <div className="frame-2913">
          <Searchoutline1 vector={searchoutline1Props.vector} vector2={searchoutline1Props.vector2} />
          <div className="search-groups ibmplexsans-normal-monsoon-16px">{searchGroups}</div>
        </div>
      </div>
      <div className="frame-1989 border-1px-onyx">
        <Frame2817
          filterByCategory={frame2817Props.filterByCategory}
          funneloutline1Props={frame2817Props.funneloutline1Props}
        />
        <Chevronrightoutline1 layer24Props={chevronrightoutline1Props.layer24Props} />
      </div>
      <div className="frame-19812 border-1px-quarter-spanish-white">
        <div className="x-groups ibmplexsans-semi-bold-shark-16px">{allGroups}</div>
      </div>
      <div className="frame-1982 border-0-5px-white">
        <div className="x-groups ibmplexsans-semi-bold-quarter-spanish-white-16px">{yourGroups}</div>
      </div>
      <Link to="/5-1-all-groups-create-group">
        <div className="frame-19834">
          <div className="create-group ibmplexsans-semi-bold-shark-16px">{createGroup}</div>
        </div>
      </Link>
      <Link to="/5-2-1-group-page-inside-user-view-1">
        <div className="frame-1959 border-1px-onyx">
          <div className="frame-19696" style={{ backgroundImage: `url(${frame1969})` }}></div>
          <div className="frame-2794-1">
            <div className="farmers">{farmers}</div>
            <div className="think-like-a-farmer ibmplexsans-semi-bold-quarter-spanish-white-24px">
              {thinkLikeAFarmer}
            </div>
          </div>
          <div className="frame-3477-1">
            <Frame2793 x2564Followers={frame2793Props.x2564Followers} date={frame2793Props.date} />
            <Frame52>{frame52Props.children}</Frame52>
          </div>
        </div>
      </Link>
      <Link to="/5-2-1-group-page-inside-user-view-1">
        <div className="frame-1991 border-1px-onyx">
          <div className="frame-1969" style={{ backgroundImage: `url(${frame19692})` }}></div>
          <div className="frame-2794-1">
            <div className="farmers-1">{farmers2}</div>
            <div className="think-like-a-farmer-1">{thinkLikeAFarmer2}</div>
          </div>
          <div className="frame-3477-1">
            <Frame2793 x2564Followers={frame27932Props.x2564Followers} date={frame27932Props.date} />
            <div className="frame-2796">
              <div className="frame-2795 border-0-5px-quarter-spanish-white">
                <div className="unfollow ibmplexsans-semi-bold-quarter-spanish-white-16px">{unfollow}</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/5-4-1-my-group-owner-view-4">
        <div className="frame-1990 border-1px-onyx">
          <div className="frame-1969" style={{ backgroundImage: `url(${frame19693})` }}></div>
          <div className="frame-2794">
            <div className="ecology">{ecology}</div>
            <div className="text-121 ibmplexsans-semi-bold-quarter-spanish-white-24px">{text121}</div>
          </div>
          <div className="frame-3477">
            <Frame2793 x2564Followers={frame27933Props.x2564Followers} date={frame27933Props.date} />
            <div className="frame-2796-1">
              <Frame53>{frame53Props.children}</Frame53>
              <Frame2792>{frame2792Props.children}</Frame2792>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/5-2-1-group-page-inside-user-view-1">
        <div className="frame-1992 border-1px-onyx">
          <div className="frame-1969" style={{ backgroundImage: `url(${frame19694})` }}></div>
          <div className="frame-2794">
            <div className="ecology-1">{ecology2}</div>
            <div className="text-122">{text122}</div>
          </div>
          <div className="frame-3477">
            <Frame2793 x2564Followers={frame27934Props.x2564Followers} date={frame27934Props.date} />
            <div className="frame-2796-1">
              <div className="frame-2795-1 border-0-5px-quarter-spanish-white">
                <div className="dont-recommend ibmplexsans-semi-bold-quarter-spanish-white-16px">{dontRecommend}</div>
              </div>
              <Frame2792>{frame27922Props.children}</Frame2792>
            </div>
          </div>
        </div>
      </Link>
      <Frame19545
        ragrariansI1169649={frame19545Props.ragrariansI1169649}
        frame1951={frame19545Props.frame1951}
        text123={frame19545Props.text123}
        emailoutlineProps={frame19545Props.emailoutlineProps}
        belloutlineProps={frame19545Props.belloutlineProps}
        personoutline1Props={frame19545Props.personoutline1Props}
      />
      <Frame19434 {...frame19434Props} />
    </div>
  );
}

export default X51AllGroups;
