import React from "react";
import { Link } from "react-router-dom";
import Frame1945 from "../Frame1945";
import Frame1953 from "../Frame1953";
import Frame1947 from "../Frame1947";
import Frame1948 from "../Frame1948";
import Frame2303 from "../Frame2303";
import Group1943 from "../Group1943";
import "./Frame19435.css";

function Frame19435(props) {
  const {
    text135,
    text136,
    text137,
    frame1945Props,
    frame1953Props,
    frame1947Props,
    frame1948Props,
    frame2303Props,
    group1943Props,
  } = props;

  return (
    <div className="frame-19436">
      <Frame1945 frame2891Props={frame1945Props.frame2891Props} frameProps={frame1945Props.frameProps} />
      <div className="frame-19446">
        <Link to="/3-community-page-news">
          <div className="frame-28477">
            <Frame1953 text37={frame1953Props.text37} usermanagementProps={frame1953Props.usermanagementProps} />
          </div>
        </Link>
        <Link to="/5-1-all-groups">
          <div className="frame-19747">
            <div className="text-13 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text135}</div>
          </div>
        </Link>
        <Link to="/81community-members">
          <div className="frame-19753">
            <div className="text-13 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text136}</div>
          </div>
        </Link>
        <Link to="/9-1-all-enterprises">
          <div className="frame-19762">
            <div className="text-13 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text137}</div>
          </div>
        </Link>
        <div className="frame-19775"></div>
        <div className="frame-19785"></div>
      </div>
      <Frame1947 text41={frame1947Props.text41} bookProps={frame1947Props.bookProps} />
      <Frame1948 graduationCap={frame1948Props.graduationCap} text42={frame1948Props.text42} />
      <div className="rectangle-85911"></div>
      <Frame2303 vector={frame2303Props.vector} vector2={frame2303Props.vector2} className="frame-23036" />
      <Group1943
        union={group1943Props.union}
        frame2791Props={group1943Props.frame2791Props}
        frame28912Props={group1943Props.frame28912Props}
      />
    </div>
  );
}

export default Frame19435;
