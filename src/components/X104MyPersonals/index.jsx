import React from "react";
import Frame44 from "../Frame44";
import Frame94 from "../Frame94";
import Frame2819 from "../Frame2819";
import Frame2820 from "../Frame2820";
import Frame2823 from "../Frame2823";
import Frame2824 from "../Frame2824";
import Frame28232 from "../Frame28232";
import Frame28242 from "../Frame28242";
import Frame19547 from "../Frame19547";
import Backbtn3 from "../Backbtn3";
import Frame19436 from "../Frame19436";
import "./X104MyPersonals.css";

function X104MyPersonals(props) {
  const {
    frame2818,
    text157,
    contactInformation,
    text159,
    frame44Props,
    frame94Props,
    frame2819Props,
    frame2820Props,
    frame2823Props,
    frame2824Props,
    frame28232Props,
    frame28242Props,
    frame19547Props,
    backbtn3Props,
    frame19436Props,
  } = props;

  return (
    <div className="x10-4-my-personals-1 screen ">
      <div className="frame-28292 border-1px-onyx">
        <div className="frame-3738">
          <div className="frame-2818" style={{ backgroundImage: `url(${frame2818})` }}></div>
          <Frame44>{frame44Props.children}</Frame44>
        </div>
        <div className="frame-3478">
          <div className="frame-2825">
            <Frame94 firstName={frame94Props.firstName} mikhail={frame94Props.mikhail} />
            <Frame2819 lastName={frame2819Props.lastName} ugryumov={frame2819Props.ugryumov} />
            <Frame2820 dateOfBirhday={frame2820Props.dateOfBirhday} phone={frame2820Props.phone} />
            <div className="frame-2821">
              <div className="text-157 ibmplexsans-semi-bold-quarter-spanish-white-24px">{text157}</div>
            </div>
            <div className="rectangle-867"></div>
          </div>
          <div className="frame-2826">
            <Frame2823 email={frame2823Props.email} mikhailGmailPro={frame2823Props.mikhailGmailPro} />
            <Frame2824 phone={frame2824Props.phone} text158={frame2824Props.text158} />
            <div className="frame-2822">
              <div className="contact-information ibmplexsans-semi-bold-quarter-spanish-white-24px">
                {contactInformation}
              </div>
            </div>
            <div className="rectangle-867"></div>
          </div>
          <div className="frame-2828">
            <Frame28232 lastLogin={frame28232Props.lastLogin} phone={frame28232Props.phone} />
            <Frame28242 numbersOfVisits={frame28242Props.numbersOfVisits} number={frame28242Props.number} />
            <div className="frame-2822-1">
              <div className="text-159 ibmplexsans-semi-bold-quarter-spanish-white-24px">{text159}</div>
            </div>
          </div>
        </div>
      </div>
      <Frame19547
        ragrariansI2073184={frame19547Props.ragrariansI2073184}
        frame1951={frame19547Props.frame1951}
        text160={frame19547Props.text160}
        emailoutlineProps={frame19547Props.emailoutlineProps}
        belloutlineProps={frame19547Props.belloutlineProps}
        personoutline1Props={frame19547Props.personoutline1Props}
      />
      <Backbtn3 place={backbtn3Props.place} iconsArrowsLeftProps={backbtn3Props.iconsArrowsLeftProps} />
      <Frame19436 {...frame19436Props} />
    </div>
  );
}

export default X104MyPersonals;
