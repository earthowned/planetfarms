import { useEffect, useState, useMemo } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { DashboardLayout } from "layout/dashboard";
import { IconButton } from "common/buttons/icon-button";
import { NewsAuthorInfo, NewsArticleInfo } from "common/containers/news";
import { ArticleContentList } from "common/containers/news/article-content";

import { actions } from "actions";
import { parseCoverImage } from "utils/parsers/news";

import "./styles.scss";

export const ArticlePage = () => {
  const alert = useAlert();
  const { id } = useParams();
  const currentUser = useSelector((state) => state.userLogin);

  const [article, setArticle] = useState(null);

  const showEditButton = useMemo(() => {
    return currentUser?.userInfo?.id === article?.creator;
  }, [currentUser, article]);

  useEffect(async () => {
    try {
      const response = await actions.news.get({ id });
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
            <NewsAuthorInfo
              author={{ firstName: "Unknown", lastName: "User" }}
            />
            {showEditButton && (
              <IconButton variant="white" onClick={() => {}} icon="more" />
            )}
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
          <div className="socials-container">
            <IconButton variant="socials" icon="link" onClick={() => {}} />
            <IconButton
              variant="socials"
              onClick={() => {}}
              icon="facebook-outline"
            />
            <IconButton variant="socials" icon="twitter" onClick={() => {}} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
