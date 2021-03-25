import React from "react";
import Checkmarksquare2outline2 from "../Checkmarksquare2outline2";
import "./Component2.css";

function Component2(props) {
  const { checkmarksquare2outline2Props } = props;

  return (
    <div className="component-2">
      <Checkmarksquare2outline2
        vector={checkmarksquare2outline2Props.vector}
        vector2={checkmarksquare2outline2Props.vector2}
      />
    </div>
  );
}

export default Component2;
