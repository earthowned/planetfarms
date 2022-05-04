import { mockedReviews } from "utils/mocked/reviews";
import { mockedLessons } from "utils/mocked/lessons";
import { mockedMaterials } from "utils/mocked/materials";

export const getCourseMatarials = (courseId) => {
  if (!courseId) return [];
  return mockedMaterials[courseId]?.materials || [];
};

export const getCourseReviews = (courseId) => {
  if (!courseId) return [];
  return mockedReviews[courseId]?.reviews || [];
};

export const getCourseLessons = (courseId) => {
  return mockedLessons[courseId]?.lessons || [];
};
