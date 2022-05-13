import { api } from "api";
import { mockedCourses } from "utils/mocked";
import { ContentBuilderAction } from "constants/enums";

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

const createFormData = (images = []) => {
  const formdata = new FormData();
  images.forEach((image) => formdata.append("images", image));
  return formdata;
};

const updateDescription = (description, images) => {
  if (images.size > 1) {
    return description.map(({ type, data }, index) => {
      switch (type) {
        case ContentBuilderAction.Image:
          return {
            image: images.get(index + 1),
            description: data.photoDescription,
          };

        default:
          return { heading: data.textHeading, text: data.textDescription };
      }
    });
  }

  return description;
};

export const createCourseThunk =
  ({ thumbnail, title, price, description, isPublished }) =>
  async (dispatch) => {
    try {
      // TODO: setIsLoading
      const images = new Map();
      images.set(0, thumbnail);

      description.forEach(({ type, data }, index) => {
        if (type === ContentBuilderAction.Image) {
          images.set(index + 1, data.lessonImg);
        }
      });

      const urls = await api.courses.uploadImages(
        createFormData([...images.values()])
      );

      urls.forEach((url, index) =>
        images.set(index === 0 ? index : index + 1, url)
      );

      const course = {
        title,
        isPublished,
        thumbnail: images.get(0),
        price: parseFloat(price).toFixed(2),
        description: updateDescription(description, images),
      };

      const response = await api.courses.create(course);

      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    } finally {
      // TODO: setIsLoading
    }
  };
