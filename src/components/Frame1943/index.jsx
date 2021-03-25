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
import "./Frame1943.css";

function Frame1943(props) {
  const {
    text38,
    text56,
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
    <div className="frame-19432">
      <Frame1945 frame2891Props={frame1945Props.frame2891Props} frameProps={frame1945Props.frameProps} />
      <div className="frame-19442">
        <Link to="/3-community-page-news">
          <div className="frame-28472">
            <Frame1953 text37={frame1953Props.text37} usermanagementProps={frame1953Props.usermanagementProps} />
          </div>
        </Link>
        <Link to="/5-1-all-groups">
          <div className="frame-1974">
            <div className="text-38 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text38}</div>
          </div>
        </Link>
        <Frame1975>{frame1975Props.children}</Frame1975>
        <Frame1976>{frame1976Props.children}</Frame1976>
        <div className="frame-1977"></div>
        <div className="frame-1978"></div>
      </div>
      <Frame1947 text41={frame1947Props.text41} bookProps={frame1947Props.bookProps} />
      <Frame1948 graduationCap={frame1948Props.graduationCap} text42={frame1948Props.text42} />
      <div className="rectangle-8592"></div>
      <Frame2303 vector={frame2303Props.vector} vector2={frame2303Props.vector2} className="frame-23032" />
      <div className="group-1943">
        <div className="frame-2791">
          <div className="rectangle-859-1"></div>
          <Group1942 {...group1942Props} />
          <Link to="/4-2-calendar-with-events">
            <div className="frame-2857 border-1px-caribbean-green">
              <div className="text-56 valign-text-middle">{text56}</div>
            </div>
          </Link>
        </div>
        <img className="union" src={union} />
        <Frame28912
          text57={frame28912Props.text57}
          chevronsLeftProps={frame28912Props.chevronsLeftProps}
          chevronsLeft2Props={frame28912Props.chevronsLeft2Props}
        />
      </div>
    </div>
  );
}

export default Frame1943;
