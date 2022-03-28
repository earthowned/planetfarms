import { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";

import { api } from "api";
import { getErrorMessage } from "utils/error";
import { selectPreviewedArticle } from "store/news/selectors";

export const useArticle = () => {
  const alert = useAlert();
  const { id } = useParams();
  const location = useLocation();

  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const previewedArticle = useSelector(selectPreviewedArticle);

  useEffect(() => {
    if (location.pathname === "/news/preview") {
      setIsPreviewMode(true);
    }
  }, [location.pathname]);

  useEffect(async () => {
    try {
      setIsLoading(true);

      if (isPreviewMode) {
        setArticle(previewedArticle);
        setIsLoading(false);
        return;
      }

      const response = await api.news.get({ id });
      setArticle(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      alert.error(getErrorMessage(error));
    }
  }, [id, location, previewedArticle, isPreviewMode]);

  return { article, isLoading, isPreviewMode };
};
