import React from "react";
import { Link } from "react-router-dom";
import Frame19549 from "../Frame19549";
import Backbtn4 from "../Backbtn4";
import Frame2799 from "../Frame2799";
import Chevronrightoutline1 from "../Chevronrightoutline1";
import Layer24 from "../Layer24";
import Frame2956 from "../Frame2956";
import Frame2985 from "../Frame2985";
import Frame29842 from "../Frame29842";
import Frame29832 from "../Frame29832";
import Frame3709 from "../Frame3709";
import Frame3479 from "../Frame3479";
import Frame194312 from "../Frame194312";
import "./X92EnterpriseuserView.css";

function X92EnterpriseuserView(props) {
  const {
    text363,
    text364,
    vector,
    vector2,
    vector3,
    resources,
    text365,
    vector4,
    vector5,
    editInformation,
    frame19549Props,
    backbtn4Props,
    frame2799Props,
    chevronrightoutline1Props,
    layer24Props,
    frame2956Props,
    frame2985Props,
    frame29842Props,
    frame29832Props,
    chevronrightoutline12Props,
    frame3709Props,
    frame37092Props,
    frame37093Props,
    frame37094Props,
    frame37095Props,
    frame37096Props,
    frame37097Props,
    frame37098Props,
    frame37099Props,
    frame3479Props,
    frame194312Props,
  } = props;

  return (
    <div className="x9-2-enterprise-user-view screen ">
      <Frame19549
        ragrariansI1432723={frame19549Props.ragrariansI1432723}
        frame1951={frame19549Props.frame1951}
        text354={frame19549Props.text354}
        emailoutlineProps={frame19549Props.emailoutlineProps}
        belloutlineProps={frame19549Props.belloutlineProps}
        personoutline1Props={frame19549Props.personoutline1Props}
      />
      <Backbtn4 place={backbtn4Props.place} iconsArrowsLeftProps={backbtn4Props.iconsArrowsLeftProps} />
      <div className="frame-2798 border-1px-onyx">
        <Frame2799
          frame1969={frame2799Props.frame1969}
          frame2797Props={frame2799Props.frame2797Props}
          frame2963Props={frame2799Props.frame2963Props}
          frame3423Props={frame2799Props.frame3423Props}
          frame3424Props={frame2799Props.frame3424Props}
        />
        <div className="frame-298">
          <div className="rectangle-87"></div>
          <div className="text-362">{text363}</div>
          <Chevronrightoutline1
            layer24Props={chevronrightoutline1Props.layer24Props}
            className="chevron-right-outline-1-2"
          />
        </div>
        <div className="frame-298">
          <div className="rectangle-87"></div>
          <div className="text-36">{text364}</div>
          <Link to="/9-4-enterprise-user-view-tasks">
            <div className="chevron-right-outline-111">
              <Layer24 vector={layer24Props.vector} vector2={layer24Props.vector2} className="layer-2-1" />
            </div>
          </Link>
        </div>
        <Frame2956 {...frame2956Props} />
        <div className="frame-29845">
          <div className="rectangle-8752"></div>
          <div className="frame-3436">
            <div className="frame-3004 border-1px-quarter-spanish-white">
              <Frame2985
                vector={frame2985Props.vector}
                vector2={frame2985Props.vector2}
                vector3={frame2985Props.vector3}
                tasks={frame2985Props.tasks}
              />
            </div>
            <div className="frame-2798-1 border-1px-quarter-spanish-white">
              <Frame29842
                vector={frame29842Props.vector}
                vector2={frame29842Props.vector2}
                finances={frame29842Props.finances}
              />
            </div>
            <div className="frame-3005 border-1px-quarter-spanish-white">
              <div className="frame-29835">
                <div className="box-1">
                  <img className="vector13" src={vector} />
                  <img className="vector-125" src={vector2} />
                  <img className="vector-214" src={vector3} />
                </div>
                <div className="resources ibmplexsans-semi-bold-shark-16px">{resources}</div>
              </div>
            </div>
            <div className="frame-3003 border-1px-quarter-spanish-white">
              <Frame29832
                materials={frame29832Props.materials}
                filetextoutlineProps={frame29832Props.filetextoutlineProps}
              />
            </div>
          </div>
          <div className="frame-29823">
            <div className="text-365 ibmplexsans-semi-bold-quarter-spanish-white-24px">{text365}</div>
            <Chevronrightoutline1
              layer24Props={chevronrightoutline12Props.layer24Props}
              className="chevron-right-outline-1-4"
            />
          </div>
          <Frame3709 spanText={frame3709Props.spanText} spanText2={frame3709Props.spanText2} />
          <Frame3709 spanText={frame37092Props.spanText} spanText2={frame37092Props.spanText2} className="frame-3712" />
          <Frame3709 spanText={frame37093Props.spanText} spanText2={frame37093Props.spanText2} className="frame-3715" />
          <Frame3709 spanText={frame37094Props.spanText} spanText2={frame37094Props.spanText2} className="frame-3710" />
          <Frame3709 spanText={frame37095Props.spanText} spanText2={frame37095Props.spanText2} className="frame-3713" />
          <Frame3709 spanText={frame37096Props.spanText} spanText2={frame37096Props.spanText2} className="frame-3716" />
          <Frame3709 spanText={frame37097Props.spanText} spanText2={frame37097Props.spanText2} className="frame-3711" />
          <Frame3709 spanText={frame37098Props.spanText} spanText2={frame37098Props.spanText2} className="frame-3714" />
          <Frame3709 spanText={frame37099Props.spanText} spanText2={frame37099Props.spanText2} className="frame-3717" />
          <div className="frame-3440">
            <div className="edit-3">
              <img className="vector-38" src={vector4} />
              <img className="vector-47" src={vector5} />
            </div>
            <div className="edit-information valign-text-middle">{editInformation}</div>
          </div>
          <div className="rectangle-87"></div>
        </div>
      </div>
      <Frame3479 {...frame3479Props} />
      <Frame194312 {...frame194312Props} />
    </div>
  );
}

export default X92EnterpriseuserView;
