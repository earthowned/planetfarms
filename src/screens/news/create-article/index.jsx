import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { actions } from "actions";
import { DashboardLayout } from "layout/dashboard";
import { ArticleEditorType } from "constants/enums";
import { ArticleEditor } from "common/containers/news";

export const CreateArticlePage = () => {
  const alert = useAlert();
  const history = useHistory();

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

  return (
    <DashboardLayout title="Create News" withBackButton>
      <ArticleEditor
        onPreview={() => {}}
        onSubmit={handleSubmit}
        type={ArticleEditorType.Create}
      />
    </DashboardLayout>
  );
};
