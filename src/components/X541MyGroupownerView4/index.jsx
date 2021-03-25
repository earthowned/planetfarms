import React from "react";
import { Link } from "react-router-dom";
import Frame19544 from "../Frame19544";
import Frame29552 from "../Frame29552";
import Frame28012 from "../Frame28012";
import Frame3004 from "../Frame3004";
import Frame2954 from "../Frame2954";
import Backbtn2 from "../Backbtn2";
import Frame194327 from "../Frame194327";
import Frame2798 from "../Frame2798";
import Layer23 from "../Layer23";
import Chevronrightoutline1 from "../Chevronrightoutline1";
import IconsCamera from "../IconsCamera";
import Closeoutline1 from "../Closeoutline1";
import Frame415 from "../Frame415";
import Trashoutline1 from "../Trashoutline1";
import "./X541MyGroupownerView4.css";

function X541MyGroupownerView4(props) {
  const {
    editGroup,
    groupTitle,
    natureLovers,
    category,
    ecology,
    text1145,
    frame317,
    updateInformation,
    deleteGroup,
    frame19544Props,
    frame29552Props,
    frame28012Props,
    frame3004Props,
    frame2954Props,
    backbtn2Props,
    frame194327Props,
    frame2798Props,
    layer23Props,
    chevronrightoutline1Props,
    iconsCameraProps,
    closeoutline1Props,
    frame415Props,
    trashoutline1Props,
  } = props;

  return (
    <div className="x541-my-group-owner-view3 screen ">
      <Frame19544
        ragrariansI520753={frame19544Props.ragrariansI520753}
        frame1951={frame19544Props.frame1951}
        emailoutlineProps={frame19544Props.emailoutlineProps}
        belloutlineProps={frame19544Props.belloutlineProps}
        frame2848Props={frame19544Props.frame2848Props}
      />
      <Frame29552 {...frame29552Props} />
      <Frame28012
        searchFilters={frame28012Props.searchFilters}
        frame28083Props={frame28012Props.frame28083Props}
        frame280832Props={frame28012Props.frame280832Props}
        frame28102Props={frame28012Props.frame28102Props}
      />
      <Frame3004 frame1980={frame3004Props.frame1980} frame2956={frame3004Props.frame2956} />
      <Frame2954 {...frame2954Props} />
      <Backbtn2 frame2923Props={backbtn2Props.frame2923Props} />
      <Frame194327
        frame1945Props={frame194327Props.frame1945Props}
        frame19442Props={frame194327Props.frame19442Props}
        frame1947Props={frame194327Props.frame1947Props}
        frame1948Props={frame194327Props.frame1948Props}
        frame2303Props={frame194327Props.frame2303Props}
        group1943Props={frame194327Props.group1943Props}
      />
      <Frame2798 {...frame2798Props} />
      <div className="rectangle-85713"></div>
      <div className="frame-196414">
        <div className="frame-196313">
          <div className="edit-group2 ibmplexsans-semi-bold-quarter-spanish-white-24px">{editGroup}</div>
          <a href="javascript:history.back()">
            <div className="close-outline-117">
              <Layer23 closeProps={layer23Props.closeProps} />
            </div>
          </a>
        </div>
        <div className="frame-421">
          <div className="frame-6520 border-1px-onyx">
            <div className="frame-918">
              <div className="group-title">{groupTitle}</div>
              <div className="nature-lovers4 ibmplexsans-normal-quarter-spanish-white-16px">{natureLovers}</div>
            </div>
          </div>
        </div>
        <div className="frame-1964-13">
          <div className="frame-65-17 border-1px-onyx">
            <Chevronrightoutline1
              layer24Props={chevronrightoutline1Props.layer24Props}
              className="chevron-right-outline-18"
            />
            <div className="frame-9-13">
              <div className="category">{category}</div>
              <div className="ecology2 ibmplexsans-normal-quarter-spanish-white-16px">{ecology}</div>
            </div>
          </div>
        </div>
        <div className="frame-19655">
          <div className="frame-65-22 border-1px-onyx">
            <p className="text-1145 ibmplexsans-normal-quarter-spanish-white-16px">{text1145}</p>
          </div>
        </div>
        <div className="frame-3177" style={{ backgroundImage: `url(${frame317})` }}>
          <div className="frame-23713">
            <div className="rectangle-1033"></div>
            <IconsCamera src={iconsCameraProps.src} />
          </div>
          <Closeoutline1 layer23Props={closeoutline1Props.layer23Props} className="close-outline-15" />
        </div>
        <div className="frame-3733">
          <Frame415>{frame415Props.children}</Frame415>
          <Link to="/5-4-1-my-group-owner-view-4">
            <div className="frame-19663">
              <div className="update-information valign-text-middle ibmplexsans-semi-bold-shark-16px">
                {updateInformation}
              </div>
            </div>
          </Link>
        </div>
        <Link to="/541-my-group-owner-view2">
          <div className="frame-20806">
            <Trashoutline1 vector={trashoutline1Props.vector} vector2={trashoutline1Props.vector2} />
            <div className="delete-group2">{deleteGroup}</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default X541MyGroupownerView4;
