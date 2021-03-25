import React from "react";
import { Link } from "react-router-dom";
import Searchoutline1 from "../Searchoutline1";
import Funneloutline1 from "../Funneloutline1";
import Chevronrightoutline1 from "../Chevronrightoutline1";
import Frame19592 from "../Frame19592";
import Frame27942 from "../Frame27942";
import Frame27964 from "../Frame27964";
import Frame27892 from "../Frame27892";
import Frame2790 from "../Frame2790";
import Frame27963 from "../Frame27963";
import Frame19544 from "../Frame19544";
import Frame194333 from "../Frame194333";
import Layer23 from "../Layer23";
import Frame48 from "../Frame48";
import Frame1964 from "../Frame1964";
import Frame1965 from "../Frame1965";
import Frame317 from "../Frame317";
import "./X51AllGroupsCreateGroup.css";

function X51AllGroupsCreateGroup(props) {
  const {
    searchGroups,
    filterByCategory,
    allGroups,
    yourGroups,
    createGroup,
    frame1969,
    address,
    date,
    frame19692,
    frame19693,
    text1369,
    createGroup2,
    createGroup3,
    searchoutline1Props,
    funneloutline1Props,
    chevronrightoutline1Props,
    frame19592Props,
    frame27942Props,
    frame27964Props,
    frame195922Props,
    frame279422Props,
    frame27892Props,
    frame2790Props,
    frame279642Props,
    frame195923Props,
    frame279423Props,
    frame278922Props,
    frame27963Props,
    frame19544Props,
    frame194333Props,
    layer23Props,
    frame48Props,
    frame1964Props,
    frame1965Props,
    frame317Props,
  } = props;

  return (
    <div className="x5-1-all-groups-create-group screen ">
      <div className="frame-198012 border-1px-onyx">
        <div className="frame-29136">
          <Searchoutline1 vector={searchoutline1Props.vector} vector2={searchoutline1Props.vector2} />
          <div className="search-groups2 inter-medium-monsoon-16px">{searchGroups}</div>
        </div>
      </div>
      <div className="frame-19896 border-1px-onyx">
        <div className="frame-2914">
          <div className="frame-28173">
            <Funneloutline1 vector={funneloutline1Props.vector} vector2={funneloutline1Props.vector2} />
            <div className="filter-by-category2 inter-medium-quarter-spanish-white-16px">{filterByCategory}</div>
          </div>
          <Chevronrightoutline1
            layer24Props={chevronrightoutline1Props.layer24Props}
            className="chevron-right-outline-19"
          />
        </div>
      </div>
      <div className="frame-19814 border-1px-quarter-spanish-white">
        <div className="all-groups">{allGroups}</div>
      </div>
      <div className="frame-19824 border-class-2">
        <div className="your-groups inter-medium-quarter-spanish-white-16px">{yourGroups}</div>
      </div>
      <div className="frame-198312">
        <div className="create-group2">{createGroup}</div>
      </div>
      <Frame19592
        frame1969={frame19592Props.frame1969}
        x2564Followers={frame19592Props.x2564Followers}
        frame27942Props={frame19592Props.frame27942Props}
        frame2790Props={frame19592Props.frame2790Props}
        frame27963Props={frame19592Props.frame27963Props}
      />
      <div className="frame-19852 border-1px-onyx">
        <div className="frame-1969-12" style={{ backgroundImage: `url(${frame1969})` }}></div>
        <div className="frame-1979-1">
          <Frame27942
            farmers={frame27942Props.farmers}
            thinkLikeAFarmer={frame27942Props.thinkLikeAFarmer}
            className="frame-2794-13"
          />
          <div className="frame-27933">
            <div className="frame-27895">
              <div className="frame-2791-13">
                <div className="address15">{address}</div>
              </div>
            </div>
            <div className="frame-27904">
              <div className="frame-2791-1">
                <div className="date6">{date}</div>
              </div>
            </div>
          </div>
          <Frame27964>{frame27964Props.children}</Frame27964>
        </div>
      </div>
      <Frame19592
        frame1969={frame195922Props.frame1969}
        x2564Followers={frame195922Props.x2564Followers}
        frame27942Props={frame195922Props.frame27942Props}
        frame2790Props={frame195922Props.frame2790Props}
        frame27963Props={frame195922Props.frame27963Props}
        className="frame-19876"
      />
      <div className="frame-19844 border-1px-onyx">
        <div className="frame-1969-1" style={{ backgroundImage: `url(${frame19692})` }}></div>
        <div className="frame-1979-1">
          <Frame27942
            farmers={frame279422Props.farmers}
            thinkLikeAFarmer={frame279422Props.thinkLikeAFarmer}
            className="frame-2794-1"
          />
          <div className="frame-2793-1">
            <Frame27892>{frame27892Props.children}</Frame27892>
            <Frame2790>{frame2790Props.children}</Frame2790>
          </div>
          <Frame27964>{frame279642Props.children}</Frame27964>
        </div>
      </div>
      <Frame19592
        frame1969={frame195923Props.frame1969}
        x2564Followers={frame195923Props.x2564Followers}
        frame27942Props={frame195923Props.frame27942Props}
        frame2790Props={frame195923Props.frame2790Props}
        frame27963Props={frame195923Props.frame27963Props}
        className="frame-19862"
      />
      <div className="frame-198813 border-1px-onyx">
        <div className="frame-1969-1" style={{ backgroundImage: `url(${frame19693})` }}></div>
        <div className="frame-1979-1">
          <Frame27942 farmers={frame279423Props.farmers} thinkLikeAFarmer={frame279423Props.thinkLikeAFarmer} />
          <div className="frame-2793-2">
            <Frame27892>{frame278922Props.children}</Frame27892>
            <div className="frame-2790-1">
              <div className="frame-2791-1">
                <p className="text-1369">{text1369}</p>
              </div>
            </div>
          </div>
          <Frame27963 dontRecommend={frame27963Props.dontRecommend} follow={frame27963Props.follow} />
        </div>
      </div>
      <Frame19544
        ragrariansI520753={frame19544Props.ragrariansI520753}
        frame1951={frame19544Props.frame1951}
        emailoutlineProps={frame19544Props.emailoutlineProps}
        belloutlineProps={frame19544Props.belloutlineProps}
        frame2848Props={frame19544Props.frame2848Props}
      />
      <Frame194333
        frame1945Props={frame194333Props.frame1945Props}
        frame19442Props={frame194333Props.frame19442Props}
        frame1947Props={frame194333Props.frame1947Props}
        frame1948Props={frame194333Props.frame1948Props}
        frame2303Props={frame194333Props.frame2303Props}
        group1943Props={frame194333Props.group1943Props}
      />
      <div className="rectangle-85717"></div>
      <div className="frame-196417">
        <div className="frame-196317">
          <div className="create-group-1 ibmplexsans-semi-bold-quarter-spanish-white-24px">{createGroup2}</div>
          <Link to="/5-1-all-groups">
            <div className="close-outline-121">
              <Layer23 closeProps={layer23Props.closeProps} />
            </div>
          </Link>
        </div>
        <Frame48 spanText={frame48Props.spanText} spanText2={frame48Props.spanText2} />
        <Frame1964
          spanText={frame1964Props.spanText}
          spanText2={frame1964Props.spanText2}
          chevronrightoutline1Props={frame1964Props.chevronrightoutline1Props}
        />
        <Frame1965 className="frame-19653">{frame1965Props.children}</Frame1965>
        <Frame317>{frame317Props.children}</Frame317>
        <Link to="/5-1-all-groups">
          <div className="frame-28544">
            <div className="create-group-2 valign-text-middle ibmplexsans-semi-bold-shark-16px">{createGroup3}</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default X51AllGroupsCreateGroup;
