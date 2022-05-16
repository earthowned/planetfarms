import { courseModel } from "components/courses/forms";

export const initialValues = (course) => {
  const title = course?.title || "";
  const price = course?.price || "";
  const thumbnail = course?.thumbnail || null;
  const isPublished = course?.isPublished || false;

  const parseDescription = (content) => {
    if (!content || content.length === 0) return [];
    return content.map((item) => {
      if (item.heading || item.text) {
        return {
          type: "Text",
          data: {
            textHeading: item.heading || "",
            textDescription: item.text || "",
          },
        };
      }

      if (item.image) {
        return {
          type: "Image",
          data: {
            lessonImg: item.image,
            photoDescription: item.description || "",
          },
        };
      }

      return null;
    });
  };

  return {
    [courseModel.price.name]: price,
    [courseModel.title.name]: title,
    [courseModel.thumbnail.name]: thumbnail,
    [courseModel.isPublished.name]: isPublished,
    [courseModel.description.name]: parseDescription(course?.description),
  };
};
