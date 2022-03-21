import { useEffect } from "react";
import dayjs from "dayjs";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";

import { DashboardLayout } from "layout/dashboard";
import { IconButton } from "common/buttons/icon-button";
import { NewsAuthorInfo, NewsArticleInfo } from "common/containers/news";

import { api } from "api";

import "./styles.scss";

export const ArticlePage = () => {
  const alert = useAlert();
  const { id } = useParams();

  useEffect(async () => {
    try {
      const response = await api.news.get({ id });
      console.log(response);
    } catch (error) {
      alert.error(error);
    }
  }, [id]);

  return (
    <DashboardLayout withBackButton>
      <div className="article-page-container">
        <div className="header">
          <div className="top-container">
            <NewsAuthorInfo author={{ firstName: "Kek", lastName: "Lol" }} />
            <IconButton variant="white" onClick={() => {}} icon="more" />
          </div>

          <NewsArticleInfo
            category="Farm"
            readTime="15 min"
            createdAt={dayjs()}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};
