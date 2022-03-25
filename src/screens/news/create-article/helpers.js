import { NewsContentType } from "constants/enums";

const prepareNewsContent = (fields) => {
  return fields.map((item) => {
    const { type, data } = item || {};

    switch (type) {
      case NewsContentType.Text: {
        return {
          textHeading: data.title,
          textDescription: data.text,
        };
      }

      case NewsContentType.Image: {
        return {
          lessonImg: data.imageFile,
          photoDescription: data.imageDescription,
          isImgDesc: !!data.imageDescription,
        };
      }

      case NewsContentType.Video: {
        return {
          videoTitle: data.videoTitle || "",
          videoDescription: data.videoDescription || "",
          videoLink: data.videoLink || "",
          videoResource: data.videoFile,
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
    category: values.category?.label,
    readTime: values.readTime?.label,
    communityId: values.community?.value,
    content: prepareNewsContent(values.newsContent),
  };
};
