import React from "react";
import Frame195418 from "../Frame195418";
import Backbtn13 from "../Backbtn13";
import Frame3030 from "../Frame3030";
import Frame3026 from "../Frame3026";
import Frame194321 from "../Frame194321";
import "./X102MyAchievements.css";

function X102MyAchievements(props) {
  const {
    frame3028,
    text794,
    percent,
    frame3027,
    text796,
    spanText,
    spanText2,
    frame30282,
    text798,
    percent2,
    frame30272,
    text799,
    percent3,
    frame30283,
    text801,
    percent4,
    frame30273,
    text802,
    percent5,
    frame2818,
    mikhailUgryumov,
    vector,
    group,
    number,
    text803,
    frame3053,
    text804,
    text805,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    phone,
    frame30532,
    frame195418Props,
    backbtn13Props,
    frame3030Props,
    frame3026Props,
    frame30262Props,
    frame30302Props,
    frame194321Props,
  } = props;

  return (
    <div className="x10-2-my-achievements screen ">
      <Frame195418
        ragrariansI1473337={frame195418Props.ragrariansI1473337}
        frame1951={frame195418Props.frame1951}
        text792={frame195418Props.text792}
        emailoutlineProps={frame195418Props.emailoutlineProps}
        belloutlineProps={frame195418Props.belloutlineProps}
        personoutline1Props={frame195418Props.personoutline1Props}
      />
      <Backbtn13 place={backbtn13Props.place} iconsArrowsLeftProps={backbtn13Props.iconsArrowsLeftProps} />
      <div className="frame-282910 border-1px-onyx">
        <div className="frame-3032">
          <Frame3030>{frame3030Props.children}</Frame3030>
          <div className="frame-3245">
            <div className="frame-3046 border-1px-onyx">
              <div className="frame-3028" style={{ backgroundImage: `url(${frame3028})` }}></div>
              <p className="text- ibmplexsans-semi-bold-shark-16px">{text794}</p>
              <div className="percent-1">{percent}</div>
            </div>
            <Frame3026 text795={frame3026Props.text795} percent={frame3026Props.percent} />
            <div className="frame-3047 border-1px-onyx">
              <div className="frame-3029"></div>
              <div className="frame-3027" style={{ backgroundImage: `url(${frame3027})` }}>
                <p className="text- ibmplexsans-semi-bold-shark-16px">{text796}</p>
              </div>
              <div className="percent">
                <span className="span014">{spanText}</span>
                <span className="span114">{spanText2}</span>
              </div>
            </div>
            <Frame3026 text795={frame30262Props.text795} percent={frame30262Props.percent} className="frame-3049" />
            <div className="frame-3048 border-1px-onyx">
              <div className="frame-3028-1" style={{ backgroundImage: `url(${frame30282})` }}></div>
              <p className="text- ibmplexsans-semi-bold-shark-16px">{text798}</p>
              <div className="percent-1">{percent2}</div>
            </div>
            <div className="frame-3050 border-1px-onyx">
              <div className="frame-3029"></div>
              <div className="frame-3027-1" style={{ backgroundImage: `url(${frame30272})` }}>
                <p className="text- ibmplexsans-semi-bold-shark-16px">{text799}</p>
              </div>
              <div className="percent-1">{percent3}</div>
            </div>
          </div>
        </div>
        <div className="frame-3033">
          <Frame3030>{frame30302Props.children}</Frame3030>
          <div className="frame-3245-1">
            <div className="frame-3046 border-1px-onyx">
              <div className="frame-3028-2" style={{ backgroundImage: `url(${frame30283})` }}></div>
              <p className="text- ibmplexsans-semi-bold-shark-16px">{text801}</p>
              <div className="percent-2 ibmplexsans-semi-bold-shark-16px">{percent4}</div>
            </div>
            <div className="frame-3047-1 border-1px-onyx">
              <div className="frame-3029"></div>
              <div className="frame-3027-2" style={{ backgroundImage: `url(${frame30273})` }}>
                <p className="text- ibmplexsans-semi-bold-shark-16px">{text802}</p>
              </div>
              <div className="percent-3 ibmplexsans-semi-bold-shark-16px">{percent5}</div>
            </div>
          </div>
        </div>
        <div className="frame-3031">
          <div className="frame-28184" style={{ backgroundImage: `url(${frame2818})` }}></div>
          <div className="mikhail-ugryumov2 ibmplexsans-semi-bold-quarter-spanish-white-24px">{mikhailUgryumov}</div>
          <div className="frame-3051 border-1px-onyx">
            <div className="unknown-1">
              <div className="group8">
                <img className="vector21" src={vector} />
                <img className="group-12" src={group} />
              </div>
              <div className="number7 valign-text-middle">{number}</div>
            </div>
            <div className="frame-3055">
              <div className="text-803 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
                {text803}
              </div>
              <div className="frame-30542">
                <div className="frame-30532" style={{ backgroundImage: `url(${frame3053})` }}></div>
                <div className="text-804 valign-text-middle">{text804}</div>
              </div>
              <p className="text-805 valign-text-middle">{text805}</p>
            </div>
          </div>
          <div className="frame-3052 border-1px-onyx">
            <div className="text-806 ibmplexsans-normal-quarter-spanish-white-16px">
              <span className="span0-12">{spanText3}</span>
              <span className="span1-12">{spanText4}</span>
            </div>
            <p className="text-807 ibmplexsans-normal-quarter-spanish-white-16px">
              <span className="span0-1">{spanText5}</span>
              <span className="span1-1">{spanText6}</span>
            </p>
            <div className="frame-3054-1">
              <div className="frame-3052-1">
                <div className="phone8 valign-text-middle">{phone}</div>
              </div>
              <div className="frame-3053-12" style={{ backgroundImage: `url(${frame30532})` }}></div>
            </div>
          </div>
        </div>
      </div>
      <Frame194321 {...frame194321Props} />
    </div>
  );
}

export default X102MyAchievements;
