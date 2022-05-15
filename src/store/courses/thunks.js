import { api } from "api";
import { Generator } from "utils/generator";
import { mockedCourses } from "utils/mocked";

import { setCourses } from "./slice";

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

export const createCourseThunk = (values) => async (dispatch) => {
  try {
    // dispatch(setIsLoading(true));

    const coursePayload = await Generator.course.create(values);
    const response = await api.courses.create(coursePayload);

    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  } finally {
    // dispatch(setIsLoading(false));
  }
};

export const updateCourseThunk =
  ({ id, ...values }) =>
  async (dispatch) => {
    try {
      // dispatch(setIsLoading(true));

      const coursePayload = await Generator.course.create(values);
      console.log("payload", coursePayload);
      const response = await api.courses.update({ id, ...coursePayload });

      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    } finally {
      // dispatch(setIsLoading(false));
    }
  };
