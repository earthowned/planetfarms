import React from "react";
import { Link } from "react-router-dom";
import Frame27974 from "../Frame27974";
import Frame2963 from "../Frame2963";
import Frame2956 from "../Frame2956";
import Frame2955 from "../Frame2955";
import Frame2801 from "../Frame2801";
import Frame29564 from "../Frame29564";
import Frame29582 from "../Frame29582";
import Frame29572 from "../Frame29572";
import Frame29592 from "../Frame29592";
import Frame195421 from "../Frame195421";
import Backbtn14 from "../Backbtn14";
import Frame194328 from "../Frame194328";
import "./X521GroupPageInsideuserView.css";

function X521GroupPageInsideuserView(props) {
  const {
    frame1969,
    frame2815,
    text1191,
    vector,
    frame27974Props,
    frame2963Props,
    frame2956Props,
    frame2955Props,
    frame2801Props,
    frame29564Props,
    frame29582Props,
    frame29572Props,
    frame29592Props,
    frame195421Props,
    backbtn14Props,
    frame194328Props,
  } = props;

  return (
    <div className="x5-2-1-group-page-inside-user-view-1 screen ">
      <div className="frame-27987 border-1px-onyx">
        <div className="frame-27997">
          <Frame27974
            thinkLikeAFarmer={frame27974Props.thinkLikeAFarmer}
            text1180={frame27974Props.text1180}
            dueToTheAdvantage={frame27974Props.dueToTheAdvantage}
          />
          <div className="frame-196918" style={{ backgroundImage: `url(${frame1969})` }}></div>
          <Link to="/521-group-page-inside-user-view">
            <div className="frame-27968 border-0-5px-quarter-spanish-white">
              <Frame2963
                youreFollower={frame2963Props.youreFollower}
                chevronrightoutline1Props={frame2963Props.chevronrightoutline1Props}
              />
            </div>
          </Link>
          <div className="rectangle-87514"></div>
        </div>
        <Frame2956 {...frame2956Props} />
      </div>
      <Frame2955
        frame29562Props={frame2955Props.frame29562Props}
        frame2957Props={frame2955Props.frame2957Props}
        frame2961Props={frame2955Props.frame2961Props}
        className="frame-29552"
      />
      <Frame2801
        frame2807Props={frame2801Props.frame2807Props}
        frame28082Props={frame2801Props.frame28082Props}
        frame280822Props={frame2801Props.frame280822Props}
        frame2810Props={frame2801Props.frame2810Props}
      />
      <div className="frame-29545 border-1px-onyx">
        <Frame29564
          frame2801={frame29564Props.frame2801}
          text1184={frame29564Props.text1184}
          text1185={frame29564Props.text1185}
          text1186={frame29564Props.text1186}
          frame28042Props={frame29564Props.frame28042Props}
          frame28053Props={frame29564Props.frame28053Props}
        />
        <Frame29582
          frame2801={frame29582Props.frame2801}
          name={frame29582Props.name}
          text1187={frame29582Props.text1187}
          text1188={frame29582Props.text1188}
        />
        <Frame29572
          mostNewest={frame29572Props.mostNewest}
          chevronrightoutline1Props={frame29572Props.chevronrightoutline1Props}
        />
        <Frame29592
          frame2801={frame29592Props.frame2801}
          name={frame29592Props.name}
          spanText={frame29592Props.spanText}
          spanText2={frame29592Props.spanText2}
          spanText3={frame29592Props.spanText3}
          text1190={frame29592Props.text1190}
        />
        <div className="frame-29615">
          <div className="frame-28155" style={{ backgroundImage: `url(${frame2815})` }}></div>
          <div className="frame-29603 border-1px-onyx">
            <div className="text-1191 valign-text-middle ibmplexsans-normal-monsoon-16px">{text1191}</div>
            <div className="paper-plane-outline-12">
              <img className="vector26" src={vector} />
            </div>
          </div>
        </div>
      </div>
      <Frame195421
        ragrariansI123225={frame195421Props.ragrariansI123225}
        frame1951={frame195421Props.frame1951}
        text1192={frame195421Props.text1192}
        emailoutlineProps={frame195421Props.emailoutlineProps}
        belloutlineProps={frame195421Props.belloutlineProps}
        personoutline1Props={frame195421Props.personoutline1Props}
      />
      <Backbtn14 place={backbtn14Props.place} iconsArrowsLeftProps={backbtn14Props.iconsArrowsLeftProps} />
      <Frame194328 {...frame194328Props} />
    </div>
  );
}

export default X521GroupPageInsideuserView;
