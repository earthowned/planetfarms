import React from "react";
import Frame1889 from "../Frame1889";
import Backbtn from "../Backbtn";
import Frame1943 from "../Frame1943";
import Frame19542 from "../Frame19542";
import "./X31NewsPage.css";

function X31NewsPage(props) {
  const {
    dueToTheAdvantage,
    dueToTheAdvantage2,
    text34,
    frame1969,
    text35,
    text36,
    f_1_,
    yourBusinessGoals,
    shape,
    yourBusinessGoals2,
    frame1889Props,
    backbtnProps,
    frame1943Props,
    frame19542Props,
  } = props;

  return (
    <div className="x3-1-news-page screen ">
      <div className="frame-2488">
        <div className="due-to-the-advantage valign-text-middle">{dueToTheAdvantage}</div>
        <Frame1889 src={frame1889Props.src} />
        <div className="due-to-the-advantage-1 valign-text-middle">{dueToTheAdvantage2}</div>
      </div>
      <div className="text-34 valign-text-middle">{text34}</div>
      <div className="frame-19692" style={{ backgroundImage: `url(${frame1969})` }}></div>
      <p className="text-35 valign-text-middle ibmplexsans-normal-quarter-spanish-white-16px">{text35}</p>
      <p className="text-36 valign-text-middle ibmplexsans-normal-quarter-spanish-white-16px">{text36}</p>
      <div className="button-secondary-default border-0-5px-quarter-spanish-white">
        <div className="icons-social-facebook">
          <img className="f1" src={f_1_} />
        </div>
        <div className="your-business-goals valign-text-middle">{yourBusinessGoals}</div>
      </div>
      <div className="button-secondary-default-1 border-0-5px-quarter-spanish-white">
        <div className="icons-social-facebook">
          <img className="shape" src={shape} />
        </div>
        <div className="your-business-goals valign-text-middle">{yourBusinessGoals2}</div>
      </div>
      <Backbtn place={backbtnProps.place} iconsArrowsLeftProps={backbtnProps.iconsArrowsLeftProps} />
      <div className="rectangle-1196"></div>
      <Frame1943 {...frame1943Props} />
      <Frame19542
        ragrariansI519741={frame19542Props.ragrariansI519741}
        frame1951={frame19542Props.frame1951}
        text58={frame19542Props.text58}
        layer22Props={frame19542Props.layer22Props}
        belloutlineProps={frame19542Props.belloutlineProps}
        personoutline1Props={frame19542Props.personoutline1Props}
      />
    </div>
  );
}

export default X31NewsPage;
