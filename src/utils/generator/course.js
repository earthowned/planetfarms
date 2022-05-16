import { api } from "api";
import { isFileInstanse } from "utils/parsers/file";
import { ContentBuilderAction } from "constants/enums";

const getImageFiles = ({ thumbnail, description }) => {
  const images = new Map();

  // console.log("thumbnail", thumbnail);
  // console.log("description", description);

  if (isFileInstanse(thumbnail)) {
    images.set(0, thumbnail);
  }

  // console.log("image_before_for_each", images);

  description.forEach(({ type, data }, index) => {
    if (type === ContentBuilderAction.Image) {
      if (isFileInstanse(data.lessonImg)) {
        images.set(index + 1, data.lessonImg);
      }
    }
  });

  // console.log(images);

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
        // console.log(image);
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
    console.log(files, files.size);

    if (files.size > 0) {
      const formData = createFormData([...files.values()]);
      const imageUrls = await api.courses.uploadImages(formData);
      console.log("urls", imageUrls);

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

        // if (index === 0 && withThumbnail) files.set(0, url);
        // else files.set(withThumbnail ? index + 1 : index + 2, url);

        // const isThumbnail = files.has(0) && index === 0;
        // console.log(isThumbnail, index);
        // files.set(isThumbnail ? index : index + 1, url);
      });
    }

    console.log("files_uploaded", files);

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
