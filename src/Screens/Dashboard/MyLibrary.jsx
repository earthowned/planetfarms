import React from "react";
import "./my-library.css";
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout';
import BackButton from '../../Components/BackButton/BackButton';

const articles = [
  {
    id: 1,
    img: "https://anima-uploads.s3.amazonaws.com/projects/6062d6e20bde0e437064350b/releases/606aaa31b1a8ab69d61ae593/img/article-1@2x.png",
    title: "How to farm in 2020 and don’t lose you business",
    category: "FARMING",
    time: "5 min read"
  },
  {
    id: 2,
    img: "https://anima-uploads.s3.amazonaws.com/projects/6062d6e20bde0e437064350b/releases/606aaa31b1a8ab69d61ae593/img/article-2@2x.png",
    title: "How to farm in 2020 and don’t lose you business",
    category: "NEWS",
    time: "5 min read"
  },
  {
    id: 3,
    img: "https://anima-uploads.s3.amazonaws.com/projects/6062d6e20bde0e437064350b/releases/606aaa31b1a8ab69d61ae593/img/article-1@2x.png",
    title: "How to farm in 2020 and don’t lose you business",
    category: "FARMING",
    time: "5 min read"
  },
]

const videos = [
  {
    id: 1,
    img: "https://anima-uploads.s3.amazonaws.com/projects/6062d6e20bde0e437064350b/releases/606aaa31b1a8ab69d61ae593/img/article-1@2x.png",
    title: "How to farm in 2020 and don’t lose you business",
    category: "FARMING",
    time: "5 min read"
  },
  {
    id: 2,
    img: "https://anima-uploads.s3.amazonaws.com/projects/6062d6e20bde0e437064350b/releases/606aaa31b1a8ab69d61ae593/img/article-2@2x.png",
    title: "How to farm in 2020 and don’t lose you business",
    category: "NEWS",
    time: "5 min read"
  },
  {
    id: 3,
    img: "https://anima-uploads.s3.amazonaws.com/projects/6062d6e20bde0e437064350b/releases/606aaa31b1a8ab69d61ae593/img/article-1@2x.png",
    title: "How to farm in 2020 and don’t lose you business",
    category: "FARMING",
    time: "5 min read"
  },
]

function MyLibrary() {
  return (
    <DashboardLayout title="My Library">
    <div className="x10-3-0-my-library">
      <div className="flex-col-3">
        {/* <div className="frame-2923"> */}
          <BackButton location="/dashboard" />
        {/* </div> */}
        <div className="my-library border-1px-onyx">
          <h4 className="article-header">Articles</h4>
          <div className="articles">
            {
             articles && articles.map(item => {
                return (
                  <div className="article-card" key={item.id}>
                    <div className="article-background" style={{backgroundImage: `url(${item.img})`}}>
                      <div className="article-content">
                        <h6>{item.category}</h6>
                        <h4>{item.title}</h4>
                        <p>{item.time}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <h4 className="article-header">Videos</h4>
          <div className="articles">
            {
             videos && videos.map(item => {
                return (
                  <div className="article-card" key={item.id}>
                    <div className="video-background" style={{backgroundImage: `url(${item.img})`}}>
                        <img src="/img/video-icon.svg" />
                    </div>
                  </div>
                )
              })
            }
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


