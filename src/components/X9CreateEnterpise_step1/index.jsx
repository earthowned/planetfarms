import React from "react";
import { Link } from "react-router-dom";
import Frame1980 from "../Frame1980";
import Frame19892 from "../Frame19892";
import Frame2981 from "../Frame2981";
import Frame1983 from "../Frame1983";
import Frame19544 from "../Frame19544";
import Frame19695 from "../Frame19695";
import Frame29822 from "../Frame29822";
import Frame194311 from "../Frame194311";
import Layer23 from "../Layer23";
import Frame48 from "../Frame48";
import Frame1964 from "../Frame1964";
import Frame1965 from "../Frame1965";
import Frame317 from "../Frame317";
import "./X9CreateEnterpise_step1.css";

function X9CreateEnterpise_step1(props) {
  const {
    createEnterprise,
    xcontinue,
    step1Of2,
    frame1980Props,
    frame19892Props,
    frame2981Props,
    frame1983Props,
    frame19544Props,
    frame19695Props,
    frame196952Props,
    frame29822Props,
    frame298222Props,
    frame194311Props,
    layer23Props,
    frame48Props,
    frame1964Props,
    frame1965Props,
    frame317Props,
  } = props;

  return (
    <div className="x9-create-enterpise-step1 screen ">
      <Frame1980
        searchEnterprises={frame1980Props.searchEnterprises}
        searchoutline1Props={frame1980Props.searchoutline1Props}
      />
      <Frame19892
        frame2817Props={frame19892Props.frame2817Props}
        chevronrightoutline1Props={frame19892Props.chevronrightoutline1Props}
        chevronrightoutline12Props={frame19892Props.chevronrightoutline12Props}
      />
      <Frame2981 allEnterprises={frame2981Props.allEnterprises} yourEnterprises={frame2981Props.yourEnterprises} />
      <Frame1983>{frame1983Props.children}</Frame1983>
      <Frame19544
        ragrariansI520753={frame19544Props.ragrariansI520753}
        frame1951={frame19544Props.frame1951}
        emailoutlineProps={frame19544Props.emailoutlineProps}
        belloutlineProps={frame19544Props.belloutlineProps}
        frame2848Props={frame19544Props.frame2848Props}
      />
      <Frame19695
        frame1969={frame19695Props.frame1969}
        frame3239Props={frame19695Props.frame3239Props}
        frame2796Props={frame19695Props.frame2796Props}
      />
      <Frame19695
        frame1969={frame196952Props.frame1969}
        frame3239Props={frame196952Props.frame3239Props}
        frame2796Props={frame196952Props.frame2796Props}
        className="frame-29832"
      />
      <Frame29822
        frame2982={frame29822Props.frame2982}
        frame3239Props={frame29822Props.frame3239Props}
        frame27962Props={frame29822Props.frame27962Props}
      />
      <Frame29822
        frame2982={frame298222Props.frame2982}
        frame3239Props={frame298222Props.frame3239Props}
        frame27962Props={frame298222Props.frame27962Props}
        className="frame-29842"
      />
      <Frame194311
        frame1945Props={frame194311Props.frame1945Props}
        frame19442Props={frame194311Props.frame19442Props}
        frame1947Props={frame194311Props.frame1947Props}
        frame1948Props={frame194311Props.frame1948Props}
        frame2303Props={frame194311Props.frame2303Props}
        group1943Props={frame194311Props.group1943Props}
      />
      <div className="rectangle-8573"></div>
      <div className="frame-19643 border-1px-onyx">
        <div className="frame-19633">
          <div className="create-enterprise2 ibmplexsans-semi-bold-quarter-spanish-white-24px">{createEnterprise}</div>
          <Link to="/9-1-all-enterprises">
            <div className="close-outline-17">
              <Layer23 closeProps={layer23Props.closeProps} />
            </div>
          </Link>
        </div>
        <Frame48 spanText={frame48Props.spanText} spanText2={frame48Props.spanText2} />
        <Frame1964
          spanText={frame1964Props.spanText}
          spanText2={frame1964Props.spanText2}
          chevronrightoutline1Props={frame1964Props.chevronrightoutline1Props}
        />
        <Frame1965 className="frame-19652">{frame1965Props.children}</Frame1965>
        <Frame317>{frame317Props.children}</Frame317>
        <Link to="/9-create-enterpise-step2-1">
          <div className="frame-28516">
            <div className="continue2 valign-text-middle ibmplexsans-semi-bold-shark-16px">{xcontinue}</div>
          </div>
        </Link>
        <div className="step-1-of-2 valign-text-middle">{step1Of2}</div>
      </div>
    </div>
  );
}

export default X9CreateEnterpise_step1;
