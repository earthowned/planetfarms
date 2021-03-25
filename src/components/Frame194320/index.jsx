import React from "react";
import { Link } from "react-router-dom";
import Frame1945 from "../Frame1945";
import Frame1953 from "../Frame1953";
import Frame1947 from "../Frame1947";
import Frame1948 from "../Frame1948";
import Frame2303 from "../Frame2303";
import Group1942 from "../Group1942";
import Frame28912 from "../Frame28912";
import "./Frame194320.css";

function Frame194320(props) {
  const {
    text764,
    text765,
    text766,
    text782,
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
    <div className="frame-194321">
      <Frame1945 frame2891Props={frame1945Props.frame2891Props} frameProps={frame1945Props.frameProps} />
      <div className="frame-194420">
        <Link to="/3-community-page-news">
          <div className="frame-284718">
            <Frame1953 text37={frame1953Props.text37} usermanagementProps={frame1953Props.usermanagementProps} />
          </div>
        </Link>
        <Link to="/5-1-all-groups">
          <div className="frame-197419">
            <div className="text-76">{text764}</div>
          </div>
        </Link>
        <Link to="/81community-members">
          <div className="frame-197514">
            <div className="text-76">{text765}</div>
          </div>
        </Link>
        <Link to="/9-1-all-enterprises">
          <div className="frame-197614">
            <div className="text-76">{text766}</div>
          </div>
        </Link>
        <div className="frame-197718"></div>
        <div className="frame-197818"></div>
      </div>
      <Frame1947 text41={frame1947Props.text41} bookProps={frame1947Props.bookProps} />
      <Frame1948 graduationCap={frame1948Props.graduationCap} text42={frame1948Props.text42} />
      <div className="rectangle-85926"></div>
      <Frame2303 vector={frame2303Props.vector} vector2={frame2303Props.vector2} className="frame-230321" />
      <div className="group-194313">
        <div className="frame-279112">
          <div className="rectangle-859-112"></div>
          <Group1942 {...group1942Props} />
          <Link to="/4-2-calendar-with-events">
            <div className="frame-28527 border-1px-caribbean-green">
              <div className="text-782 valign-text-middle">{text782}</div>
            </div>
          </Link>
        </div>
        <img className="union13" src={union} />
        <Frame28912
          text57={frame28912Props.text57}
          chevronsLeftProps={frame28912Props.chevronsLeftProps}
          chevronsLeft2Props={frame28912Props.chevronsLeft2Props}
        />
      </div>
    </div>
  );
}

export default Frame194320;
