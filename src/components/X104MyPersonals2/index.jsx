import React from "react";
import Frame410 from "../Frame410";
import Frame93 from "../Frame93";
import Frame2821 from "../Frame2821";
import Frame9 from "../Frame9";
import Backbtn9 from "../Backbtn9";
import "./X104MyPersonals2.css";

function X104MyPersonals2(props) {
  const {
    welcomeBack,
    frame1969,
    lastName,
    ugryumov,
    dateOfBirhday,
    phone,
    email,
    mikhailGmailPro,
    phone2,
    text695,
    numbersOfVisits,
    number,
    frame2795,
    text697,
    vector,
    vector2,
    vector3,
    vector4,
    vector5,
    vector6,
    vector7,
    vector8,
    vector9,
    vector10,
    vector11,
    vector12,
    vector13,
    or,
    vector14,
    vector15,
    addMyCard,
    mobileHeaderLogo,
    mobileHeaderLogo2,
    frame410Props,
    frame93Props,
    frame2821Props,
    frame28212Props,
    frame9Props,
    frame28213Props,
    backbtn9Props,
  } = props;

  return (
    <div className="x104-my-personals screen ">
      <div className="frame-3505">
        <div className="welcome-back5 ibmplexsans-semi-bold-quarter-spanish-white-24px">{welcomeBack}</div>
      </div>
      <div className="frame-19592">
        <div className="frame-3739">
          <div className="frame-196912" style={{ backgroundImage: `url(${frame1969})` }}></div>
          <Frame410>{frame410Props.children}</Frame410>
        </div>
        <div className="frame-3536">
          <Frame93 lastName={frame93Props.lastName} ugrymov={frame93Props.ugrymov} className="frame-910" />
          <div className="frame-28193">
            <div className="last-name3">{lastName}</div>
            <div className="ugryumov2 ibmplexsans-normal-quarter-spanish-white-16px">{ugryumov}</div>
          </div>
          <div className="frame-28203">
            <div className="date-of-birhday2">{dateOfBirhday}</div>
            <div className="phone7 ibmplexsans-normal-quarter-spanish-white-16px">{phone}</div>
          </div>
          <Frame2821>{frame2821Props.children}</Frame2821>
          <div className="rectangle-8673"></div>
        </div>
        <div className="frame-3537">
          <div className="frame-915">
            <div className="email4">{email}</div>
            <div className="mikhailgmailpro2 ibmplexsans-normal-quarter-spanish-white-16px">{mikhailGmailPro}</div>
          </div>
          <div className="frame-2819-1">
            <div className="phone-12">{phone2}</div>
            <div className="text-695 ibmplexsans-normal-quarter-spanish-white-16px">{text695}</div>
          </div>
          <Frame2821>{frame28212Props.children}</Frame2821>
          <div className="rectangle-867-1"></div>
        </div>
        <div className="frame-3538">
          <Frame9 birthday={frame9Props.birthday} phone={frame9Props.phone} className="frame-98" />
          <div className="frame-2819-2">
            <div className="numbers-of-visits2">{numbersOfVisits}</div>
            <div className="number6 ibmplexsans-normal-quarter-spanish-white-16px">{number}</div>
          </div>
          <Frame2821>{frame28213Props.children}</Frame2821>
        </div>
      </div>
      <div className="frame-3506">
        <img className="frame-27954" src={frame2795} />
        <div className="frame-3539">
          <p className="text-697">{text697}</p>
          <div className="frame-3406">
            <div className="stripe-wordmark-blurple-1">
              <div className="group7">
                <img className="vector19" src={vector} />
                <img className="vector-136" src={vector2} />
                <img className="vector-220" src={vector3} />
                <img className="vector-312" src={vector4} />
                <img className="vector-410" src={vector5} />
                <img className="vector-59" src={vector6} />
                <img className="vector-69" src={vector7} />
              </div>
            </div>
          </div>
          <div className="frame-3407">
            <div className="pay-pal-1">
              <img className="vector-79" src={vector8} />
              <img className="vector-88" src={vector9} />
              <img className="vector-98" src={vector10} />
              <img className="vector-108" src={vector11} />
              <img className="vector-1113" src={vector12} />
              <img className="vector-1211" src={vector13} />
            </div>
          </div>
          <div className="frame-3409">
            <div className="rectangle-867-2"></div>
            <div className="frame-3408">
              <div className="or2">{or}</div>
            </div>
          </div>
          <div className="frame-3362 border-0-5px-quarter-spanish-white">
            <div className="frame-19339"></div>
            <div className="frame-33186">
              <div className="plus-12">
                <img className="vector-137" src={vector14} />
                <img className="vector-146" src={vector15} />
              </div>
              <div className="add-my-card valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
                {addMyCard}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Backbtn9 frame2923Props={backbtn9Props.frame2923Props} />
      <img className="mobile-header-logo" src={mobileHeaderLogo} />
      <img className="mobile-header-logo-1" src={mobileHeaderLogo2} />
    </div>
  );
}

export default X104MyPersonals2;
