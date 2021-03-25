import React from "react";
import { Link } from "react-router-dom";
import Frame19544 from "../Frame19544";
import Frame2901 from "../Frame2901";
import Frame29022 from "../Frame29022";
import Frame194322 from "../Frame194322";
import Layer23 from "../Layer23";
import Plusoutline1 from "../Plusoutline1";
import Frame3642 from "../Frame3642";
import "./X45CalendarAddNewEvent.css";

function X45CalendarAddNewEvent(props) {
  const {
    addNewEvent,
    spanText,
    spanText2,
    text910,
    addEvent,
    addMembers,
    spanText3,
    spanText4,
    phone,
    startTime,
    x0300Am,
    frame19544Props,
    frame2901Props,
    frame29022Props,
    frame194322Props,
    layer23Props,
    plusoutline1Props,
    frame3642Props,
  } = props;

  return (
    <div className="x4-5-calendar-add-new-event screen ">
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
      <div className="rectangle-8579"></div>
      <div className="frame-196410">
        <div className="frame-19639">
          <div className="add-new-event3 ibmplexsans-semi-bold-quarter-spanish-white-24px">{addNewEvent}</div>
          <a href="javascript:history.back()">
            <div className="close-outline-113">
              <Layer23 closeProps={layer23Props.closeProps} />
            </div>
          </a>
        </div>
        <div className="frame-6518 border-1px-onyx">
          <div className="frame-19347">
            <div className="frame-917">
              <div className="title2">
                <span className="span017">{spanText}</span>
                <span className="span117">{spanText2}</span>
              </div>
              <p className="text-910 ibmplexsans-normal-quarter-spanish-white-16px">{text910}</p>
            </div>
          </div>
        </div>
        <Link to="/4-2-calendar-with-events">
          <div className="frame-28531">
            <div className="add-event2 valign-text-middle ibmplexsans-semi-bold-shark-16px">{addEvent}</div>
          </div>
        </Link>
        <Link to="/4-7-add-new-members">
          <div className="frame-29244">
            <Plusoutline1 vector={plusoutline1Props.vector} vector2={plusoutline1Props.vector2} />
            <div className="add-members3 valign-text-middle">{addMembers}</div>
          </div>
        </Link>
        <div className="frame-2925 border-1px-onyx">
          <div className="frame-1934-1">
            <div className="frame-9">
              <div className="start-date">
                <span className="span0">{spanText3}</span>
                <span className="span1">{spanText4}</span>
              </div>
              <div className="phone9 ibmplexsans-normal-quarter-spanish-white-16px">{phone}</div>
            </div>
          </div>
        </div>
        <div className="frame-662 border-1px-onyx">
          <div className="frame-1934-2">
            <div className="frame-9">
              <div className="start-time2">{startTime}</div>
              <div className="x0300-am ibmplexsans-normal-quarter-spanish-white-16px">{x0300Am}</div>
            </div>
          </div>
          <Frame3642 am={frame3642Props.am} pm={frame3642Props.pm} />
        </div>
      </div>
    </div>
  );
}

export default X45CalendarAddNewEvent;
