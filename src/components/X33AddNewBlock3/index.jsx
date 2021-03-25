import React from "react";
import Frame195425 from "../Frame195425";
import Backbtn17 from "../Backbtn17";
import Frame3067 from "../Frame3067";
import Frame19396 from "../Frame19396";
import Frame194334 from "../Frame194334";
import "./X33AddNewBlock3.css";

function X33AddNewBlock3(props) {
  const {
    text,
    frame1969,
    name,
    frame2333,
    frame195425Props,
    backbtn17Props,
    frame3067Props,
    frame19396Props,
    frame194334Props,
  } = props;

  return (
    <div className="x33-add-new-block2 screen ">
      <Frame195425
        ragrariansI2854952={frame195425Props.ragrariansI2854952}
        frame1951={frame195425Props.frame1951}
        text1393={frame195425Props.text1393}
        layer22Props={frame195425Props.layer22Props}
        belloutlineProps={frame195425Props.belloutlineProps}
        personoutline1Props={frame195425Props.personoutline1Props}
      />
      <Backbtn17 place={backbtn17Props.place} iconsArrowsLeftProps={backbtn17Props.iconsArrowsLeftProps} />
      <div className="frame-282915 border-1px-onyx">
        <Frame3067>{frame3067Props.children}</Frame3067>
        <div className="text9 valign-text-middle">{text}</div>
        <div className="frame-196924" style={{ backgroundImage: `url(${frame1969})` }}></div>
        <p className="name19 ibmplexsans-normal-monsoon-16px">{name}</p>
        <Frame19396
          frame3318Props={frame19396Props.frame3318Props}
          frame33183Props={frame19396Props.frame33183Props}
          frame33184Props={frame19396Props.frame33184Props}
        />
      </div>
      <Frame194334 {...frame194334Props} />
      <img className="frame-23333" src={frame2333} />
    </div>
  );
}

export default X33AddNewBlock3;
