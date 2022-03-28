import { useEffect, useMemo, useCallback } from "react";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation, useHistory } from "react-router-dom";

import { actions } from "actions";
import { useStateIfMounted } from "hooks";
import { parsePreviewArticle } from "utils/parsers/news";
import { selectPreviewedArticle } from "store/news/selectors";
import { removePreviewedArticleThunk } from "store/news/thunks";

const ArticlePageType = {
  Edit: "Edit",
  View: "View",
  Preview: "Preview",
};

export const useArticle = () => {
  const alert = useAlert();
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const [article, setArticle] = useStateIfMounted(null);
  const [isLoading, setIsLoading] = useStateIfMounted(false);
  const [isPreviewMode, setIsPreviewMode] = useStateIfMounted(false);

  const currentUser = useSelector((state) => state.userLogin);
  const previewedArticle = useSelector(selectPreviewedArticle);

  const pageType = useMemo(() => {
    if (location.pathname.includes("edit")) return ArticlePageType.Edit;
    if (location.pathname.includes("preview")) return ArticlePageType.Preview;
    return ArticlePageType.View;
  }, [location.pathname]);

  const dependencies = [
    id,
    location,
    pageType,
    currentUser,
    isPreviewMode,
    previewedArticle,
  ];

  const getArticle = useCallback(async () => {
    try {
      setIsLoading(true);

      switch (pageType) {
        case ArticlePageType.Edit: {
          if (previewedArticle) {
            setArticle({ ...previewedArticle, isFromPreview: true });
            dispatch(removePreviewedArticleThunk());
            return;
          }

          if (!previewedArticle && !article) {
            const response = await actions.news.get({ id });
            if (response.creator !== currentUser?.userInfo?.id) {
              history.goBack();
              return;
            }
            setArticle(response);
          }

          break;
        }

        case ArticlePageType.View: {
          const response = await actions.news.get({ id });
          setArticle(response);
          break;
        }

        case ArticlePageType.Preview: {
          setArticle(parsePreviewArticle(previewedArticle));
          break;
        }

        default:
          break;
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      alert.error(error);
    }
  }, [...dependencies]);

  useEffect(() => {
    if (location.pathname === "/news/preview") {
      setIsPreviewMode(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    const abortController = new AbortController();
    getArticle();

    return () => {
      abortController.abort();
    };
  }, []);

  return { article, isLoading, isPreviewMode };
};
