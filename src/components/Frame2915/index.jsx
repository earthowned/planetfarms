import React from "react";
import "./Frame2915.css";

function Frame2915(props) {
  const { text87, farming, carsIndustry, mediaNews, people, nature, seeAllTopics } = props;

  return (
    <div className="frame-29152 border-1px-onyx">
      <div className="frame-29212">
        <p className="text-87 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text87}</p>
      </div>
      <div className="frame-29164 border-1px-onyx">
        <div className="farming3 ibmplexsans-semi-bold-quarter-spanish-white-16px">{farming}</div>
      </div>
      <div className="frame-29192 border-1px-onyx">
        <div className="cars-industry2 ibmplexsans-semi-bold-quarter-spanish-white-16px">{carsIndustry}</div>
      </div>
      <div className="frame-29202 border-1px-onyx">
        <div className="media-news2 ibmplexsans-semi-bold-quarter-spanish-white-16px">{mediaNews}</div>
      </div>
      <div className="frame-29174 border-1px-onyx">
        <div className="people2 ibmplexsans-semi-bold-quarter-spanish-white-16px">{people}</div>
      </div>
      <div className="frame-29182 border-1px-onyx">
        <div className="nature2 ibmplexsans-semi-bold-quarter-spanish-white-16px">{nature}</div>
      </div>
      <div className="see-all-topics2 ibmplexsans-semi-bold-quarter-spanish-white-16px">{seeAllTopics}</div>
    </div>
  );
}

export default Frame2915;
