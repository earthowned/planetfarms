import React from "react";
import { Link } from "react-router-dom";
import Frame1945 from "../Frame1945";
import Frame1953 from "../Frame1953";
import Frame1947 from "../Frame1947";
import Frame1948 from "../Frame1948";
import Frame2303 from "../Frame2303";
import Group1942 from "../Group1942";
import Frame28912 from "../Frame28912";
import "./Frame194321.css";

function Frame194321(props) {
  const {
    text809,
    text810,
    text811,
    text827,
    union,
    frame1945Props,
    frame1953Props,
    frame1947Props,
    frame1948Props,
    frame2303Props,
    group1942Props,
    frame28912Props,
  } = props;

  return (
    <div className="frame-194322">
      <Frame1945 frame2891Props={frame1945Props.frame2891Props} frameProps={frame1945Props.frameProps} />
      <div className="frame-194421">
        <Link to="/3-community-page-news">
          <div className="frame-284719">
            <Frame1953 text37={frame1953Props.text37} usermanagementProps={frame1953Props.usermanagementProps} />
          </div>
        </Link>
        <Link to="/5-1-all-groups">
          <div className="frame-197420">
            <div className="text-83">{text809}</div>
          </div>
        </Link>
        <Link to="/81community-members">
          <div className="frame-197515">
            <div className="text-8">{text810}</div>
          </div>
        </Link>
        <Link to="/9-1-all-enterprises">
          <div className="frame-197615">
            <div className="text-8">{text811}</div>
          </div>
        </Link>
        <div className="frame-197719"></div>
        <div className="frame-197819"></div>
      </div>
      <Frame1947 text41={frame1947Props.text41} bookProps={frame1947Props.bookProps} />
      <Frame1948 graduationCap={frame1948Props.graduationCap} text42={frame1948Props.text42} />
      <div className="rectangle-85927"></div>
      <Frame2303 vector={frame2303Props.vector} vector2={frame2303Props.vector2} className="frame-230322" />
      <div className="group-194314">
        <div className="frame-279113">
          <div className="rectangle-859-113"></div>
          <Group1942 {...group1942Props} />
          <Link to="/4-2-calendar-with-events">
            <div className="frame-28528 border-1px-caribbean-green">
              <div className="text-827 valign-text-middle">{text827}</div>
            </div>
          </Link>
        </div>
        <img className="union14" src={union} />
        <Frame28912
          text57={frame28912Props.text57}
          chevronsLeftProps={frame28912Props.chevronsLeftProps}
          chevronsLeft2Props={frame28912Props.chevronsLeft2Props}
        />
      </div>
    </div>
  );
}

export default Frame194321;
