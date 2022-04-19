import { mockedCourses } from "utils/mocked";

import { createCourse, setCourses } from "./slice";

// const CourseFilterType = {
//   Browse: "Browse",
//   Active: "Active",
//   Completed: "Completed",
//   Archive: "Archive",
//   MyCourses: "MyCourses",
// };

export const getCoursesThunk = () => async (dispatch) => {
  try {
    const courses = mockedCourses;
    dispatch(setCourses(courses));
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createCourseThunk =
  ({ avatar, title, price, content, isPublished }) =>
  async (dispatch) => {
    try {
      const createdCourse = {
        title,
        price,
        content,
        isPublished,
        createdAt: new Date(),
        avatar: avatar ? URL.createObjectURL(avatar) : null,
      };

      dispatch(createCourse(createdCourse));
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };
