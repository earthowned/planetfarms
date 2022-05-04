import { createSelector } from "reselect";

const selectStore = (store) => store.courses;

export const selectCoursesList = createSelector(
  [selectStore],
  (store) => store.list
);

export const selectCurrentCourse = createSelector(
  [selectStore, (_, id) => id],
  (store, id) => store.list.find((item) => item.id === id)
);
