import React from "react";
import { Link } from "react-router-dom";
import Frame19544 from "../Frame19544";
import Frame2901 from "../Frame2901";
import Frame29022 from "../Frame29022";
import Frame194322 from "../Frame194322";
import Layer23 from "../Layer23";
import Plusoutline1 from "../Plusoutline1";
import "./X44CalendarAddNewEvent.css";

function X44CalendarAddNewEvent(props) {
  const {
    addNewEvent,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    startTime,
    addEvent,
    addMembers,
    frame19544Props,
    frame2901Props,
    frame29022Props,
    frame194322Props,
    layer23Props,
    plusoutline1Props,
  } = props;

  return (
    <div className="x4-4-calendar-add-new-event screen ">
      <Frame19544
        ragrariansI520753={frame19544Props.ragrariansI520753}
        frame1951={frame19544Props.frame1951}
        emailoutlineProps={frame19544Props.emailoutlineProps}
        belloutlineProps={frame19544Props.belloutlineProps}
        frame2848Props={frame19544Props.frame2848Props}
      />
      <Frame2901 {...frame2901Props} />
      <Frame29022
        november2020={frame29022Props.november2020}
        addNewEvent={frame29022Props.addNewEvent}
        frame20232Props={frame29022Props.frame20232Props}
      />
      <Frame194322
        frame1945Props={frame194322Props.frame1945Props}
        frame19442Props={frame194322Props.frame19442Props}
        frame1947Props={frame194322Props.frame1947Props}
        frame1948Props={frame194322Props.frame1948Props}
        frame2303Props={frame194322Props.frame2303Props}
        group1943Props={frame194322Props.group1943Props}
      />
      <div className="rectangle-8577"></div>
      <div className="frame-19648">
        <div className="frame-19637">
          <div className="add-new-event ibmplexsans-semi-bold-quarter-spanish-white-24px">{addNewEvent}</div>
          <a href="javascript:history.back()">
            <div className="close-outline-111">
              <Layer23 closeProps={layer23Props.closeProps} />
            </div>
          </a>
        </div>
        <Link to="/4-5-calendar-add-new-event">
          <div className="frame-6516 border-1px-onyx">
            <div className="title">
              <span className="span015">{spanText}</span>
              <span className="span115">{spanText2}</span>
            </div>
          </div>
        </Link>
        <Link to="/4-5-calendar-add-new-event">
          <div className="frame-1964-1">
            <div className="frame-65-14 border-1px-onyx">
              <div className="choose-date">
                <span className="span0">{spanText3}</span>
                <span className="span1">{spanText4}</span>
              </div>
            </div>
            <div className="frame-66 border-1px-onyx">
              <div className="start-time ibmplexsans-normal-monsoon-16px">{startTime}</div>
            </div>
          </div>
        </Link>
        <Link to="/4-2-calendar-with-events">
          <div className="frame-28529">
            <div className="add-event valign-text-middle ibmplexsans-semi-bold-shark-16px">{addEvent}</div>
          </div>
        </Link>
        <Link to="/4-7-add-new-members">
          <div className="frame-29243">
            <Plusoutline1 vector={plusoutline1Props.vector} vector2={plusoutline1Props.vector2} />
            <div className="add-members valign-text-middle">{addMembers}</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default X44CalendarAddNewEvent;
