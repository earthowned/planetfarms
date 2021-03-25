import React from "react";
import { Link } from "react-router-dom";
import Frame1969 from "../Frame1969";
import Frame1979 from "../Frame1979";
import "./Frame2916.css";

function Frame2916(props) {
  const { frame1969Props, frame1979Props } = props;

  return (
    <Link to="/3-1-news-page">
      <div className="frame-29162 border-1px-onyx">
        <Frame1969
          frame1969={frame1969Props.frame1969}
          date={frame1969Props.date}
          frame3470Props={frame1969Props.frame3470Props}
        />
        <Frame1979 text17={frame1979Props.text17} text18={frame1979Props.text18} text19={frame1979Props.text19} />
      </div>
    </Link>
  );
}

export default Frame2916;
