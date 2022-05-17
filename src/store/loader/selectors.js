import { createSelector } from "reselect";

const loader = (store) => store.loader;

export const selectIsLoading = createSelector(
  [loader],
  (store) => store.isLoading
);
