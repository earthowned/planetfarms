import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { actions } from "actions";

export const EditArticlePage = () => {
  const alert = useAlert();
  const { id } = useParams();
  const history = useHistory();

  const currentUser = useSelector((state) => state.userLogin);

  const [article, setArticle] = useState(undefined);

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

  return <div />;
};
