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
import Frame3693 from "../Frame3693";
import Frame3697 from "../Frame3697";
import Frame3694 from "../Frame3694";
import Frame3698 from "../Frame3698";
import Frame3695 from "../Frame3695";
import Frame3699 from "../Frame3699";
import Frame3696 from "../Frame3696";
import Frame3700 from "../Frame3700";
import Plusoutline1 from "../Plusoutline1";
import "./X9CreateEnterpise_step2.css";

function X9CreateEnterpise_step2(props) {
  const {
    addRoles,
    xcontinue,
    step2Of2,
    text539,
    addCustomRole,
    frame1980Props,
    frame19892Props,
    frame2981Props,
    frame1983Props,
    frame19544Props,
    frame19695Props,
    frame29822Props,
    frame298222Props,
    frame194311Props,
    layer23Props,
    frame3693Props,
    frame3697Props,
    frame3694Props,
    frame3698Props,
    frame3695Props,
    frame3699Props,
    frame3696Props,
    frame3700Props,
    plusoutline1Props,
  } = props;

  return (
    <div className="x9-create-enterpise-step2-1 screen ">
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
        className="frame-29833"
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
        className="frame-29843"
      />
      <Frame194311
        frame1945Props={frame194311Props.frame1945Props}
        frame19442Props={frame194311Props.frame19442Props}
        frame1947Props={frame194311Props.frame1947Props}
        frame1948Props={frame194311Props.frame1948Props}
        frame2303Props={frame194311Props.frame2303Props}
        group1943Props={frame194311Props.group1943Props}
      />
      <div className="rectangle-8574"></div>
      <div className="frame-19645 border-1px-onyx">
        <div className="frame-19634">
          <div className="add-roles ibmplexsans-semi-bold-quarter-spanish-white-24px">{addRoles}</div>
          <Link to="/9-1-all-enterprises">
            <div className="close-outline-18">
              <Layer23 closeProps={layer23Props.closeProps} />
            </div>
          </Link>
        </div>
        <div className="frame-3701">
          <Link to="/9-1-all-enterprises">
            <div className="frame-28519">
              <div className="continue3 valign-text-middle ibmplexsans-semi-bold-shark-16px">{xcontinue}</div>
            </div>
          </Link>
          <div className="step-2-of-2 valign-text-middle">{step2Of2}</div>
        </div>
        <div className="frame-3706">
          <Frame3693 leaders={frame3693Props.leaders} component2Props={frame3693Props.component2Props} />
          <Frame3697 surname={frame3697Props.surname} component2Props={frame3697Props.component2Props} />
          <p className="text-539 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text539}</p>
          <Frame3694 place={frame3694Props.place} component22Props={frame3694Props.component22Props} />
          <Frame3698 marketers={frame3698Props.marketers} component22Props={frame3698Props.component22Props} />
          <Frame3695 processing={frame3695Props.processing} component2Props={frame3695Props.component2Props} />
          <Frame3699 mentors={frame3699Props.mentors} component22Props={frame3699Props.component22Props} />
          <Frame3696 marketerSales={frame3696Props.marketerSales} component22Props={frame3696Props.component22Props} />
          <Frame3700 accounting={frame3700Props.accounting} component2Props={frame3700Props.component2Props} />
          <Link to="/9-create-enterpise_step2">
            <div className="frame-2924">
              <Plusoutline1 vector={plusoutline1Props.vector} vector2={plusoutline1Props.vector2} />
              <div className="add-custom-role valign-text-middle">{addCustomRole}</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default X9CreateEnterpise_step2;
