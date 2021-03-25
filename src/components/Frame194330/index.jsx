import React from "react";
import { Link } from "react-router-dom";
import Frame1945 from "../Frame1945";
import Frame1953 from "../Frame1953";
import Frame1975 from "../Frame1975";
import Frame1976 from "../Frame1976";
import Frame1947 from "../Frame1947";
import Frame1948 from "../Frame1948";
import Frame2303 from "../Frame2303";
import Group1942 from "../Group1942";
import Frame28912 from "../Frame28912";
import "./Frame194330.css";

function Frame194330(props) {
  const {
    text1261,
    text1279,
    union,
    frame1945Props,
    frame1953Props,
    frame1975Props,
    frame1976Props,
    frame1947Props,
    frame1948Props,
    frame2303Props,
    group1942Props,
    frame28912Props,
  } = props;

  return (
    <div className="frame-194331">
      <Frame1945 frame2891Props={frame1945Props.frame2891Props} frameProps={frame1945Props.frameProps} />
      <div className="frame-194428">
        <Link to="/3-community-page-news">
          <div className="frame-284726">
            <Frame1953 text37={frame1953Props.text37} usermanagementProps={frame1953Props.usermanagementProps} />
          </div>
        </Link>
        <Link to="/5-1-all-groups">
          <div className="frame-197425">
            <div className="text-1261 ibmplexsans-semi-bold-shark-16px">{text1261}</div>
          </div>
        </Link>
        <Frame1975>{frame1975Props.children}</Frame1975>
        <Frame1976>{frame1976Props.children}</Frame1976>
        <div className="frame-197726"></div>
        <div className="frame-197826"></div>
      </div>
      <Frame1947 text41={frame1947Props.text41} bookProps={frame1947Props.bookProps} />
      <Frame1948 graduationCap={frame1948Props.graduationCap} text42={frame1948Props.text42} />
      <div className="rectangle-85936"></div>
      <Frame2303 vector={frame2303Props.vector} vector2={frame2303Props.vector2} className="frame-230331" />
      <div className="group-194319">
        <div className="frame-279118">
          <div className="rectangle-859-118"></div>
          <Group1942 {...group1942Props} />
          <Link to="/4-2-calendar-with-events">
            <div className="frame-28539 border-1px-caribbean-green">
              <div className="text-1279 valign-text-middle">{text1279}</div>
            </div>
          </Link>
        </div>
        <img className="union19" src={union} />
        <Frame28912
          text57={frame28912Props.text57}
          chevronsLeftProps={frame28912Props.chevronsLeftProps}
          chevronsLeft2Props={frame28912Props.chevronsLeft2Props}
        />
      </div>
    </div>
  );
}

export default Frame194330;
