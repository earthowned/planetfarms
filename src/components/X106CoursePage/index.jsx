import React from "react";
import Frame195415 from "../Frame195415";
import Backbtn10 from "../Backbtn10";
import Frame19393 from "../Frame19393";
import Frame3231 from "../Frame3231";
import Frame3255 from "../Frame3255";
import Frame2833 from "../Frame2833";
import Layer24 from "../Layer24";
import Frame194318 from "../Frame194318";
import Frame29272 from "../Frame29272";
import Frame2970 from "../Frame2970";
import "./X106CoursePage.css";

function X106CoursePage(props) {
  const {
    name,
    text699,
    frame3079,
    lessons,
    text733,
    seeAllUsers,
    text,
    frame2926,
    name2,
    writeMessage,
    frame29262,
    frame29263,
    name3,
    writeMessage2,
    frame29264,
    name4,
    writeMessage3,
    frame29265,
    frame195415Props,
    backbtn10Props,
    frame19393Props,
    frame3231Props,
    frame3255Props,
    frame32552Props,
    frame2833Props,
    layer24Props,
    frame194318Props,
    frame29272Props,
    frame2970Props,
    frame292722Props,
  } = props;

  return (
    <div className="x10-6-course-page screen ">
      <Frame195415
        ragrariansI2301512={frame195415Props.ragrariansI2301512}
        frame1951={frame195415Props.frame1951}
        text698={frame195415Props.text698}
        emailoutlineProps={frame195415Props.emailoutlineProps}
        belloutlineProps={frame195415Props.belloutlineProps}
        personoutline1Props={frame195415Props.personoutline1Props}
      />
      <Backbtn10 place={backbtn10Props.place} iconsArrowsLeftProps={backbtn10Props.iconsArrowsLeftProps} />
      <div className="frame-28298 border-1px-onyx">
        <div className="frame-30675">
          <div className="name7">{name}</div>
          <p className="text-699 ibmplexsans-normal-quarter-spanish-white-16px">{text699}</p>
          <div className="rectangle-1195"></div>
          <Frame19393
            text703={frame19393Props.text703}
            text704={frame19393Props.text704}
            frame3020Props={frame19393Props.frame3020Props}
            frame30202Props={frame19393Props.frame30202Props}
            frame30203Props={frame19393Props.frame30203Props}
            component3Props={frame19393Props.component3Props}
            component32Props={frame19393Props.component32Props}
          />
        </div>
        <div className="frame-3079" style={{ backgroundImage: `url(${frame3079})` }}></div>
        <div className="frame-3235">
          <div className="frame-3081">
            <div className="lessons ibmplexsans-semi-bold-quarter-spanish-white-24px">{lessons}</div>
          </div>
          <Frame3231
            rectangle117={frame3231Props.rectangle117}
            x01Introducing={frame3231Props.x01Introducing}
            text705={frame3231Props.text705}
            seeLesson={frame3231Props.seeLesson}
          />
          <Frame3255
            vector={frame3255Props.vector}
            vector2={frame3255Props.vector2}
            vector3={frame3255Props.vector3}
            text708={frame3255Props.text708}
            frame3231Props={frame3255Props.frame3231Props}
          />
          <Frame3255
            vector={frame32552Props.vector}
            vector2={frame32552Props.vector2}
            vector3={frame32552Props.vector3}
            text708={frame32552Props.text708}
            frame3231Props={frame32552Props.frame3231Props}
            className="frame-3257"
          />
        </div>
        <div className="frame-27966 border-0-5px-quarter-spanish-white">
          <div className="frame-3483">
            <Frame2833 className="frame-29632">{frame2833Props.children}</Frame2833>
            <Layer24 vector={layer24Props.vector} vector2={layer24Props.vector2} className="layer-218" />
          </div>
        </div>
      </div>
      <Frame194318 {...frame194318Props} />
      <div className="frame-28303 border-1px-onyx">
        <div className="frame-32732">
          <div className="text-733 ibmplexsans-semi-bold-quarter-spanish-white-24px">{text733}</div>
          <div className="see-all-users">{seeAllUsers}</div>
        </div>
        <div className="text4 valign-text-middle">{text}</div>
        <div className="frame-29302">
          <div className="frame-2926-12" style={{ backgroundImage: `url(${frame2926})` }}></div>
          <div className="frame-29273">
            <div className="name-1 ibmplexsans-semi-bold-quarter-spanish-white-16px">{name2}</div>
            <div className="write-message-1">{writeMessage}</div>
          </div>
        </div>
        <div className="frame-29312">
          <div className="frame-2926-1" style={{ backgroundImage: `url(${frame29262})` }}></div>
          <Frame29272 name={frame29272Props.name} writeMessage={frame29272Props.writeMessage} />
        </div>
        <div className="frame-29322">
          <div className="frame-2926-1" style={{ backgroundImage: `url(${frame29263})` }}></div>
          <div className="frame-2927-1">
            <div className="name-1 ibmplexsans-semi-bold-quarter-spanish-white-16px">{name3}</div>
            <div className="write-message-1">{writeMessage2}</div>
          </div>
        </div>
        <div className="frame-29332">
          <div className="frame-2926-1" style={{ backgroundImage: `url(${frame29264})` }}></div>
          <div className="frame-2927-2">
            <div className="name-1 ibmplexsans-semi-bold-quarter-spanish-white-16px">{name4}</div>
            <div className="write-message-1">{writeMessage3}</div>
          </div>
        </div>
        <div className="frame-29342">
          <div className="frame-29264" style={{ backgroundImage: `url(${frame29265})` }}>
            <Frame2970 vector={frame2970Props.vector} vector2={frame2970Props.vector2} className="frame-30652" />
          </div>
          <Frame29272 name={frame292722Props.name} writeMessage={frame292722Props.writeMessage} />
        </div>
      </div>
    </div>
  );
}

export default X106CoursePage;
