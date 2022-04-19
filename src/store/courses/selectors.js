import { createSelector } from "reselect";

const selectStore = (store) => store.courses;

export const selectCoursesList = createSelector(
  [selectStore],
  (store) => store.list
);
