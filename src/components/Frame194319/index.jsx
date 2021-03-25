import React from "react";
import { Link } from "react-router-dom";
import Frame1945 from "../Frame1945";
import Frame1953 from "../Frame1953";
import Frame1947 from "../Frame1947";
import Frame1948 from "../Frame1948";
import Frame2303 from "../Frame2303";
import Group1942 from "../Group1942";
import Frame28912 from "../Frame28912";
import "./Frame194319.css";

function Frame194319(props) {
  const {
    text742,
    text743,
    text744,
    text760,
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
    <div className="frame-194320">
      <Frame1945 frame2891Props={frame1945Props.frame2891Props} frameProps={frame1945Props.frameProps} />
      <div className="frame-194419">
        <Link to="/3-community-page-news">
          <div className="frame-284717">
            <Frame1953 text37={frame1953Props.text37} usermanagementProps={frame1953Props.usermanagementProps} />
          </div>
        </Link>
        <Link to="/5-1-all-groups">
          <div className="frame-197418">
            <div className="text-74">{text742}</div>
          </div>
        </Link>
        <Link to="/81community-members">
          <div className="frame-197513">
            <div className="text-74">{text743}</div>
          </div>
        </Link>
        <Link to="/9-1-all-enterprises">
          <div className="frame-197613">
            <div className="text-74">{text744}</div>
          </div>
        </Link>
        <div className="frame-197717"></div>
        <div className="frame-197817"></div>
      </div>
      <Frame1947 text41={frame1947Props.text41} bookProps={frame1947Props.bookProps} />
      <Frame1948 graduationCap={frame1948Props.graduationCap} text42={frame1948Props.text42} />
      <div className="rectangle-85925"></div>
      <Frame2303 vector={frame2303Props.vector} vector2={frame2303Props.vector2} className="frame-230320" />
      <div className="group-194312">
        <div className="frame-279111">
          <div className="rectangle-859-111"></div>
          <Group1942 {...group1942Props} />
          <Link to="/4-2-calendar-with-events">
            <div className="frame-28526 border-1px-caribbean-green">
              <div className="text-760 valign-text-middle">{text760}</div>
            </div>
          </Link>
        </div>
        <img className="union12" src={union} />
        <Frame28912
          text57={frame28912Props.text57}
          chevronsLeftProps={frame28912Props.chevronsLeftProps}
          chevronsLeft2Props={frame28912Props.chevronsLeft2Props}
        />
      </div>
    </div>
  );
}

export default Frame194319;
