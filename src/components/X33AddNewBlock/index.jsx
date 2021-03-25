import React from "react";
import Frame195422 from "../Frame195422";
import Backbtn15 from "../Backbtn15";
import Frame3067 from "../Frame3067";
import Frame19394 from "../Frame19394";
import Frame194329 from "../Frame194329";
import "./X33AddNewBlock.css";

function X33AddNewBlock(props) {
  const {
    text,
    frame1969,
    name,
    text1215,
    text1216,
    frame2333,
    frame195422Props,
    backbtn15Props,
    frame3067Props,
    frame19394Props,
    frame194329Props,
  } = props;

  return (
    <div className="x3-3-add-new-block-2 screen ">
      <Frame195422
        ragrariansI2892821={frame195422Props.ragrariansI2892821}
        frame1951={frame195422Props.frame1951}
        text1214={frame195422Props.text1214}
        emailProps={frame195422Props.emailProps}
        belloutlineProps={frame195422Props.belloutlineProps}
        personoutline1Props={frame195422Props.personoutline1Props}
      />
      <Backbtn15 place={backbtn15Props.place} iconsArrowsLeftProps={backbtn15Props.iconsArrowsLeftProps} />
      <div className="frame-282912 border-1px-onyx">
        <div className="text6 valign-text-middle">{text}</div>
        <div className="frame-196919" style={{ backgroundImage: `url(${frame1969})` }}></div>
        <p className="name17 ibmplexsans-normal-monsoon-16px">{name}</p>
        <div className="frame-3511">
          <div className="text-1215 ibmplexsans-semi-bold-quarter-spanish-white-24px">{text1215}</div>
          <p className="text-1216 ibmplexsans-normal-quarter-spanish-white-16px">{text1216}</p>
        </div>
        <Frame3067>{frame3067Props.children}</Frame3067>
        <Frame19394
          frame3318Props={frame19394Props.frame3318Props}
          frame33183Props={frame19394Props.frame33183Props}
          frame33184Props={frame19394Props.frame33184Props}
        />
      </div>
      <Frame194329 {...frame194329Props} />
      <img className="frame-2333" src={frame2333} />
    </div>
  );
}

export default X33AddNewBlock;
