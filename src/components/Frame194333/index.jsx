import React from "react";
import Frame1945 from "../Frame1945";
import Frame19442 from "../Frame19442";
import Frame1947 from "../Frame1947";
import Frame1948 from "../Frame1948";
import Frame2303 from "../Frame2303";
import Group1943 from "../Group1943";
import "./Frame194333.css";

function Frame194333(props) {
  const { frame1945Props, frame19442Props, frame1947Props, frame1948Props, frame2303Props, group1943Props } = props;

  return (
    <div className="frame-194334">
      <Frame1945 frame2891Props={frame1945Props.frame2891Props} frameProps={frame1945Props.frameProps} />
      <Frame19442
        frame2847Props={frame19442Props.frame2847Props}
        frame1974Props={frame19442Props.frame1974Props}
        frame19752Props={frame19442Props.frame19752Props}
        frame19742Props={frame19442Props.frame19742Props}
      />
      <Frame1947 text41={frame1947Props.text41} bookProps={frame1947Props.bookProps} />
      <Frame1948 graduationCap={frame1948Props.graduationCap} text42={frame1948Props.text42} />
      <div className="rectangle-85939"></div>
      <Frame2303 vector={frame2303Props.vector} vector2={frame2303Props.vector2} className="frame-230334" />
      <Group1943
        union={group1943Props.union}
        frame2791Props={group1943Props.frame2791Props}
        frame28912Props={group1943Props.frame28912Props}
      />
    </div>
  );
}

export default Frame194333;
