import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";

import { DashboardLayout } from "layout/dashboard";
import { IconButton } from "common/buttons/icon-button";
import { NewsAuthorInfo, NewsArticleInfo } from "common/containers/news";
import { ArticleContentList } from "common/containers/news/article-content";

import { news } from "actions";
import { parseCoverImage } from "utils/parsers/news";

import "./styles.scss";

export const ArticlePage = () => {
  const alert = useAlert();
  const { id } = useParams();

  const [article, setArticle] = useState(null);

  useEffect(async () => {
    try {
      const response = await news.get({ id });
      // console.log(response);
      setArticle(response.article);
    } catch (error) {
      alert.error(error);
    }
  }, [id]);

  return (
    <DashboardLayout withBackButton>
      <div className="article-page-container">
        <div className="header">
          <div className="user-info">
            <NewsAuthorInfo author={{ firstName: "Kek", lastName: "Lol" }} />
            <IconButton variant="white" onClick={() => {}} icon="more" />
          </div>

          <NewsArticleInfo
            category={article?.category}
            readTime={article?.readTime}
            createdAt={article?.createdAt}
          />

          <div className="article-title-container">
            {article?.title && <h2>{article.title}</h2>}
            <div className="image-cover-container">
              <img src={parseCoverImage(article)} alt="" />
            </div>
          </div>
        </div>

        <div className="article-content-container">
          <ArticleContentList content={article?.content} />
          <div className="socials-container" />
        </div>
      </div>
    </DashboardLayout>
  );
};
