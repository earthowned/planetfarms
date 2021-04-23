import React from "react";
import "./my-library.css";
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout';
import BackButton from '../../Components/BackButton/BackButton';

function MyLibrary() {
  return (
    <DashboardLayout title="My Library">
    <div className="x10-3-0-my-library">
      <div className="flex-col-3">
        {/* <div className="frame-2923"> */}
          <BackButton location="/dashboard" />
        {/* </div> */}
          {/* <component-comming-soon></component-comming-soon> */}
        <div className="my-library border-1px-onyx">
          <div className="articles">
            <div className="flex-col-2">
              <div className="articles-1 valign-text-middle inter-medium-quarter-spanish-white-16px">Articles</div>
              <Articles
                overlapGroup="https://anima-uploads.s3.amazonaws.com/projects/6062d6e20bde0e437064350b/releases/606aaa31b1a8ab69d61ae593/img/article-1@2x.png"
                farming="FARMING"
                text2="How to farm in 2020 and don’t lose you business"
                address="5 min read"
              />
            </div>
            <Articles
              overlapGroup="https://anima-uploads.s3.amazonaws.com/projects/6062d6e20bde0e437064350b/releases/606aaa31b1a8ab69d61ae593/img/article-2@2x.png"
              farming="NEWS"
              text2="How to farm in 2020 and don’t lose you business"
              address="5 min read"
              className="article-"
            />
            <Articles
              overlapGroup="https://anima-uploads.s3.amazonaws.com/projects/6062d6e20bde0e437064350b/releases/606aaa31b1a8ab69d61ae593/img/article-3@2x.png"
              farming="NEWS"
              text2="How to farm in 2020 and don’t lose you business"
              address="5 min read"
              className="article-"
            />
          </div>
          <div className="vidoes">
            <div className="flex-col-2">
              <div className="videos valign-text-middle inter-medium-quarter-spanish-white-16px">Videos</div>
              <Videos
                overlapGroup="https://anima-uploads.s3.amazonaws.com/projects/6062d6e20bde0e437064350b/releases/606aaa31b1a8ab69d61ae593/img/video-1@2x.png"
                playButton1="https://anima-uploads.s3.amazonaws.com/projects/6062d6e20bde0e437064350b/releases/6062e54b21e052fe79fa34b5/img/vector-15@2x.png"
                text5="Be happy, find your self! Motivation 2020"
                className="video-"
              />
            </div>
            <Videos
              overlapGroup="https://anima-uploads.s3.amazonaws.com/projects/6062d6e20bde0e437064350b/releases/606aaa31b1a8ab69d61ae593/img/video-2@2x.png"
              playButton1="https://anima-uploads.s3.amazonaws.com/projects/6062d6e20bde0e437064350b/releases/6062e54b21e052fe79fa34b5/img/vector-15@2x.png"
              text5="Be happy, find your self! Motivation 2020"
              className="video-"
            />
            <Videos
              overlapGroup="https://anima-uploads.s3.amazonaws.com/projects/6062d6e20bde0e437064350b/releases/606aaa31b1a8ab69d61ae593/img/video-3@2x.png"
              playButton1="https://anima-uploads.s3.amazonaws.com/projects/6062d6e20bde0e437064350b/releases/6062e54b21e052fe79fa34b5/img/vector-15@2x.png"
              text5="Be happy, find your self! Motivation 2020"
              className="video-"
            />
          </div>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
}

export default MyLibrary;

function Articles({ overlapGroup, farming, text2, address, className }) {
  return (
    <div className={`article-1 border-1px-onyx ${className || ""}`}>
      <div className="overlap-group-4" style={{ backgroundImage: `url(${overlapGroup})` }}>
        <div className="info-1">
          <div className="frame-3321">
            <div className="farming valign-text-middle ibmplexsans-semi-bold-caribbean-green-14px">{farming}</div>
            <div className="text-2 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-24px">{text2}</div>
          </div>
          <div className="address valign-text-middle ibmplexsans-regular-normal-quarter-spanish-white-16px">
            {address}
          </div>
        </div>
      </div>
    </div>
  );
}


function Videos({ overlapGroup, playButton1, text5, className }) {

  return (
    <div className={`video-1 border-1px-onyx ${className || ""}`}>
      <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
        <div className="frame-1971">
          <div className="play-button-1" style={{ backgroundImage: `url(${playButton1})` }}></div>
        </div>
        <div className="frame-3239"></div>
        <p className="text-5 valign-text-middle inter-medium-quarter-spanish-white-16px">{text5}</p>
      </div>
    </div>
  );
}


