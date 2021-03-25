import React from "react";
import { Link } from "react-router-dom";
import Frame19544 from "../Frame19544";
import Frame194310 from "../Frame194310";
import Backbtn2 from "../Backbtn2";
import Frame2829 from "../Frame2829";
import Layer23 from "../Layer23";
import "./X33AddNewBlocktext2.css";

function X33AddNewBlocktext2(props) {
  const {
    addText,
    addBlock,
    textTitle,
    text1447,
    text1448,
    frame19544Props,
    frame194310Props,
    backbtn2Props,
    frame2829Props,
    layer23Props,
  } = props;

  return (
    <div className="x33-add-new-block-text screen ">
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
      <Frame2829
        text={frame2829Props.text}
        frame1969={frame2829Props.frame1969}
        name={frame2829Props.name}
        frame3067Props={frame2829Props.frame3067Props}
        frame3317Props={frame2829Props.frame3317Props}
        frame33182Props={frame2829Props.frame33182Props}
        frame3319Props={frame2829Props.frame3319Props}
      />
      <div className="rectangle-85718"></div>
      <div className="frame-196418">
        <div className="frame-196318">
          <div className="add-text2 ibmplexsans-semi-bold-quarter-spanish-white-24px">{addText}</div>
          <Link to="/33-add-new-block2">
            <div className="close-outline-122">
              <Layer23 closeProps={layer23Props.closeProps} />
            </div>
          </Link>
        </div>
        <Link to="/3-3-add-new-block-2">
          <div className="frame-28546">
            <div className="add-block5 valign-text-middle ibmplexsans-semi-bold-shark-16px">{addBlock}</div>
          </div>
        </Link>
        <div className="frame-425">
          <div className="frame-6523 border-1px-onyx">
            <div className="frame-193314"></div>
            <div className="frame-921"></div>
            <div className="frame-19349">
              <div className="text-title2">{textTitle}</div>
              <p className="text-1447 ibmplexsans-normal-quarter-spanish-white-16px">{text1447}</p>
            </div>
          </div>
        </div>
        <div className="frame-65-110 border-1px-onyx">
          <div className="frame-1933-14"></div>
          <p className="text-1448 ibmplexsans-normal-quarter-spanish-white-16px">{text1448}</p>
        </div>
      </div>
    </div>
  );
}

export default X33AddNewBlocktext2;
