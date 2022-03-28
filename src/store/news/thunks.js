import { setPreviewArticle, removePreviewArticle } from "./slices";

export const setPreviewedArticleThunk =
  ({ article }) =>
  (dispatch) => {
    dispatch(setPreviewArticle(article));
  };

export const removePreviewedArticleThunk = () => (dispatch) => {
  dispatch(removePreviewArticle());
};
