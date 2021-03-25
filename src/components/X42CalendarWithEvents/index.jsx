import React from "react";
import { Link } from "react-router-dom";
import Frame2900 from "../Frame2900";
import Frame2028 from "../Frame2028";
import Frame2035 from "../Frame2035";
import Frame2042 from "../Frame2042";
import Frame2022 from "../Frame2022";
import Frame2023 from "../Frame2023";
import Frame2030 from "../Frame2030";
import Frame2037 from "../Frame2037";
import Frame2051 from "../Frame2051";
import Frame2031 from "../Frame2031";
import Frame2038 from "../Frame2038";
import Frame2052 from "../Frame2052";
import Frame2025 from "../Frame2025";
import Frame2039 from "../Frame2039";
import Frame2053 from "../Frame2053";
import Frame2034 from "../Frame2034";
import Frame2041 from "../Frame2041";
import Frame2048 from "../Frame2048";
import Frame19546 from "../Frame19546";
import Frame19435 from "../Frame19435";
import Frame3464 from "../Frame3464";
import Frame2902 from "../Frame2902";
import "./X42CalendarWithEvents.css";

function X42CalendarWithEvents(props) {
  const {
    frame1987,
    frame2049,
    frame2027,
    frame2055,
    frame2900Props,
    frame2028Props,
    frame2035Props,
    frame2042Props,
    frame2022Props,
    frame20282Props,
    frame20352Props,
    frame20422Props,
    frame20423Props,
    frame2023Props,
    frame2030Props,
    frame2037Props,
    frame20424Props,
    frame2051Props,
    frame20283Props,
    frame2031Props,
    frame2038Props,
    frame20425Props,
    frame2052Props,
    frame2025Props,
    frame20372Props,
    frame2039Props,
    frame20353Props,
    frame2053Props,
    frame20284Props,
    frame20373Props,
    frame20354Props,
    frame20355Props,
    frame20532Props,
    frame2034Props,
    frame2041Props,
    frame2048Props,
    frame19546Props,
    frame19435Props,
    frame3464Props,
    frame2902Props,
  } = props;

  return (
    <div className="x4-2-calendar-with-events screen ">
      <Link to="/4-3-calendar-show-3-more-events-1">
        <div className="frame-2901">
          <Frame2900
            place={frame2900Props.place}
            tue={frame2900Props.tue}
            thu={frame2900Props.thu}
            fri={frame2900Props.fri}
            sat={frame2900Props.sat}
            frame2894Props={frame2900Props.frame2894Props}
            frame28942Props={frame2900Props.frame28942Props}
          />
          <div className="frame-2892">
            <img className="frame-1987" src={frame1987} />
            <Frame2028 frame1988Props={frame2028Props.frame1988Props} />
            <Frame2035 frame19882Props={frame2035Props.frame19882Props} />
            <Frame2042 frame19882Props={frame2042Props.frame19882Props} />
            <img className="frame-2049" src={frame2049} />
            <Frame2022>{frame2022Props.children}</Frame2022>
            <Frame2028 frame1988Props={frame20282Props.frame1988Props} className="frame-2029" />
            <Frame2035 frame19882Props={frame20352Props.frame19882Props} className="frame-2036" />
            <Frame2042 frame19882Props={frame20422Props.frame19882Props} className="frame-2043" />
            <Frame2042 frame19882Props={frame20423Props.frame19882Props} className="frame-2050" />
            <Frame2023 frame1988Props={frame2023Props.frame1988Props} frame2062Props={frame2023Props.frame2062Props} />
            <Frame2030 frame1988Props={frame2030Props.frame1988Props} frame2062Props={frame2030Props.frame2062Props} />
            <Frame2037 frame19882Props={frame2037Props.frame19882Props} />
            <Frame2042 frame19882Props={frame20424Props.frame19882Props} className="frame-2044" />
            <Frame2051 frame19882Props={frame2051Props.frame19882Props} />
            <Frame2028 frame1988Props={frame20283Props.frame1988Props} className="frame-2024" />
            <Frame2031 frame1988Props={frame2031Props.frame1988Props} />
            <Frame2038>{frame2038Props.children}</Frame2038>
            <Frame2042 frame19882Props={frame20425Props.frame19882Props} className="frame-2045" />
            <Frame2052 frame19882Props={frame2052Props.frame19882Props} />
            <Frame2025 frame1988Props={frame2025Props.frame1988Props} frame3471Props={frame2025Props.frame3471Props} />
            <Frame2037 frame19882Props={frame20372Props.frame19882Props} className="frame-2032" />
            <Frame2039
              x0230PmCallWi={frame2039Props.x0230PmCallWi}
              x0300PmFindAn={frame2039Props.x0300PmFindAn}
              x5Events={frame2039Props.x5Events}
              frame19882Props={frame2039Props.frame19882Props}
            />
            <Frame2035 frame19882Props={frame20353Props.frame19882Props} className="frame-2046" />
            <Frame2053>{frame2053Props.children}</Frame2053>
            <Frame2028 frame1988Props={frame20284Props.frame1988Props} className="frame-2026" />
            <Frame2037 frame19882Props={frame20373Props.frame19882Props} className="frame-2033" />
            <Frame2035 frame19882Props={frame20354Props.frame19882Props} className="frame-2040" />
            <Frame2035 frame19882Props={frame20355Props.frame19882Props} className="frame-2047" />
            <Frame2053 className="frame-2054">{frame20532Props.children}</Frame2053>
            <img className="frame-2027" src={frame2027} />
            <Frame2034 frame19882Props={frame2034Props.frame19882Props} />
            <Frame2041>{frame2041Props.children}</Frame2041>
            <Frame2048>{frame2048Props.children}</Frame2048>
            <img className="frame-2055" src={frame2055} />
            <div className="rectangle-8606"></div>
            <div className="rectangle-860-1"></div>
            <div className="rectangle-860-2"></div>
            <div className="rectangle-860-3"></div>
            <div className="rectangle-860-4"></div>
            <div className="rectangle-860-5"></div>
            <div className="rectangle-860-6"></div>
            <div className="rectangle-860-7"></div>
            <div className="rectangle-860-8"></div>
            <div className="rectangle-860-9"></div>
          </div>
        </div>
      </Link>
      <Frame19546
        ragrariansI1166390={frame19546Props.ragrariansI1166390}
        frame1951={frame19546Props.frame1951}
        text133={frame19546Props.text133}
        layer22Props={frame19546Props.layer22Props}
        belloutlineProps={frame19546Props.belloutlineProps}
        personoutline1Props={frame19546Props.personoutline1Props}
      />
      <Frame19435 {...frame19435Props} />
      <Frame3464
        enterprisesEvents={frame3464Props.enterprisesEvents}
        groupsEvents={frame3464Props.groupsEvents}
        frame1981Props={frame3464Props.frame1981Props}
      />
      <Frame2902
        text155={frame2902Props.text155}
        text156={frame2902Props.text156}
        frame20232Props={frame2902Props.frame20232Props}
        frame54Props={frame2902Props.frame54Props}
      />
    </div>
  );
}

export default X42CalendarWithEvents;
