import React from "react";
import { Link } from "react-router-dom";
import Frame1945 from "../Frame1945";
import Frame1953 from "../Frame1953";
import Frame1947 from "../Frame1947";
import Frame1948 from "../Frame1948";
import Frame2303 from "../Frame2303";
import Group1942 from "../Group1942";
import Frame28912 from "../Frame28912";
import "./Frame19436.css";

function Frame19436(props) {
  const {
    text162,
    text163,
    text164,
    text180,
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
    <div className="frame-19437">
      <Frame1945 frame2891Props={frame1945Props.frame2891Props} frameProps={frame1945Props.frameProps} />
      <div className="frame-19447">
        <Link to="/3-community-page-news">
          <div className="frame-28478">
            <Frame1953 text37={frame1953Props.text37} usermanagementProps={frame1953Props.usermanagementProps} />
          </div>
        </Link>
        <Link to="/5-1-all-groups">
          <div className="frame-19748">
            <div className="text-162">{text162}</div>
          </div>
        </Link>
        <Link to="/81community-members">
          <div className="frame-19754">
            <div className="text-16">{text163}</div>
          </div>
        </Link>
        <Link to="/9-1-all-enterprises">
          <div className="frame-19763">
            <div className="text-16">{text164}</div>
          </div>
        </Link>
        <div className="frame-19776"></div>
        <div className="frame-19786"></div>
      </div>
      <Frame1947 text41={frame1947Props.text41} bookProps={frame1947Props.bookProps} />
      <Frame1948 graduationCap={frame1948Props.graduationCap} text42={frame1948Props.text42} />
      <div className="rectangle-85912"></div>
      <Frame2303 vector={frame2303Props.vector} vector2={frame2303Props.vector2} className="frame-23037" />
      <div className="group-19434">
        <div className="frame-27914">
          <div className="rectangle-859-14"></div>
          <Group1942 {...group1942Props} />
          <Link to="/4-2-calendar-with-events">
            <div className="frame-28513 border-1px-caribbean-green">
              <div className="text-180 valign-text-middle">{text180}</div>
            </div>
          </Link>
        </div>
        <img className="union4" src={union} />
        <Frame28912
          text57={frame28912Props.text57}
          chevronsLeftProps={frame28912Props.chevronsLeftProps}
          chevronsLeft2Props={frame28912Props.chevronsLeft2Props}
        />
      </div>
    </div>
  );
}

export default Frame19436;
