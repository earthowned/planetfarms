import React from "react";
import { Link } from "react-router-dom";
import Frame2912 from "../Frame2912";
import Frame19432 from "../Frame19432";
import Frame19543 from "../Frame19543";
import Frame19692 from "../Frame19692";
import Frame19792 from "../Frame19792";
import Frame19693 from "../Frame19693";
import Frame3469 from "../Frame3469";
import Frame3470 from "../Frame3470";
import Frame19793 from "../Frame19793";
import Frame2915 from "../Frame2915";
import "./X3CommunityPagenews.css";

function X3CommunityPagenews(props) {
  const {
    addNews,
    frame1969,
    frame2912Props,
    frame19432Props,
    frame19543Props,
    frame19692Props,
    frame19792Props,
    frame19693Props,
    frame3469Props,
    frame3470Props,
    frame19793Props,
    frame2915Props,
  } = props;

  return (
    <div className="x3-community-page-news screen ">
      <div className="frame-19802 border-1px-onyx">
        <Frame2912 search={frame2912Props.search} searchoutline1Props={frame2912Props.searchoutline1Props} />
      </div>
      <Frame19432 {...frame19432Props} />
      <Frame19543
        ragrariansI1161397={frame19543Props.ragrariansI1161397}
        frame1951={frame19543Props.frame1951}
        text80={frame19543Props.text80}
        layer22Props={frame19543Props.layer22Props}
        belloutlineProps={frame19543Props.belloutlineProps}
        personoutline1Props={frame19543Props.personoutline1Props}
      />
      <Link to="/3-add-news">
        <div className="frame-19833">
          <div className="add-news2 ibmplexsans-semi-bold-shark-16px">{addNews}</div>
        </div>
      </Link>
      <Link to="/3-1-news-page">
        <div className="frame-19572 border-1px-onyx">
          <Frame19692 frame1969={frame19692Props.frame1969} address={frame19692Props.address} />
          <Frame19792
            text82={frame19792Props.text82}
            frame3501Props={frame19792Props.frame3501Props}
            frame2789Props={frame19792Props.frame2789Props}
          />
        </div>
      </Link>
      <Link to="/3-1-news-page">
        <div className="frame-29163 border-1px-onyx">
          <Frame19693 frame1969={frame19693Props.frame1969} frame3470Props={frame19693Props.frame3470Props} />
          <Frame3469
            text84={frame3469Props.text84}
            frame3501Props={frame3469Props.frame3501Props}
            frame2789Props={frame3469Props.frame2789Props}
          />
        </div>
      </Link>
      <Link to="/3-1-news-page">
        <div className="frame-29173 border-1px-onyx">
          <div className="frame-19693" style={{ backgroundImage: `url(${frame1969})` }}></div>
          <div className="rectangle-1201"></div>
          <Frame3470 className="frame-3470-1">{frame3470Props.children}</Frame3470>
          <Frame19793
            text86={frame19793Props.text86}
            date={frame19793Props.date}
            address={frame19793Props.address}
            frame3501Props={frame19793Props.frame3501Props}
            frame1889Props={frame19793Props.frame1889Props}
          />
        </div>
      </Link>
      <Frame2915
        text87={frame2915Props.text87}
        farming={frame2915Props.farming}
        carsIndustry={frame2915Props.carsIndustry}
        mediaNews={frame2915Props.mediaNews}
        people={frame2915Props.people}
        nature={frame2915Props.nature}
        seeAllTopics={frame2915Props.seeAllTopics}
      />
    </div>
  );
}

export default X3CommunityPagenews;
