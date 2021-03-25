import React from "react";
import Frame195424 from "../Frame195424";
import Backbtn2 from "../Backbtn2";
import Frame194331 from "../Frame194331";
import Frame3067 from "../Frame3067";
import Frame19395 from "../Frame19395";
import "./X33AddNewBlock2.css";

function X33AddNewBlock2(props) {
  const { text, frame2333, frame195424Props, backbtn2Props, frame194331Props, frame3067Props, frame19395Props } = props;

  return (
    <div className="x33-add-new-block screen ">
      <Frame195424
        ragrariansI2852566={frame195424Props.ragrariansI2852566}
        frame1951={frame195424Props.frame1951}
        text1281={frame195424Props.text1281}
        layer22Props={frame195424Props.layer22Props}
        belloutlineProps={frame195424Props.belloutlineProps}
        personoutline1Props={frame195424Props.personoutline1Props}
      />
      <Backbtn2 frame2923Props={backbtn2Props.frame2923Props} />
      <Frame194331 {...frame194331Props} />
      <div className="frame-282913 border-1px-onyx">
        <Frame3067>{frame3067Props.children}</Frame3067>
        <div className="text7 valign-text-middle">{text}</div>
        <Frame19395
          frame3318Props={frame19395Props.frame3318Props}
          frame33183Props={frame19395Props.frame33183Props}
          frame33184Props={frame19395Props.frame33184Props}
        />
      </div>
      <img className="frame-23332" src={frame2333} />
    </div>
  );
}

export default X33AddNewBlock2;
