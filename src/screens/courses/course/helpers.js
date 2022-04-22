import { mockedMaterials } from "utils/mocked/materials";

export const getCourseMatarials = (courseId) => {
  if (!courseId) return [];
  return mockedMaterials[courseId]?.materials || [];
};
