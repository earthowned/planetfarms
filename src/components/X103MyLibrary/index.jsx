import React from "react";
import Frame195416 from "../Frame195416";
import Backbtn11 from "../Backbtn11";
import Frame3040 from "../Frame3040";
import Frame30402 from "../Frame30402";
import Frame194319 from "../Frame194319";
import Frame1980 from "../Frame1980";
import Frame1989 from "../Frame1989";
import "./X103MyLibrary.css";

function X103MyLibrary(props) {
  const {
    articles,
    videos,
    frame195416Props,
    backbtn11Props,
    frame3040Props,
    frame30402Props,
    frame30403Props,
    frame304022Props,
    frame304023Props,
    frame194319Props,
    frame1980Props,
    frame1989Props,
  } = props;

  return (
    <div className="x10-3-my-library screen ">
      <Frame195416
        ragrariansI1511233={frame195416Props.ragrariansI1511233}
        frame1951={frame195416Props.frame1951}
        text734={frame195416Props.text734}
        emailoutlineProps={frame195416Props.emailoutlineProps}
        belloutlineProps={frame195416Props.belloutlineProps}
        personoutline1Props={frame195416Props.personoutline1Props}
      />
      <Backbtn11 place={backbtn11Props.place} iconsArrowsLeftProps={backbtn11Props.iconsArrowsLeftProps} />
      <div className="frame-28299 border-1px-onyx">
        <div className="frame-3237">
          <Frame3040
            frame3040={frame3040Props.frame3040}
            farming={frame3040Props.farming}
            text735={frame3040Props.text735}
            address={frame3040Props.address}
          />
          <Frame3040
            frame3040={frame30402Props.frame3040}
            farming={frame30402Props.farming}
            text735={frame30402Props.text735}
            address={frame30402Props.address}
            className="frame-30412"
          />
          <Frame3040
            frame3040={frame30403Props.frame3040}
            farming={frame30403Props.farming}
            text735={frame30403Props.text735}
            address={frame30403Props.address}
            className="frame-3042"
          />
          <div className="articles2 valign-text-middle inter-medium-quarter-spanish-white-16px">{articles}</div>
        </div>
        <div className="frame-3238">
          <Frame30402
            frame3040={frame30402Props.frame3040}
            text738={frame30402Props.text738}
            frame1971Props={frame30402Props.frame1971Props}
          />
          <Frame30402
            frame3040={frame304022Props.frame3040}
            text738={frame304022Props.text738}
            frame1971Props={frame304022Props.frame1971Props}
            className="frame-30413"
          />
          <Frame30402
            frame3040={frame304023Props.frame3040}
            text738={frame304023Props.text738}
            frame1971Props={frame304023Props.frame1971Props}
            className="frame-30422"
          />
          <div className="videos2 valign-text-middle inter-medium-quarter-spanish-white-16px">{videos}</div>
        </div>
      </div>
      <Frame194319 {...frame194319Props} />
      <Frame1980
        searchEnterprises={frame1980Props.searchEnterprises}
        searchoutline1Props={frame1980Props.searchoutline1Props}
        className="frame-19805"
      />
      <Frame1989
        frame2817Props={frame1989Props.frame2817Props}
        chevronrightoutline1Props={frame1989Props.chevronrightoutline1Props}
        className="frame-19894"
      />
    </div>
  );
}

export default X103MyLibrary;
