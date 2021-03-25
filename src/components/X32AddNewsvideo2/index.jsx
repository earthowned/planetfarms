import React from "react";
import { Link } from "react-router-dom";
import Frame19544 from "../Frame19544";
import Backbtn2 from "../Backbtn2";
import Frame1939 from "../Frame1939";
import Frame19433 from "../Frame19433";
import Layer23 from "../Layer23";
import Frame5 from "../Frame5";
import "./X32AddNewsvideo2.css";

function X32AddNewsvideo2(props) {
  const {
    writeTitleHere,
    text,
    addVideo,
    spanText,
    spanText2,
    videoDescription,
    text884,
    addVideoBlock,
    videoLink,
    or,
    frame19544Props,
    backbtn2Props,
    frame1939Props,
    frame19433Props,
    layer23Props,
    frame5Props,
  } = props;

  return (
    <div className="x32-add-news-video screen ">
      <Frame19544
        ragrariansI520753={frame19544Props.ragrariansI520753}
        frame1951={frame19544Props.frame1951}
        emailoutlineProps={frame19544Props.emailoutlineProps}
        belloutlineProps={frame19544Props.belloutlineProps}
        frame2848Props={frame19544Props.frame2848Props}
      />
      <Backbtn2 frame2923Props={backbtn2Props.frame2923Props} />
      <div className="frame-282911 border-1px-onyx">
        <div className="frame-30676">
          <div className="write-title-here">{writeTitleHere}</div>
          <div className="rectangle-1202"></div>
        </div>
        <div className="text5 valign-text-middle">{text}</div>
        <Frame1939
          frame3317Props={frame1939Props.frame3317Props}
          frame33182Props={frame1939Props.frame33182Props}
          frame3319Props={frame1939Props.frame3319Props}
        />
      </div>
      <Frame19433
        frame1945Props={frame19433Props.frame1945Props}
        frame1944Props={frame19433Props.frame1944Props}
        frame1947Props={frame19433Props.frame1947Props}
        frame1948Props={frame19433Props.frame1948Props}
        frame2303Props={frame19433Props.frame2303Props}
        group1943Props={frame19433Props.group1943Props}
      />
      <div className="rectangle-8578"></div>
      <div className="frame-19649">
        <div className="frame-19638">
          <div className="add-video2 ibmplexsans-semi-bold-quarter-spanish-white-24px">{addVideo}</div>
          <a href="javascript:history.back()">
            <div className="close-outline-112">
              <Layer23 closeProps={layer23Props.closeProps} />
            </div>
          </a>
        </div>
        <Link to="/3-2-add-news-video-1">
          <div className="frame-417">
            <div className="frame-6517 border-1px-onyx">
              <div className="frame-1933-12"></div>
              <div className="frame-916"></div>
              <div className="video-title2">
                <span className="span016">{spanText}</span>
                <span className="span116">{spanText2}</span>
              </div>
            </div>
          </div>
        </Link>
        <div className="frame-19654">
          <Link to="/3-2-add-news-video-1">
            <div className="frame-65-15 border-1px-onyx">
              <div className="frame-193310"></div>
              <div className="video-description ibmplexsans-normal-monsoon-16px">{videoDescription}</div>
            </div>
          </Link>
        </div>
        <Link to="/3-2-add-news-video-1">
          <div className="frame-3176 border-1px-quarter-spanish-white">
            <p className="text-884 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{text884}</p>
          </div>
        </Link>
        <Link to="/33-add-new-block">
          <div className="frame-28530">
            <div className="add-video-block valign-text-middle ibmplexsans-semi-bold-shark-16px">{addVideoBlock}</div>
          </div>
        </Link>
        <Link to="/3-2-add-news-video-1">
          <div className="frame-3731">
            <div className="frame-65-2 border-1px-onyx">
              <div className="frame-1933-1"></div>
              <div className="video-link2 ibmplexsans-normal-monsoon-16px">{videoLink}</div>
            </div>
            <div className="or3 inter-medium-monsoon-16px">{or}</div>
            <Frame5>{frame5Props.children}</Frame5>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default X32AddNewsvideo2;
