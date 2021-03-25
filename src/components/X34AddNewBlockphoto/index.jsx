import React from "react";
import { Link } from "react-router-dom";
import Frame19544 from "../Frame19544";
import Frame194310 from "../Frame194310";
import Backbtn2 from "../Backbtn2";
import IconsCamera from "../IconsCamera";
import Frame19392 from "../Frame19392";
import Frame30672 from "../Frame30672";
import Layer23 from "../Layer23";
import Frame3444 from "../Frame3444";
import "./X34AddNewBlockphoto.css";

function X34AddNewBlockphoto(props) {
  const {
    text562,
    text563,
    loremIpsum,
    frame2762,
    frame317,
    line2,
    vector,
    vector2,
    vector3,
    text564,
    text,
    text2,
    text565,
    addMaterials,
    addPhoto,
    text566,
    spanText,
    spanText2,
    addBlock,
    frame19544Props,
    frame194310Props,
    backbtn2Props,
    iconsCameraProps,
    frame19392Props,
    frame30672Props,
    layer23Props,
    frame3444Props,
  } = props;

  return (
    <div className="x3-4-add-new-block-photo screen ">
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
      <div className="frame-28296 border-1px-onyx">
        <div className="frame-30673">
          <div className="text-562">{text562}</div>
          <div className="frame-3314">
            <p className="text-563 inter-medium-quarter-spanish-white-16px">{text563}</p>
            <div className="rectangle-877"></div>
            <div className="lorem-ipsum">{loremIpsum}</div>
            <img className="frame-2762" src={frame2762} />
          </div>
          <div className="frame-3175" style={{ backgroundImage: `url(${frame317})` }}>
            <div className="frame-23712">
              <div className="rectangle-1032"></div>
              <IconsCamera src={iconsCameraProps.src} />
            </div>
          </div>
          <img className="line-2" src={line2} />
          <div className="frame-3315">
            <div className="info-1">
              <img className="vector17" src={vector} />
              <img className="vector-130" src={vector2} />
              <img className="vector-218" src={vector3} />
            </div>
            <p className="text-564">{text564}</p>
          </div>
        </div>
        <div className="text3 valign-text-middle">{text}</div>
        <Frame19392
          addVideo={frame19392Props.addVideo}
          addImage={frame19392Props.addImage}
          addText={frame19392Props.addText}
          videooutlineProps={frame19392Props.videooutlineProps}
          cameraoutlineProps={frame19392Props.cameraoutlineProps}
          filetextoutlineProps={frame19392Props.filetextoutlineProps}
          className="frame-19393"
        />
      </div>
      <div className="frame-2830 border-1px-onyx">
        <Frame30672 className="frame-3273">{frame30672Props.children}</Frame30672>
        <div className="text valign-text-middle">{text2}</div>
        <p className="text-565 inter-medium-monsoon-16px">{text565}</p>
        <div className="frame-3313 border-1px-quarter-spanish-white">
          <div className="add-materials">{addMaterials}</div>
        </div>
      </div>
      <div className="rectangle-8575"></div>
      <div className="frame-19646">
        <div className="frame-19635">
          <div className="add-photo2 ibmplexsans-semi-bold-quarter-spanish-white-24px">{addPhoto}</div>
          <a href="javascript:history.back()">
            <div className="close-outline-19">
              <Layer23 closeProps={layer23Props.closeProps} />
            </div>
          </a>
        </div>
        <div className="frame-3507">
          <Link to="/3-4-1-add-new-block-filled">
            <div className="frame-317-1 border-1px-quarter-spanish-white">
              <p className="text-566 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{text566}</p>
            </div>
          </Link>
          <Frame3444
            text317={frame3444Props.text317}
            frame2278Props={frame3444Props.frame2278Props}
            className="frame-34442"
          />
          <div className="frame-3445">
            <div className="frame-6514 border-1px-onyx">
              <div className="frame-19338"></div>
              <div className="photo-description">
                <span className="span012">{spanText}</span>
                <span className="span112">{spanText2}</span>
              </div>
            </div>
          </div>
          <Link to="/33-add-new-block">
            <div className="frame-28520">
              <div className="add-block3 valign-text-middle ibmplexsans-semi-bold-shark-16px">{addBlock}</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default X34AddNewBlockphoto;
