import React from "react";
import { Link } from "react-router-dom";
import Frame19544 from "../Frame19544";
import Frame194310 from "../Frame194310";
import Backbtn2 from "../Backbtn2";
import Frame30672 from "../Frame30672";
import Frame19392 from "../Frame19392";
import Layer23 from "../Layer23";
import IconsCamera from "../IconsCamera";
import Closeoutline1 from "../Closeoutline1";
import Frame3444 from "../Frame3444";
import Frame43 from "../Frame43";
import "./X341AddNewBlockfilled.css";

function X341AddNewBlockfilled(props) {
  const {
    text,
    addPhoto,
    frame317,
    addBlock,
    frame19544Props,
    frame194310Props,
    backbtn2Props,
    frame30672Props,
    frame19392Props,
    layer23Props,
    iconsCameraProps,
    closeoutline1Props,
    frame3444Props,
    frame43Props,
  } = props;

  return (
    <div className="x3-4-1-add-new-block-filled screen ">
      <Frame19544
        ragrariansI520753={frame19544Props.ragrariansI520753}
        frame1951={frame19544Props.frame1951}
        emailoutlineProps={frame19544Props.emailoutlineProps}
        belloutlineProps={frame19544Props.belloutlineProps}
        frame2848Props={frame19544Props.frame2848Props}
      />
      <Frame194310
        frame1945Props={frame194310Props.frame1945Props}
        frame19442Props={frame194310Props.frame19442Props}
        frame1947Props={frame194310Props.frame1947Props}
        frame1948Props={frame194310Props.frame1948Props}
        frame2303Props={frame194310Props.frame2303Props}
        group1943Props={frame194310Props.group1943Props}
      />
      <Backbtn2 frame2923Props={backbtn2Props.frame2923Props} />
      <div className="frame-28294 border-1px-onyx">
        <Frame30672>{frame30672Props.children}</Frame30672>
        <div className="text2 valign-text-middle">{text}</div>
        <Frame19392
          addVideo={frame19392Props.addVideo}
          addImage={frame19392Props.addImage}
          addText={frame19392Props.addText}
          videooutlineProps={frame19392Props.videooutlineProps}
          cameraoutlineProps={frame19392Props.cameraoutlineProps}
          filetextoutlineProps={frame19392Props.filetextoutlineProps}
        />
      </div>
      <div className="rectangle-8572"></div>
      <div className="frame-19642">
        <div className="frame-19632">
          <div className="add-photo ibmplexsans-semi-bold-quarter-spanish-white-24px">{addPhoto}</div>
          <Link to="/33-add-new-block">
            <div className="close-outline-16">
              <Layer23 closeProps={layer23Props.closeProps} />
            </div>
          </Link>
        </div>
        <div className="frame-3509">
          <div className="frame-3582">
            <div className="frame-3173" style={{ backgroundImage: `url(${frame317})` }}>
              <div className="frame-2371">
                <div className="rectangle-103"></div>
                <IconsCamera src={iconsCameraProps.src} />
              </div>
              <Closeoutline1 layer23Props={closeoutline1Props.layer23Props} className="close-outline-13" />
            </div>
          </div>
          <div className="frame-3583">
            <Frame3444 text317={frame3444Props.text317} frame2278Props={frame3444Props.frame2278Props} />
            <Frame43 videoTitle={frame43Props.videoTitle} name={frame43Props.name} className="frame-48" />
            <Link to="/33-add-new-block2">
              <div className="frame-28515">
                <div className="add-block2 valign-text-middle ibmplexsans-semi-bold-shark-16px">{addBlock}</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default X341AddNewBlockfilled;
