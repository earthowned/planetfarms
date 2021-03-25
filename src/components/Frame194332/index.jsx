import React from "react";
import Frame1945 from "../Frame1945";
import Frame1944 from "../Frame1944";
import Frame1947 from "../Frame1947";
import Frame1948 from "../Frame1948";
import Frame2303 from "../Frame2303";
import Group1943 from "../Group1943";
import "./Frame194332.css";

function Frame194332(props) {
  const { frame1945Props, frame1944Props, frame1947Props, frame1948Props, frame2303Props, group1943Props } = props;

  return (
    <div className="frame-194333">
      <Frame1945 frame2891Props={frame1945Props.frame2891Props} frameProps={frame1945Props.frameProps} />
      <Frame1944
        frame2847Props={frame1944Props.frame2847Props}
        frame1976Props={frame1944Props.frame1976Props}
        frame1975Props={frame1944Props.frame1975Props}
        frame19762Props={frame1944Props.frame19762Props}
      />
      <Frame1947 text41={frame1947Props.text41} bookProps={frame1947Props.bookProps} />
      <Frame1948 graduationCap={frame1948Props.graduationCap} text42={frame1948Props.text42} />
      <div className="rectangle-85938"></div>
      <Frame2303 vector={frame2303Props.vector} vector2={frame2303Props.vector2} className="frame-230333" />
      <Group1943
        union={group1943Props.union}
        frame2791Props={group1943Props.frame2791Props}
        frame28912Props={group1943Props.frame28912Props}
      />
    </div>
  );
}

export default Frame194332;
