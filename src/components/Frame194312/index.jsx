import React from "react";
import { Link } from "react-router-dom";
import Frame1945 from "../Frame1945";
import Frame2847 from "../Frame2847";
import Frame1974 from "../Frame1974";
import Frame1947 from "../Frame1947";
import Frame1948 from "../Frame1948";
import Frame2303 from "../Frame2303";
import Group1943 from "../Group1943";
import "./Frame194312.css";

function Frame194312(props) {
  const {
    text385,
    text386,
    frame1945Props,
    frame2847Props,
    frame1974Props,
    frame1947Props,
    frame1948Props,
    frame2303Props,
    group1943Props,
  } = props;

  return (
    <div className="frame-194313">
      <Frame1945 frame2891Props={frame1945Props.frame2891Props} frameProps={frame1945Props.frameProps} />
      <div className="frame-194412">
        <Frame2847 frame1953Props={frame2847Props.frame1953Props} className="frame-28475" />
        <Frame1974>{frame1974Props.children}</Frame1974>
        <Link to="/81community-members">
          <div className="frame-19758">
            <div className="text-385">{text385}</div>
          </div>
        </Link>
        <Link to="/9-1-all-enterprises">
          <div className="frame-19767">
            <div className="text-386">{text386}</div>
          </div>
        </Link>
        <div className="frame-197710"></div>
        <div className="frame-197810"></div>
      </div>
      <Frame1947 text41={frame1947Props.text41} bookProps={frame1947Props.bookProps} />
      <Frame1948 graduationCap={frame1948Props.graduationCap} text42={frame1948Props.text42} />
      <div className="rectangle-85918"></div>
      <Frame2303 vector={frame2303Props.vector} vector2={frame2303Props.vector2} className="frame-230313" />
      <Group1943
        union={group1943Props.union}
        frame2791Props={group1943Props.frame2791Props}
        frame28912Props={group1943Props.frame28912Props}
      />
    </div>
  );
}

export default Frame194312;
