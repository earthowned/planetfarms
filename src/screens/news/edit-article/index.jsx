import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { DashboardLayout } from "layout/dashboard";
import { ArticleEditorType } from "constants/enums";
import { ArticleEditor } from "common/containers/news";

import { actions } from "actions";

export const EditArticlePage = () => {
  const alert = useAlert();
  const { id } = useParams();
  const history = useHistory();

  const [article, setArticle] = useState(undefined);
  const currentUser = useSelector((state) => state.userLogin);

  useEffect(async () => {
    try {
      const response = await actions.news.get({ id });

      if (response.creator !== currentUser?.userInfo?.id) {
        history.goBack();
        return;
      }

      setArticle(response);
    } catch (error) {
      alert.error(error);
    }
  }, [id, currentUser]);

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
        userId: currentUser?.userInfo?.id,
        communityId: values.community?.value,
        oldContent: initialValues.newsContent,
      });

      alert.success("Updated successfully");
      history.goBack();
    } catch (error) {
      alert.error(error);
    }
  };

  const handlePreview = () => {};

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
