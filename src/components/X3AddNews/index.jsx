import React from "react";
import { Link } from "react-router-dom";
import Frame2912 from "../Frame2912";
import Frame194332 from "../Frame194332";
import Frame19544 from "../Frame19544";
import Frame19692 from "../Frame19692";
import Frame19792 from "../Frame19792";
import Frame19693 from "../Frame19693";
import Frame3469 from "../Frame3469";
import Frame3470 from "../Frame3470";
import Frame19793 from "../Frame19793";
import Frame2915 from "../Frame2915";
import Layer23 from "../Layer23";
import "./X3AddNews.css";

function X3AddNews(props) {
  const {
    addNews,
    frame1969,
    addNews2,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    xcontinue,
    frame2912Props,
    frame194332Props,
    frame19544Props,
    frame19692Props,
    frame19792Props,
    frame19693Props,
    frame3469Props,
    frame3470Props,
    frame19793Props,
    frame2915Props,
    layer23Props,
  } = props;

  return (
    <div className="x3-add-news screen ">
      <div className="frame-198011 border-1px-onyx">
        <Frame2912
          search={frame2912Props.search}
          searchoutline1Props={frame2912Props.searchoutline1Props}
          className="frame-29122"
        />
      </div>
      <Frame194332
        frame1945Props={frame194332Props.frame1945Props}
        frame1944Props={frame194332Props.frame1944Props}
        frame1947Props={frame194332Props.frame1947Props}
        frame1948Props={frame194332Props.frame1948Props}
        frame2303Props={frame194332Props.frame2303Props}
        group1943Props={frame194332Props.group1943Props}
      />
      <Frame19544
        ragrariansI520753={frame19544Props.ragrariansI520753}
        frame1951={frame19544Props.frame1951}
        emailoutlineProps={frame19544Props.emailoutlineProps}
        belloutlineProps={frame19544Props.belloutlineProps}
        frame2848Props={frame19544Props.frame2848Props}
      />
      <div className="frame-198311">
        <div className="add-news3 ibmplexsans-semi-bold-shark-16px">{addNews}</div>
      </div>
      <div className="frame-19573 border-1px-onyx">
        <Frame19692 frame1969={frame19692Props.frame1969} address={frame19692Props.address} />
        <Frame19792
          text82={frame19792Props.text82}
          frame3501Props={frame19792Props.frame3501Props}
          frame2789Props={frame19792Props.frame2789Props}
        />
      </div>
      <div className="frame-29165 border-1px-onyx">
        <Frame19693 frame1969={frame19693Props.frame1969} frame3470Props={frame19693Props.frame3470Props} />
        <Frame3469
          text84={frame3469Props.text84}
          frame3501Props={frame3469Props.frame3501Props}
          frame2789Props={frame3469Props.frame2789Props}
        />
      </div>
      <div className="frame-29175 border-1px-onyx">
        <div className="frame-196921" style={{ backgroundImage: `url(${frame1969})` }}></div>
        <div className="rectangle-12013"></div>
        <Frame3470 className="frame-3470-1">{frame3470Props.children}</Frame3470>
        <Frame19793
          text86={frame19793Props.text86}
          date={frame19793Props.date}
          address={frame19793Props.address}
          frame3501Props={frame19793Props.frame3501Props}
          frame1889Props={frame19793Props.frame1889Props}
        />
      </div>
      <Frame2915
        text87={frame2915Props.text87}
        farming={frame2915Props.farming}
        carsIndustry={frame2915Props.carsIndustry}
        mediaNews={frame2915Props.mediaNews}
        people={frame2915Props.people}
        nature={frame2915Props.nature}
        seeAllTopics={frame2915Props.seeAllTopics}
      />
      <div className="rectangle-85715"></div>
      <div className="frame-196416">
        <div className="frame-196315">
          <div className="add-news-1 ibmplexsans-semi-bold-quarter-spanish-white-24px">{addNews2}</div>
          <a href="javascript:history.back()">
            <div className="close-outline-119">
              <Layer23 closeProps={layer23Props.closeProps} />
            </div>
          </a>
        </div>
        <a href="#frame-285">
          <div className="frame-6521 border-1px-onyx">
            <div className="frame-193312"></div>
            <div className="frame-919"></div>
            <div className="news-">
              <span className="span021">{spanText}</span>
              <span className="span121">{spanText2}</span>
            </div>
          </div>
        </a>
        <a href="#frame-285">
          <div className="frame-65-18 border-1px-onyx">
            <div className="frame-1933"></div>
            <div className="frame-9"></div>
            <div className="news-">
              <span className="span0">{spanText3}</span>
              <span className="span1">{spanText4}</span>
            </div>
          </div>
        </a>
        <Link to="/33-add-new-block">
          <div className="frame-28541" id="frame-285">
            <div className="continue5 valign-text-middle ibmplexsans-semi-bold-shark-16px">{xcontinue}</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default X3AddNews;
