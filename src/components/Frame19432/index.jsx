import React from "react";
import { Link } from "react-router-dom";
import Grid from "../Grid";
import Frame from "../Frame";
import Frame2847 from "../Frame2847";
import Frame1975 from "../Frame1975";
import Frame1976 from "../Frame1976";
import Frame1947 from "../Frame1947";
import Frame1948 from "../Frame1948";
import Frame2303 from "../Frame2303";
import Group1942 from "../Group1942";
import Frame28912 from "../Frame28912";
import "./Frame19432.css";

function Frame19432(props) {
  const {
    text60,
    text78,
    union,
    gridProps,
    frameProps,
    frame2847Props,
    frame1975Props,
    frame1976Props,
    frame1947Props,
    frame1948Props,
    frame2303Props,
    group1942Props,
    frame28912Props,
  } = props;

  return (
    <div className="frame-19433">
      <div className="frame-19453">
        <Link to="/slim-sidebar">
          <div className="frame-28914 border-1px-quarter-spanish-white">
            <Grid
              vector={gridProps.vector}
              vector2={gridProps.vector2}
              vector3={gridProps.vector3}
              vector4={gridProps.vector4}
            />
          </div>
        </Link>
        <Frame
          group={frameProps.group}
          vector={frameProps.vector}
          vector2={frameProps.vector2}
          vector3={frameProps.vector3}
          vector4={frameProps.vector4}
          vector5={frameProps.vector5}
        />
      </div>
      <div className="frame-19443">
        <Frame2847 frame1953Props={frame2847Props.frame1953Props} />
        <Link to="/5-1-all-groups">
          <div className="frame-19746">
            <div className="text-60 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text60}</div>
          </div>
        </Link>
        <Frame1975>{frame1975Props.children}</Frame1975>
        <Frame1976>{frame1976Props.children}</Frame1976>
        <div className="frame-19772"></div>
        <div className="frame-19782"></div>
      </div>
      <Frame1947 text41={frame1947Props.text41} bookProps={frame1947Props.bookProps} />
      <Frame1948 graduationCap={frame1948Props.graduationCap} text42={frame1948Props.text42} />
      <div className="rectangle-8597"></div>
      <Frame2303 vector={frame2303Props.vector} vector2={frame2303Props.vector2} className="frame-23033" />
      <div className="group-19432">
        <div className="frame-27912">
          <div className="rectangle-859-13"></div>
          <Group1942 {...group1942Props} />
          <Link to="/4-2-calendar-with-events">
            <div className="frame-28510 border-1px-caribbean-green">
              <div className="text-78 valign-text-middle">{text78}</div>
            </div>
          </Link>
        </div>
        <img className="union2" src={union} />
        <Frame28912
          text57={frame28912Props.text57}
          chevronsLeftProps={frame28912Props.chevronsLeftProps}
          chevronsLeft2Props={frame28912Props.chevronsLeft2Props}
        />
      </div>
    </div>
  );
}

export default Frame19432;
