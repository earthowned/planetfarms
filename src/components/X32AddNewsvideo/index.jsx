import React from "react";
import { Link } from "react-router-dom";
import Frame19544 from "../Frame19544";
import Backbtn2 from "../Backbtn2";
import Frame19433 from "../Frame19433";
import Frame3067 from "../Frame3067";
import Frame1939 from "../Frame1939";
import Frame43 from "../Frame43";
import Frame1965 from "../Frame1965";
import Frame5 from "../Frame5";
import Layer23 from "../Layer23";
import "./X32AddNewsvideo.css";

function X32AddNewsvideo(props) {
  const {
    text,
    frame317,
    addBlock,
    videoLink,
    text120,
    or,
    addVideo,
    frame19544Props,
    backbtn2Props,
    frame19433Props,
    frame3067Props,
    frame1939Props,
    frame43Props,
    frame1965Props,
    frame5Props,
    layer23Props,
  } = props;

  return (
    <div className="x3-2-add-news-video-1 screen ">
      <Frame19544
        ragrariansI520753={frame19544Props.ragrariansI520753}
        frame1951={frame19544Props.frame1951}
        emailoutlineProps={frame19544Props.emailoutlineProps}
        belloutlineProps={frame19544Props.belloutlineProps}
        frame2848Props={frame19544Props.frame2848Props}
      />
      <Backbtn2 frame2923Props={backbtn2Props.frame2923Props} />
      <Frame19433
        frame1945Props={frame19433Props.frame1945Props}
        frame1944Props={frame19433Props.frame1944Props}
        frame1947Props={frame19433Props.frame1947Props}
        frame1948Props={frame19433Props.frame1948Props}
        frame2303Props={frame19433Props.frame2303Props}
        group1943Props={frame19433Props.group1943Props}
      />
      <div className="frame-2829 border-1px-onyx">
        <Frame3067>{frame3067Props.children}</Frame3067>
        <div className="text valign-text-middle">{text}</div>
        <Frame1939
          frame3317Props={frame1939Props.frame3317Props}
          frame33182Props={frame1939Props.frame33182Props}
          frame3319Props={frame1939Props.frame3319Props}
        />
      </div>
      <div className="rectangle-857"></div>
      <div className="frame-1964">
        <Frame43 videoTitle={frame43Props.videoTitle} name={frame43Props.name} />
        <Frame1965>{frame1965Props.children}</Frame1965>
        <div className="frame-3172" style={{ backgroundImage: `url(${frame317})` }}></div>
        <Link to="/3-3-add-new-block-2">
          <div className="frame-28511">
            <div className="add-block valign-text-middle ibmplexsans-semi-bold-shark-16px">{addBlock}</div>
          </div>
        </Link>
        <div className="frame-3732">
          <div className="frame-1966">
            <div className="frame-659 border-1px-onyx">
              <div className="frame-19336"></div>
              <div className="frame-911">
                <div className="video-link">{videoLink}</div>
                <div className="text-120 ibmplexsans-normal-quarter-spanish-white-16px">{text120}</div>
              </div>
            </div>
          </div>
          <div className="or">{or}</div>
          <Frame5>{frame5Props.children}</Frame5>
        </div>
        <div className="frame-1963">
          <div className="add-video ibmplexsans-semi-bold-quarter-spanish-white-24px">{addVideo}</div>
          <Link to="/33-add-new-block">
            <div className="close-outline-1">
              <Layer23 closeProps={layer23Props.closeProps} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default X32AddNewsvideo;
