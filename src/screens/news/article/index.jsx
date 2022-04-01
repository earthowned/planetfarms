import { useState, useMemo } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { DashboardLayout } from "layout/dashboard";
import { IconButton } from "common/buttons/icon-button";
import { DestructiveModalContainer } from "common/modal-containers";
import { NewsAuthorInfo, NewsArticleInfo } from "common/containers/news";
import { ModalOptionsButton } from "common/buttons/modal-options-button";
import { ArticleContentList } from "common/containers/news/article-content";

import { actions } from "actions";
import { useArticle } from "hooks/news/useArticle";

import { getCoverImageUrl } from "./helpers";
import { moreOptions, MoreActionType } from "./config";

import "./styles.scss";

export const ArticlePage = () => {
  const alert = useAlert();
  const { id } = useParams();
  const history = useHistory();
  const { article, isPreviewMode } = useArticle();

  const currentUser = useSelector((state) => state.userLogin);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const showEditButton = useMemo(() => {
    return currentUser?.userInfo?.id === article?.creator;
  }, [currentUser, article]);

  const handleMoreOptionSelect = (option) => {
    switch (option.label) {
      case MoreActionType.Edit:
        history.push(`/news/edit/${id}`);
        break;

      case MoreActionType.Delete:
        setIsDeleteModalVisible(true);
        break;

      default:
        break;
    }
  };

  const onDeleteArticle = async () => {
    try {
      setIsDeleteModalVisible(false);
      await actions.news.remove({ newsId: id });
      alert.success("Article successfully deleted");
      history.goBack();
    } catch (error) {
      alert.error(error);
    }
  };

  return (
    <DashboardLayout withBackButton>
      <div className="article-page-container">
        <div className="header">
          <div className="user-info">
            <NewsAuthorInfo author={article?.author} />

            {showEditButton && (
              <ModalOptionsButton
                icon="more"
                options={moreOptions}
                variant="transparent-white"
                onOptionSelect={handleMoreOptionSelect}
              />
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
              <img alt="" src={getCoverImageUrl({ article, isPreviewMode })} />
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

      <DestructiveModalContainer
        title="Delete News"
        actionButtonTitle="Delete"
        visible={isDeleteModalVisible}
        onActionClick={onDeleteArticle}
        onClose={() => setIsDeleteModalVisible(false)}
        message="Are you sure you want to delete this news?"
      />
    </DashboardLayout>
  );
};
