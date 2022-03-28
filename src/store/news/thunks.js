import { setPreviewArticle, removePreviewArticle } from "./slices";

export const setPreviewedArticleThunk =
  ({ article }) =>
  (dispatch) => {
    // TODO: Prepare article to preview;
    console.log("article", article);
    dispatch(setPreviewArticle(article));
  };

export const removePreviewedArticleThunk = (dispatch) =>
  dispatch(removePreviewArticle());
