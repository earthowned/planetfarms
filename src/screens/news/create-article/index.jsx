import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "actions";
import { DashboardLayout } from "layout/dashboard";
import { ArticleEditorType } from "constants/enums";
import { ArticleEditor } from "common/containers/news";

import { generatePayload } from "./helpers";

export const CreateArticlePage = () => {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userLogin);

  const handleSubmit = async (values) => {
    try {
      const response = await actions.news.create({
        userId: user.userInfo.id,
        ...generatePayload({ values }),
      })(dispatch);
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
