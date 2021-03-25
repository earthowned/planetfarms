import React from "react";
import Frame2791 from "../Frame2791";
import Frame28912 from "../Frame28912";
import "./Group1943.css";

function Group1943(props) {
  const { union, frame2791Props, frame28912Props } = props;

  return (
    <div className="group-19433">
      <Frame2791 text108={frame2791Props.text108} group1942Props={frame2791Props.group1942Props} />
      <img className="union3" src={union} />
      <Frame28912
        text57={frame28912Props.text57}
        chevronsLeftProps={frame28912Props.chevronsLeftProps}
        chevronsLeft2Props={frame28912Props.chevronsLeft2Props}
      />
    </div>
  );
}

export default Group1943;
