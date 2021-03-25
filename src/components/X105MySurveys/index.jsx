import React from "react";
import Frame195417 from "../Frame195417";
import Backbtn12 from "../Backbtn12";
import Frame194320 from "../Frame194320";
import Frame1959 from "../Frame1959";
import Frame1961 from "../Frame1961";
import "./X105MySurveys.css";

function X105MySurveys(props) {
  const {
    frame195417Props,
    backbtn12Props,
    frame194320Props,
    frame1959Props,
    frame1961Props,
    frame19592Props,
    frame19612Props,
  } = props;

  return (
    <div className="x10-5-my-surveys screen ">
      <Frame195417
        ragrariansI1671287={frame195417Props.ragrariansI1671287}
        frame1951={frame195417Props.frame1951}
        text762={frame195417Props.text762}
        emailoutlineProps={frame195417Props.emailoutlineProps}
        belloutlineProps={frame195417Props.belloutlineProps}
        personoutline1Props={frame195417Props.personoutline1Props}
      />
      <Backbtn12 place={backbtn12Props.place} iconsArrowsLeftProps={backbtn12Props.iconsArrowsLeftProps} />
      <Frame194320 {...frame194320Props} />
      <Frame1959
        frame1969={frame1959Props.frame1969}
        frame2794Props={frame1959Props.frame2794Props}
        frame27932Props={frame1959Props.frame27932Props}
        frame411Props={frame1959Props.frame411Props}
        frame27922Props={frame1959Props.frame27922Props}
      />
      <Frame1961
        frame1969={frame1961Props.frame1969}
        dismiss={frame1961Props.dismiss}
        frame2794Props={frame1961Props.frame2794Props}
        frame27932Props={frame1961Props.frame27932Props}
        frame27922Props={frame1961Props.frame27922Props}
      />
      <Frame1959
        frame1969={frame19592Props.frame1969}
        frame2794Props={frame19592Props.frame2794Props}
        frame27932Props={frame19592Props.frame27932Props}
        frame411Props={frame19592Props.frame411Props}
        frame27922Props={frame19592Props.frame27922Props}
        className="frame-1960"
      />
      <Frame1961
        frame1969={frame19612Props.frame1969}
        dismiss={frame19612Props.dismiss}
        frame2794Props={frame19612Props.frame2794Props}
        frame27932Props={frame19612Props.frame27932Props}
        frame27922Props={frame19612Props.frame27922Props}
        className="frame-1962"
      />
    </div>
  );
}

export default X105MySurveys;
