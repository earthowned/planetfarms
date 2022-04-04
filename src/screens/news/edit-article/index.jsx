import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { DashboardLayout } from "layout/dashboard";
import { ArticleEditorType } from "constants/enums";
import { ArticleEditor } from "common/containers/news";

import { actions } from "actions";
import { useArticle } from "hooks/news/useArticle";
import { selectCurrentUser } from "store/user/selectors";
import { setPreviewedArticleThunk } from "store/news/thunks";

export const EditArticlePage = () => {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const { article } = useArticle();

  const handleSubmit = async ({ initialValues, values }) => {
    try {
      await actions.news.edit({
        title: values.title,
        articleId: article.id,
        coverImage: values.coverImage,
        newContent: values.newsContent,
        richTextId: article.richtextId,
        readTime: values.readTime.label,
        category: values.category.label,
        userId: currentUser.userID,
        communityId: values.community?.value,
        oldContent: initialValues.newsContent,
      });

      alert.success("Updated successfully");
      history.goBack();
    } catch (error) {
      alert.error(error);
    }
  };

  const handlePreview = (privewArticle) => {
    setPreviewedArticleThunk({
      article: privewArticle,
    })(dispatch);
    history.push("/news/preview");
  };

  return (
    <DashboardLayout title="Edit Article" withBackButton>
      <ArticleEditor
        article={article}
        onSubmit={handleSubmit}
        onPreview={handlePreview}
        type={ArticleEditorType.Edit}
      />
    </DashboardLayout>
  );
};
