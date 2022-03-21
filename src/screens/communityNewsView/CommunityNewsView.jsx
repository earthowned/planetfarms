import React, { useState, useEffect } from "react";
import "./CommunityNewsView.scss";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { DashboardLayout } from "layout/dashboard";
import BackButton from "../../components/backButton/BackButton";
import { getApi } from "../../utils/apiFunc";
import RichTextView from "../../components/richTextView/RichTextView";

function CommunityNewsViewPage() {
  const [news, setNews] = useState({});
  // const currentCommunity = localStorage.getItem("currentCommunity")
  //   ? JSON.parse(localStorage.getItem("currentCommunity"))
  //   : null;
  const dispatch = useDispatch();
  const { id } = useParams();

  async function getSingleNews(newsId) {
    const { data } = await getApi(
      dispatch,
      `${process.env.REACT_APP_API_BASE_URL}/api/news/${newsId}`
    );
    setNews(data);
  }

  useEffect(() => {
    getSingleNews(id);
  }, []);

  return (
    <DashboardLayout>
      <div className="x03-1-0-news-page">
        <div className="flex-col-2">
          <BackButton location="/news" />
          <RichTextView data={news} news />
          <div className="button-row-3">
            <div className="button-secondary-default border-0-5px-quarter-spanish-white">
              <img
                className="f1"
                src="/img/facebook-share-icon.svg"
                alt="facebook-icon"
              />
              <div className="your-business-goals valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-18px">
                Repost
              </div>
            </div>
            <div className="button-secondary-default border-0-5px-quarter-spanish-white">
              <img
                className="shape"
                src="/img/twitter-shape-icon.svg"
                alt="twitter-icon"
              />
              <div className="your-business-goals-1 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-18px">
                Tweet
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default CommunityNewsViewPage;
