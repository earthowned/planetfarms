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

// export const selectLesson = createSelector([
//   selectStore,
//   (_, course, lesson) => [course, lesson],
//   (store, courseId, lessonId) => {
//     const course = store.list.find((item) => item.id === courseId);
//     const lesson = course?.lessons?.find((item) => item.id === lessonId);
//     return lesson;
//   },
// ]);
