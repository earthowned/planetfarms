import React from "react";
import Frame28083 from "../Frame28083";
import Frame28102 from "../Frame28102";
import "./Frame28012.css";

function Frame28012(props) {
  const { searchFilters, frame28083Props, frame280832Props, frame28102Props } = props;

  return (
    <div className="frame-28019 border-1px-onyx">
      <div className="frame-28072">
        <div className="search-filters2">{searchFilters}</div>
      </div>
      <Frame28083
        byDate={frame28083Props.byDate}
        chevronrightoutline1Props={frame28083Props.chevronrightoutline1Props}
      />
      <Frame28083
        byDate={frame280832Props.byDate}
        chevronrightoutline1Props={frame280832Props.chevronrightoutline1Props}
        className="frame-28094"
      />
      <Frame28102>{frame28102Props.children}</Frame28102>
    </div>
  );
}

export default Frame28012;
