import React from "react";
import { Link } from "react-router-dom";
import Frame195414 from "../Frame195414";
import Backbtn8 from "../Backbtn8";
import Frame2995 from "../Frame2995";
import Frame2996 from "../Frame2996";
import Frame2994 from "../Frame2994";
import Pdf1 from "../Pdf1";
import Frame2986 from "../Frame2986";
import Layer24 from "../Layer24";
import Frame2985 from "../Frame2985";
import Frame29842 from "../Frame29842";
import Frame27972 from "../Frame27972";
import Frame3003 from "../Frame3003";
import Frame27993 from "../Frame27993";
import Frame2956 from "../Frame2956";
import Frame3479 from "../Frame3479";
import Frame194317 from "../Frame194317";
import "./X93EnterpriseuserView.css";

function X93EnterpriseuserView(props) {
  const {
    text636,
    businessRulesPdf,
    text637,
    showAllDocuments,
    text638,
    frame195414Props,
    backbtn8Props,
    frame2995Props,
    frame2996Props,
    frame2994Props,
    frame29952Props,
    frame29962Props,
    frame29942Props,
    pdf1Props,
    frame2986Props,
    pdf12Props,
    frame29862Props,
    pdf13Props,
    frame29863Props,
    layer24Props,
    frame2985Props,
    frame29842Props,
    frame27972Props,
    frame3003Props,
    frame27993Props,
    frame2956Props,
    frame3479Props,
    frame194317Props,
  } = props;

  return (
    <div className="x9-3-enterprise-user-view screen ">
      <Frame195414
        ragrariansI2093612={frame195414Props.ragrariansI2093612}
        frame1951={frame195414Props.frame1951}
        text631={frame195414Props.text631}
        emailoutlineProps={frame195414Props.emailoutlineProps}
        belloutlineProps={frame195414Props.belloutlineProps}
        personoutline1Props={frame195414Props.personoutline1Props}
      />
      <Backbtn8 place={backbtn8Props.place} iconsArrowsLeftProps={backbtn8Props.iconsArrowsLeftProps} />
      <div className="frame-27983 border-1px-onyx">
        <div className="frame-29825">
          <Frame2995
            text632={frame2995Props.text632}
            component4Props={frame2995Props.component4Props}
            frame2986Props={frame2995Props.frame2986Props}
          />
          <Frame2996
            component4Props={frame2996Props.component4Props}
            frame2833Props={frame2996Props.frame2833Props}
            frame2986Props={frame2996Props.frame2986Props}
          />
          <Frame2994
            text633={frame2994Props.text633}
            component4Props={frame2994Props.component4Props}
            frame2986Props={frame2994Props.frame2986Props}
          />
          <Frame2995
            text632={frame29952Props.text632}
            component4Props={frame29952Props.component4Props}
            frame2986Props={frame29952Props.frame2986Props}
            className="frame-2997"
          />
          <Frame2996
            component4Props={frame29962Props.component4Props}
            frame2833Props={frame29962Props.frame2833Props}
            frame2986Props={frame29962Props.frame2986Props}
            className="frame-2998"
          />
          <Frame2994
            text633={frame29942Props.text633}
            component4Props={frame29942Props.component4Props}
            frame2986Props={frame29942Props.frame2986Props}
            className="frame-2999"
          />
          <div className="frame-3000">
            <div className="frame-2987">
              <div className="frame-2832">
                <Pdf1 group={pdf1Props.group} vector={pdf1Props.vector} vector2={pdf1Props.vector2} />
                <div className="text-636 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text636}</div>
              </div>
              <Frame2986
                vector={frame2986Props.vector}
                vector2={frame2986Props.vector2}
                vector3={frame2986Props.vector3}
                vector4={frame2986Props.vector4}
                vector5={frame2986Props.vector5}
                vector6={frame2986Props.vector6}
              />
            </div>
          </div>
          <div className="frame-3001">
            <div className="frame-2989">
              <div className="frame-2833">
                <Pdf1 group={pdf12Props.group} vector={pdf12Props.vector} vector2={pdf12Props.vector2} />
                <div className="business-rulespdf ibmplexsans-semi-bold-quarter-spanish-white-16px">
                  {businessRulesPdf}
                </div>
              </div>
              <Frame2986
                vector={frame29862Props.vector}
                vector2={frame29862Props.vector2}
                vector3={frame29862Props.vector3}
                vector4={frame29862Props.vector4}
                vector5={frame29862Props.vector5}
                vector6={frame29862Props.vector6}
                className="frame-2986-1"
              />
            </div>
          </div>
          <div className="frame-3002">
            <div className="frame-2988">
              <div className="frame-2834">
                <Pdf1 group={pdf13Props.group} vector={pdf13Props.vector} vector2={pdf13Props.vector2} />
                <div className="text-637 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text637}</div>
              </div>
              <Frame2986
                vector={frame29863Props.vector}
                vector2={frame29863Props.vector2}
                vector3={frame29863Props.vector3}
                vector4={frame29863Props.vector4}
                vector5={frame29863Props.vector5}
                vector6={frame29863Props.vector6}
                className="frame-2986-2"
              />
            </div>
          </div>
          <div className="show-all-documents">{showAllDocuments}</div>
          <div className="rectangle-8758"></div>
          <div className="frame-2982-13">
            <div className="text-638">{text638}</div>
            <Link to="/9-2-enterprise-user-view">
              <div className="chevron-right-outline-112">
                <Layer24 vector={layer24Props.vector} vector2={layer24Props.vector2} className="layer-2-1" />
              </div>
            </Link>
          </div>
          <div className="frame-34363">
            <Link to="/9-4-enterprise-user-view-tasks">
              <div className="frame-30043 border-0-5px-white">
                <Frame2985
                  vector={frame2985Props.vector}
                  vector2={frame2985Props.vector2}
                  vector3={frame2985Props.vector3}
                  tasks={frame2985Props.tasks}
                />
              </div>
            </Link>
            <div className="frame-2798-13">
              <Frame29842
                vector={frame29842Props.vector}
                vector2={frame29842Props.vector2}
                finances={frame29842Props.finances}
              />
            </div>
            <Frame27972
              vector={frame27972Props.vector}
              vector2={frame27972Props.vector2}
              vector3={frame27972Props.vector3}
              reports={frame27972Props.reports}
            />
            <Frame3003 frame29832Props={frame3003Props.frame29832Props} />
          </div>
        </div>
        <Frame27993
          frame1969={frame27993Props.frame1969}
          frame2797Props={frame27993Props.frame2797Props}
          frame2963Props={frame27993Props.frame2963Props}
          frame3423Props={frame27993Props.frame3423Props}
          frame3424Props={frame27993Props.frame3424Props}
          frame2079Props={frame27993Props.frame2079Props}
        />
        <Frame2956 {...frame2956Props} />
      </div>
      <Frame3479 {...frame3479Props} className="frame-34793" />
      <Frame194317 {...frame194317Props} />
    </div>
  );
}

export default X93EnterpriseuserView;
