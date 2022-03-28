import { createSelector } from "reselect";

const selectNewsStore = (store) => store.news;

export const selectPreviewedArticle = createSelector(
  [selectNewsStore],
  (store) => store.previewedArticle
);
