import React from "react";
import { Link } from "react-router-dom";
import Frame1980 from "../Frame1980";
import Frame1989 from "../Frame1989";
import Frame19544 from "../Frame19544";
import Frame19694 from "../Frame19694";
import Frame2983 from "../Frame2983";
import Frame2982 from "../Frame2982";
import Frame2984 from "../Frame2984";
import Frame19439 from "../Frame19439";
import "./X91AllEnterprises.css";

function X91AllEnterprises(props) {
  const {
    allEnterprises,
    yourEnterprises,
    createEnterprise,
    frame1980Props,
    frame1989Props,
    frame19544Props,
    frame19694Props,
    frame2983Props,
    frame2982Props,
    frame2984Props,
    frame19439Props,
  } = props;

  return (
    <div className="x9-1-all-enterprises screen ">
      <Frame1980
        searchEnterprises={frame1980Props.searchEnterprises}
        searchoutline1Props={frame1980Props.searchoutline1Props}
      />
      <Frame1989
        frame2817Props={frame1989Props.frame2817Props}
        chevronrightoutline1Props={frame1989Props.chevronrightoutline1Props}
      />
      <div className="frame-29812">
        <div className="frame-19837">
          <div className="x-enterprises ibmplexsans-semi-bold-shark-16px">{allEnterprises}</div>
        </div>
        <div className="frame-19842 border-0-5px-white">
          <div className="x-enterprises ibmplexsans-semi-bold-quarter-spanish-white-16px">{yourEnterprises}</div>
        </div>
      </div>
      <Link to="/9-create-enterpise-step1">
        <div className="frame-1983-12">
          <div className="create-enterprise ibmplexsans-semi-bold-shark-16px">{createEnterprise}</div>
        </div>
      </Link>
      <Frame19544
        ragrariansI520753={frame19544Props.ragrariansI520753}
        frame1951={frame19544Props.frame1951}
        emailoutlineProps={frame19544Props.emailoutlineProps}
        belloutlineProps={frame19544Props.belloutlineProps}
        frame2848Props={frame19544Props.frame2848Props}
      />
      <Frame19694
        frame1969={frame19694Props.frame1969}
        frame3239Props={frame19694Props.frame3239Props}
        frame2796Props={frame19694Props.frame2796Props}
      />
      <Frame2983
        frame2983={frame2983Props.frame2983}
        frame3239Props={frame2983Props.frame3239Props}
        frame2796Props={frame2983Props.frame2796Props}
      />
      <Frame2982
        frame2982={frame2982Props.frame2982}
        frame3239Props={frame2982Props.frame3239Props}
        frame27962Props={frame2982Props.frame27962Props}
      />
      <Frame2984
        frame2984={frame2984Props.frame2984}
        frame3239Props={frame2984Props.frame3239Props}
        frame27962Props={frame2984Props.frame27962Props}
      />
      <Frame19439 {...frame19439Props} />
    </div>
  );
}

export default X91AllEnterprises;
