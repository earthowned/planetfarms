import React from "react";
import Frame27974 from "../Frame27974";
import Frame2080 from "../Frame2080";
import Frame20802 from "../Frame20802";
import Frame2956 from "../Frame2956";
import Frame2963 from "../Frame2963";
import Frame2955 from "../Frame2955";
import Frame2801 from "../Frame2801";
import Frame29564 from "../Frame29564";
import Frame29582 from "../Frame29582";
import Frame29572 from "../Frame29572";
import Frame29592 from "../Frame29592";
import Frame29612 from "../Frame29612";
import Frame195423 from "../Frame195423";
import Backbtn16 from "../Backbtn16";
import Frame194330 from "../Frame194330";
import "./X521GroupPageInsideuserView2.css";

function X521GroupPageInsideuserView2(props) {
  const {
    frame1969,
    reportGroup,
    frame27974Props,
    frame2080Props,
    frame20802Props,
    frame2956Props,
    frame2963Props,
    frame2955Props,
    frame2801Props,
    frame29564Props,
    frame29582Props,
    frame29572Props,
    frame29592Props,
    frame29612Props,
    frame195423Props,
    backbtn16Props,
    frame194330Props,
  } = props;

  return (
    <div className="x521-group-page-inside-user-view screen ">
      <div className="frame-27988 border-1px-onyx">
        <div className="frame-27998">
          <Frame27974
            thinkLikeAFarmer={frame27974Props.thinkLikeAFarmer}
            text1180={frame27974Props.text1180}
            dueToTheAdvantage={frame27974Props.dueToTheAdvantage}
          />
          <div className="frame-196920" style={{ backgroundImage: `url(${frame1969})` }}></div>
          <div className="rectangle-87517"></div>
          <div className="frame-20796">
            <div className="frame-20813">
              <Frame2080>{frame2080Props.children}</Frame2080>
            </div>
            <div className="frame-20834">
              <Frame20802>{frame20802Props.children}</Frame20802>
            </div>
            <div className="frame-20824">
              <div className="frame-20807">
                <div className="report-group">{reportGroup}</div>
              </div>
            </div>
          </div>
        </div>
        <Frame2956 {...frame2956Props} />
        <div className="frame-27969 border-0-5px-quarter-spanish-white">
          <Frame2963
            youreFollower={frame2963Props.youreFollower}
            chevronrightoutline1Props={frame2963Props.chevronrightoutline1Props}
          />
        </div>
      </div>
      <Frame2955
        frame29562Props={frame2955Props.frame29562Props}
        frame2957Props={frame2955Props.frame2957Props}
        frame2961Props={frame2955Props.frame2961Props}
        className="frame-29553"
      />
      <Frame2801
        frame2807Props={frame2801Props.frame2807Props}
        frame28082Props={frame2801Props.frame28082Props}
        frame280822Props={frame2801Props.frame280822Props}
        frame2810Props={frame2801Props.frame2810Props}
      />
      <div className="frame-29546 border-1px-onyx">
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
        <Frame29612
          frame2815={frame29612Props.frame2815}
          text382={frame29612Props.text382}
          paperplaneoutline1Props={frame29612Props.paperplaneoutline1Props}
        />
      </div>
      <Frame195423
        ragrariansI525151={frame195423Props.ragrariansI525151}
        frame1951={frame195423Props.frame1951}
        text1259={frame195423Props.text1259}
        emailoutlineProps={frame195423Props.emailoutlineProps}
        belloutlineProps={frame195423Props.belloutlineProps}
        personoutline1Props={frame195423Props.personoutline1Props}
      />
      <Backbtn16 place={backbtn16Props.place} iconsArrowsLeftProps={backbtn16Props.iconsArrowsLeftProps} />
      <Frame194330 {...frame194330Props} />
    </div>
  );
}

export default X521GroupPageInsideuserView2;
