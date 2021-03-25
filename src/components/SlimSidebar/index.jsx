import React from "react";
import { Link } from "react-router-dom";
import Calendaroutline2 from "../Calendaroutline2";
import Frame2891 from "../Frame2891";
import Usermanagement from "../Usermanagement";
import Book from "../Book";
import Frame2303 from "../Frame2303";
import Frame1954 from "../Frame1954";
import Frame1957 from "../Frame1957";
import Frame2916 from "../Frame2916";
import Frame2917 from "../Frame2917";
import Frame2912 from "../Frame2912";
import "./SlimSidebar.css";

function SlimSidebar(props) {
  const {
    mb,
    gr,
    place,
    vector,
    vector2,
    text16,
    farming,
    carsIndustry,
    mediaNews,
    people,
    nature,
    seeAllTopics,
    addNews,
    calendaroutline2Props,
    frame2891Props,
    usermanagementProps,
    bookProps,
    frame2303Props,
    calendaroutline22Props,
    frame1954Props,
    frame1957Props,
    frame2916Props,
    frame2917Props,
    frame2912Props,
  } = props;

  return (
    <div className="slim-sidebar screen ">
      <div className="frame-1943">
        <Link to="/4-2-calendar-with-events">
          <div className="frame-2848">
            <Calendaroutline2
              vector={calendaroutline2Props.vector}
              vector2={calendaroutline2Props.vector2}
              vector3={calendaroutline2Props.vector3}
              vector4={calendaroutline2Props.vector4}
            />
          </div>
        </Link>
        <Link to="/3-community-page-news">
          <div className="frame-1945">
            <Frame2891 gridProps={frame2891Props.gridProps} />
          </div>
        </Link>
        <div className="frame-1944">
          <Link to="/3-community-page-news">
            <div className="frame-2847">
              <div className="frame-1953">
                <Usermanagement
                  vector={usermanagementProps.vector}
                  vector2={usermanagementProps.vector2}
                  vector3={usermanagementProps.vector3}
                  vector4={usermanagementProps.vector4}
                  vector5={usermanagementProps.vector5}
                  vector6={usermanagementProps.vector6}
                />
              </div>
            </div>
          </Link>
          <div className="frame-2848-1">
            <div className="mb valign-text-middle inter-medium-quarter-spanish-white-16px">{mb}</div>
          </div>
          <Link to="/5-1-all-groups">
            <div className="frame-2849">
              <div className="gr valign-text-middle inter-medium-quarter-spanish-white-16px">{gr}</div>
            </div>
          </Link>
          <div className="frame-2850">
            <div className="place valign-text-middle inter-medium-quarter-spanish-white-16px">{place}</div>
          </div>
        </div>
        <div className="frame-1947">
          <div className="frame-198">
            <Book vector={bookProps.vector} vector2={bookProps.vector2} />
          </div>
        </div>
        <div className="frame-1948">
          <div className="frame-198">
            <div className="laptop-1">
              <img className="vector6" src={vector} />
              <img className="vector-114" src={vector2} />
            </div>
          </div>
        </div>
        <div className="rectangle-859"></div>
        <Frame2303 vector={frame2303Props.vector} vector2={frame2303Props.vector2} />
      </div>
      <Calendaroutline2
        vector={calendaroutline22Props.vector}
        vector2={calendaroutline22Props.vector2}
        vector3={calendaroutline22Props.vector3}
        vector4={calendaroutline22Props.vector4}
        className="calendar-outline-1"
      />
      <Frame1954
        ragrariansI5693135={frame1954Props.ragrariansI5693135}
        frame1951={frame1954Props.frame1951}
        text15={frame1954Props.text15}
        emailoutlineProps={frame1954Props.emailoutlineProps}
        belloutlineProps={frame1954Props.belloutlineProps}
        personoutline1Props={frame1954Props.personoutline1Props}
      />
      <div className="frame-2915 border-1px-onyx">
        <div className="frame-2921">
          <p className="text-16">{text16}</p>
        </div>
        <div className="frame-2916 border-class-2">
          <div className="farming inter-medium-quarter-spanish-white-16px">{farming}</div>
        </div>
        <div className="frame-2919 border-class-2">
          <div className="cars-industry inter-medium-quarter-spanish-white-16px">{carsIndustry}</div>
        </div>
        <div className="frame-2920 border-class-2">
          <div className="media-news inter-medium-quarter-spanish-white-16px">{mediaNews}</div>
        </div>
        <div className="frame-2917 border-class-2">
          <div className="people inter-medium-quarter-spanish-white-16px">{people}</div>
        </div>
        <div className="frame-2918 border-class-2">
          <div className="nature inter-medium-quarter-spanish-white-16px">{nature}</div>
        </div>
        <div className="see-all-topics inter-medium-quarter-spanish-white-16px">{seeAllTopics}</div>
      </div>
      <Frame1957 frame1969Props={frame1957Props.frame1969Props} frame1979Props={frame1957Props.frame1979Props} />
      <Frame2916 frame1969Props={frame2916Props.frame1969Props} frame1979Props={frame2916Props.frame1979Props} />
      <Frame2917 frame1969Props={frame2917Props.frame1969Props} frame1979Props={frame2917Props.frame1979Props} />
      <div className="frame-1980 border-1px-onyx">
        <Frame2912 search={frame2912Props.search} searchoutline1Props={frame2912Props.searchoutline1Props} />
      </div>
      <Link to="/3-add-news">
        <div className="frame-1983">
          <div className="add-news ibmplexsans-semi-bold-shark-16px">{addNews}</div>
        </div>
      </Link>
    </div>
  );
}

export default SlimSidebar;
