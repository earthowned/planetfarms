import React from "react";
import { Link } from "react-router-dom";
import Frame1945 from "../Frame1945";
import Frame1953 from "../Frame1953";
import Frame19752 from "../Frame19752";
import Frame1947 from "../Frame1947";
import Frame1948 from "../Frame1948";
import Frame2791 from "../Frame2791";
import Frame2303 from "../Frame2303";
import Group1942 from "../Group1942";
import Frame28912 from "../Frame28912";
import "./Frame194315.css";

function Frame194315(props) {
  const {
    text489,
    text491,
    text507,
    union,
    frame1945Props,
    frame1953Props,
    frame19752Props,
    frame1947Props,
    frame1948Props,
    frame2791Props,
    frame2303Props,
    group1942Props,
    frame28912Props,
  } = props;

  return (
    <div className="frame-194316">
      <Frame1945 frame2891Props={frame1945Props.frame2891Props} frameProps={frame1945Props.frameProps} />
      <div className="frame-194415">
        <Link to="/3-community-page-news">
          <div className="frame-284713">
            <Frame1953 text37={frame1953Props.text37} usermanagementProps={frame1953Props.usermanagementProps} />
          </div>
        </Link>
        <Link to="/5-1-all-groups">
          <div className="frame-197414">
            <div className="text-489">{text489}</div>
          </div>
        </Link>
        <Frame19752>{frame19752Props.children}</Frame19752>
        <Link to="/9-1-all-enterprises">
          <div className="frame-19769">
            <div className="text-491">{text491}</div>
          </div>
        </Link>
        <div className="frame-197713"></div>
        <div className="frame-197813"></div>
      </div>
      <Frame1947 text41={frame1947Props.text41} bookProps={frame1947Props.bookProps} />
      <Frame1948 graduationCap={frame1948Props.graduationCap} text42={frame1948Props.text42} />
      <div className="rectangle-85921"></div>
      <Frame2791
        text108={frame2791Props.text108}
        group1942Props={frame2791Props.group1942Props}
        className="frame-2790"
      />
      <Frame2303 vector={frame2303Props.vector} vector2={frame2303Props.vector2} className="frame-230316" />
      <div className="group-19438">
        <div className="frame-27917">
          <div className="rectangle-859-17"></div>
          <Group1942 {...group1942Props} />
          <Link to="/4-2-calendar-with-events">
            <div className="frame-28518 border-1px-caribbean-green">
              <div className="text-507 valign-text-middle">{text507}</div>
            </div>
          </Link>
        </div>
        <img className="union8" src={union} />
        <Frame28912
          text57={frame28912Props.text57}
          chevronsLeftProps={frame28912Props.chevronsLeftProps}
          chevronsLeft2Props={frame28912Props.chevronsLeft2Props}
        />
      </div>
    </div>
  );
}

export default Frame194315;
