import React from "react";
import Frame195410 from "../Frame195410";
import Frame94 from "../Frame94";
import Frame2819 from "../Frame2819";
import Frame2820 from "../Frame2820";
import Frame2823 from "../Frame2823";
import Frame2824 from "../Frame2824";
import Frame28232 from "../Frame28232";
import Frame28242 from "../Frame28242";
import Frame49 from "../Frame49";
import Backbtn5 from "../Backbtn5";
import Frame194313 from "../Frame194313";
import "./X81CommunityMembers.css";

function X81CommunityMembers(props) {
  const {
    frame2818,
    text405,
    contactInformation,
    text407,
    follow,
    frame195410Props,
    frame94Props,
    frame2819Props,
    frame2820Props,
    frame2823Props,
    frame2824Props,
    frame28232Props,
    frame28242Props,
    frame49Props,
    backbtn5Props,
    frame194313Props,
  } = props;

  return (
    <div className="x8-1-community-members-1 screen ">
      <Frame195410
        ragrariansI209621={frame195410Props.ragrariansI209621}
        frame1951={frame195410Props.frame1951}
        text404={frame195410Props.text404}
        emailoutlineProps={frame195410Props.emailoutlineProps}
        belloutlineProps={frame195410Props.belloutlineProps}
        personoutline1Props={frame195410Props.personoutline1Props}
      />
      <div className="frame-28295 border-1px-onyx">
        <div className="frame-28183" style={{ backgroundImage: `url(${frame2818})` }}></div>
        <div className="frame-34782">
          <div className="frame-28252">
            <Frame94 firstName={frame94Props.firstName} mikhail={frame94Props.mikhail} className="frame-914" />
            <Frame2819 lastName={frame2819Props.lastName} ugryumov={frame2819Props.ugryumov} className="frame-28192" />
            <Frame2820
              dateOfBirhday={frame2820Props.dateOfBirhday}
              phone={frame2820Props.phone}
              className="frame-28202"
            />
            <div className="frame-28212">
              <div className="text-405 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text405}</div>
            </div>
            <div className="rectangle-8672"></div>
          </div>
          <div className="frame-28262">
            <Frame2823
              email={frame2823Props.email}
              mikhailGmailPro={frame2823Props.mikhailGmailPro}
              className="frame-28232"
            />
            <Frame2824 phone={frame2824Props.phone} text158={frame2824Props.text158} className="frame-28242" />
            <div className="frame-28222">
              <div className="contact-information2 ibmplexsans-semi-bold-quarter-spanish-white-16px">
                {contactInformation}
              </div>
            </div>
            <div className="rectangle-867"></div>
          </div>
          <div className="frame-28282">
            <Frame28232 lastLogin={frame28232Props.lastLogin} phone={frame28232Props.phone} className="frame-28234" />
            <Frame28242
              numbersOfVisits={frame28242Props.numbersOfVisits}
              number={frame28242Props.number}
              className="frame-28244"
            />
            <div className="frame-2822-12">
              <div className="text-407 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text407}</div>
            </div>
          </div>
        </div>
        <div className="frame-3551">
          <Frame49>{frame49Props.children}</Frame49>
          <div className="frame-2829-1">
            <div className="follow2 ibmplexsans-semi-bold-shark-16px">{follow}</div>
          </div>
        </div>
      </div>
      <Backbtn5 place={backbtn5Props.place} iconsArrowsLeftProps={backbtn5Props.iconsArrowsLeftProps} />
      <Frame194313 {...frame194313Props} />
    </div>
  );
}

export default X81CommunityMembers;
