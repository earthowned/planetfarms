import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { DashboardLayout } from "layout/dashboard";
import { ArticleEditorType } from "constants/enums";
import { ArticleEditor } from "common/containers/news";

import { actions } from "actions";
import { setPreviewedArticleThunk } from "store/news/thunks";

export const CreateArticlePage = () => {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userLogin);

  const handleSubmit = async ({ values }) => {
    try {
      const response = await actions.news.create({
        title: values.title,
        userId: user.userInfo.id,
        content: values.newsContent,
        coverImage: values.coverImage,
        category: values.category?.label,
        readTime: values.readTime?.label,
        communityId: values.community?.value,
      });
      history.replace(`/news/${response.newsId}`);
    } catch (error) {
      alert.error(error);
    }
  };

  const handlePreview = (article) => {
    setPreviewedArticleThunk({ article })(dispatch);
    history.push("/news/preview");
  };

  return (
    <DashboardLayout title="Create News" withBackButton>
      <ArticleEditor
        onSubmit={handleSubmit}
        onPreview={handlePreview}
        type={ArticleEditorType.Create}
      />
    </DashboardLayout>
  );
};
