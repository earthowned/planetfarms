import React from "react";
import { Link } from "react-router-dom";
import Frame195412 from "../Frame195412";
import Backbtn6 from "../Backbtn6";
import Chevronrightoutline1 from "../Chevronrightoutline1";
import Frame2985 from "../Frame2985";
import Frame29842 from "../Frame29842";
import Frame27972 from "../Frame27972";
import Frame3003 from "../Frame3003";
import Frame2067 from "../Frame2067";
import Frame27992 from "../Frame27992";
import Frame29563 from "../Frame29563";
import Frame3479 from "../Frame3479";
import Frame194315 from "../Frame194315";
import "./X94EnterpriseuserViewTasks.css";

function X94EnterpriseuserViewTasks(props) {
  const {
    showAllTasks,
    text450,
    spanText,
    spanText2,
    text452,
    spanText3,
    spanText4,
    frame195412Props,
    backbtn6Props,
    chevronrightoutline1Props,
    frame2985Props,
    frame29842Props,
    frame27972Props,
    frame3003Props,
    frame27992Props,
    frame29563Props,
    frame3479Props,
    frame194315Props,
  } = props;

  return (
    <div className="x9-4-enterprise-user-view-tasks screen ">
      <Frame195412
        ragrariansI384293={frame195412Props.ragrariansI384293}
        frame1951={frame195412Props.frame1951}
        text449={frame195412Props.text449}
        emailoutlineProps={frame195412Props.emailoutlineProps}
        belloutlineProps={frame195412Props.belloutlineProps}
        personoutline1Props={frame195412Props.personoutline1Props}
      />
      <Backbtn6 place={backbtn6Props.place} iconsArrowsLeftProps={backbtn6Props.iconsArrowsLeftProps} />
      <div className="frame-27982 border-1px-onyx">
        <div className="frame-29824">
          <div className="show-all-tasks">{showAllTasks}</div>
          <div className="rectangle-8756"></div>
          <div className="frame-2982-12">
            <div className="text-450">{text450}</div>
            <Chevronrightoutline1
              layer24Props={chevronrightoutline1Props.layer24Props}
              className="chevron-right-outline-16"
            />
          </div>
          <div className="frame-34362">
            <div className="frame-30042">
              <Frame2985
                vector={frame2985Props.vector}
                vector2={frame2985Props.vector2}
                vector3={frame2985Props.vector3}
                tasks={frame2985Props.tasks}
              />
            </div>
            <Link to="/9-3-enterprise-user-view">
              <div className="frame-2798-12 border-0-5px-white">
                <Frame29842
                  vector={frame29842Props.vector}
                  vector2={frame29842Props.vector2}
                  finances={frame29842Props.finances}
                />
              </div>
            </Link>
            <Frame27972
              vector={frame27972Props.vector}
              vector2={frame27972Props.vector2}
              vector3={frame27972Props.vector3}
              reports={frame27972Props.reports}
            />
            <Frame3003 frame29832Props={frame3003Props.frame29832Props} />
          </div>
          <div className="frame-34312">
            <Frame2067 />
            <p className="text-45">
              <span className="span0-1">{spanText}</span>
              <span className="span1-1">{spanText2}</span>
            </p>
          </div>
          <div className="frame-3437">
            <Frame2067 />
            <p className="text-452 ibmplexsans-normal-quarter-spanish-white-16px">{text452}</p>
          </div>
          <div className="frame-3438">
            <Frame2067 />
            <p className="text-45">
              <span className="span0-1">{spanText3}</span>
              <span className="span1-1">{spanText4}</span>
            </p>
          </div>
        </div>
        <Frame27992
          frame1969={frame27992Props.frame1969}
          frame2797Props={frame27992Props.frame2797Props}
          frame2963Props={frame27992Props.frame2963Props}
          frame3423Props={frame27992Props.frame3423Props}
          frame3424Props={frame27992Props.frame3424Props}
          frame2079Props={frame27992Props.frame2079Props}
        />
        <Frame29563 {...frame29563Props} />
      </div>
      <Frame3479 {...frame3479Props} className="frame-34792" />
      <Frame194315 {...frame194315Props} />
    </div>
  );
}

export default X94EnterpriseuserViewTasks;
