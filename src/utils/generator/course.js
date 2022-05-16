import { api } from "api";
import { isFileInstanse } from "utils/parsers/file";
import { ContentBuilderAction } from "constants/enums";

const getImageFiles = ({ thumbnail, description }) => {
  const images = new Map();

  if (isFileInstanse(thumbnail)) {
    images.set(0, thumbnail);
  }

  description.forEach(({ type, data }, index) => {
    if (type === ContentBuilderAction.Image) {
      if (isFileInstanse(data.lessonImg)) {
        images.set(index + 1, data.lessonImg);
      }
    }
  });

  return images;
};

const createFormData = (images = []) => {
  const formdata = new FormData();
  images.forEach((image) => formdata.append("images", image));
  return formdata;
};

const generateDescription = ({ description, imageUrls }) => {
  return description.map(({ type, data }, index) => {
    switch (type) {
      case ContentBuilderAction.Image: {
        const { lessonImg, photoDescription } = data;

        let image = lessonImg;
        if (isFileInstanse(lessonImg)) image = imageUrls.get(index + 1);

        return { image, description: photoDescription || "" };
      }

      default: {
        const { textHeading, textDescription } = data;
        return { heading: textHeading, text: textDescription };
      }
    }
  });
};

export const create = async ({
  title,
  price,
  thumbnail,
  isPublished,
  description,
}) => {
  try {
    const payload = {
      title,
      isPublished,
      price: parseFloat(price).toFixed(2),
    };

    const files = getImageFiles({ thumbnail, description });

    if (files.size > 0) {
      const formData = createFormData([...files.values()]);
      const imageUrls = await api.courses.uploadImages(formData);

      // Update files Map with received URL's;
      imageUrls.forEach((url, index) => {
        const isThumbnail = files.has(0) && index === 0;

        if (isThumbnail) {
          files.set(0, url);
        } else {
          files.forEach((value, key) => {
            if (isFileInstanse(value)) files.set(key, url);
          });
        }
      });
    }

    payload.thumbnail = files.get(0) || thumbnail;
    payload.description = generateDescription({
      description,
      imageUrls: files,
    });

    return Promise.resolve(payload);
  } catch (error) {
    return Promise.reject(error);
  }
};
