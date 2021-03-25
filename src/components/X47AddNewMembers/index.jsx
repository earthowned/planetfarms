import React from "react";
import { Link } from "react-router-dom";
import Frame19544 from "../Frame19544";
import Frame2901 from "../Frame2901";
import Frame29022 from "../Frame29022";
import Frame194322 from "../Frame194322";
import Layer23 from "../Layer23";
import Searchoutline1 from "../Searchoutline1";
import Frame2906 from "../Frame2906";
import Frame2908 from "../Frame2908";
import "./X47AddNewMembers.css";

function X47AddNewMembers(props) {
  const {
    addMembers,
    search,
    addMembers2,
    frame19544Props,
    frame2901Props,
    frame29022Props,
    frame194322Props,
    layer23Props,
    searchoutline1Props,
    frame2906Props,
    frame29062Props,
    frame2908Props,
    frame29082Props,
    frame29063Props,
    frame29083Props,
  } = props;

  return (
    <div className="x4-7-add-new-members screen ">
      <Frame19544
        ragrariansI520753={frame19544Props.ragrariansI520753}
        frame1951={frame19544Props.frame1951}
        emailoutlineProps={frame19544Props.emailoutlineProps}
        belloutlineProps={frame19544Props.belloutlineProps}
        frame2848Props={frame19544Props.frame2848Props}
      />
      <Frame2901 {...frame2901Props} />
      <Frame29022
        november2020={frame29022Props.november2020}
        addNewEvent={frame29022Props.addNewEvent}
        frame20232Props={frame29022Props.frame20232Props}
      />
      <Frame194322
        frame1945Props={frame194322Props.frame1945Props}
        frame19442Props={frame194322Props.frame19442Props}
        frame1947Props={frame194322Props.frame1947Props}
        frame1948Props={frame194322Props.frame1948Props}
        frame2303Props={frame194322Props.frame2303Props}
        group1943Props={frame194322Props.group1943Props}
      />
      <div className="rectangle-85710"></div>
      <div className="frame-196411">
        <div className="frame-196310">
          <div className="add-members4 ibmplexsans-semi-bold-quarter-spanish-white-24px">{addMembers}</div>
          <a href="javascript:history.back()">
            <div className="close-outline-114">
              <Layer23 closeProps={layer23Props.closeProps} />
            </div>
          </a>
        </div>
        <div className="frame-19807 border-1px-onyx">
          <Searchoutline1
            vector={searchoutline1Props.vector}
            vector2={searchoutline1Props.vector2}
            className="search-outline-12"
          />
          <div className="search4 ibmplexsans-normal-monsoon-16px">{search}</div>
        </div>
        <Frame2906
          frame2904={frame2906Props.frame2904}
          name={frame2906Props.name}
          component1Props={frame2906Props.component1Props}
        />
        <Frame2906
          frame2904={frame29062Props.frame2904}
          name={frame29062Props.name}
          component1Props={frame29062Props.component1Props}
          className="frame-2907"
        />
        <Frame2908
          frame2904={frame2908Props.frame2904}
          name={frame2908Props.name}
          component12Props={frame2908Props.component12Props}
        />
        <Frame2908
          frame2904={frame29082Props.frame2904}
          name={frame29082Props.name}
          component12Props={frame29082Props.component12Props}
          className="frame-2909"
        />
        <Frame2906
          frame2904={frame29063Props.frame2904}
          name={frame29063Props.name}
          component1Props={frame29063Props.component1Props}
          className="frame-2910"
        />
        <Frame2908
          frame2904={frame29083Props.frame2904}
          name={frame29083Props.name}
          component12Props={frame29083Props.component12Props}
          className="frame-2911"
        />
        <Link to="/4-6-add-new-members">
          <div className="frame-28534">
            <div className="add-members-1 valign-text-middle ibmplexsans-semi-bold-shark-16px">{addMembers2}</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default X47AddNewMembers;
