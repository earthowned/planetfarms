import React from "react";
import { Link } from "react-router-dom";
import Frame1945 from "../Frame1945";
import Frame1944 from "../Frame1944";
import Frame1947 from "../Frame1947";
import Frame1948 from "../Frame1948";
import Frame2303 from "../Frame2303";
import Group1942 from "../Group1942";
import Frame28912 from "../Frame28912";
import "./Frame194334.css";

function Frame194334(props) {
  const {
    text1422,
    union,
    frame1945Props,
    frame1944Props,
    frame1947Props,
    frame1948Props,
    frame2303Props,
    group1942Props,
    frame28912Props,
  } = props;

  return (
    <div className="frame-194335">
      <Frame1945 frame2891Props={frame1945Props.frame2891Props} frameProps={frame1945Props.frameProps} />
      <Frame1944
        frame2847Props={frame1944Props.frame2847Props}
        frame1976Props={frame1944Props.frame1976Props}
        frame1975Props={frame1944Props.frame1975Props}
        frame19762Props={frame1944Props.frame19762Props}
      />
      <Frame1947 text41={frame1947Props.text41} bookProps={frame1947Props.bookProps} />
      <Frame1948 graduationCap={frame1948Props.graduationCap} text42={frame1948Props.text42} />
      <div className="rectangle-85940"></div>
      <Frame2303 vector={frame2303Props.vector} vector2={frame2303Props.vector2} className="frame-230335" />
      <div className="group-194321">
        <div className="frame-279123">
          <div className="rectangle-859-120"></div>
          <Group1942 {...group1942Props} />
          <Link to="/4-2-calendar-with-events">
            <div className="frame-28545 border-1px-caribbean-green">
              <div className="text-1422 valign-text-middle">{text1422}</div>
            </div>
          </Link>
        </div>
        <img className="union21" src={union} />
        <Frame28912
          text57={frame28912Props.text57}
          chevronsLeftProps={frame28912Props.chevronsLeftProps}
          chevronsLeft2Props={frame28912Props.chevronsLeft2Props}
        />
      </div>
    </div>
  );
}

export default Frame194334;
