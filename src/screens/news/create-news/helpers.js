import { NewsContentType } from "constants/enums";

const prepareNewsContent = (fields) => {
  return fields.map((item) => {
    switch (item.type) {
      case NewsContentType.Text: {
        return { textHeading: item.title, textDescription: item.text };
      }

      case NewsContentType.Image: {
        return {
          lessonImg: item.imageFile,
          photoDescription: item.imageDescription,
          isImgDesc: !!item.imageDescription,
        };
      }
      default:
        return null;
    }
  });
};

export const generatePayload = ({ values }) => {
  return {
    title: values.title,
    coverImage: values.coverImage,
    category: values.category.label,
    readTime: values.readTime.label,
    communityId: values.community.value,
    content: prepareNewsContent(values.newsContent),
  };
};
