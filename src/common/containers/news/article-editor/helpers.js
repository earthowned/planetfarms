import { NewsContentType } from "constants/enums";
import {
  parseArticleImage,
  parseArticleVideo,
  parseCoverImage,
} from "utils/parsers/news";

import { model, readTimeOptions, categoryOptions } from "./config";

const { title, readTime, category, newsContent } = model;

export const getInitialValues = (article) => {
  const initialValues = {
    [model.title.name]: "",
    [model.coverImage.name]: null,
    [model.category.name]: null,
    [model.readTime.name]: null,
    [model.community.name]: null,
    [model.newsContent.name]: [],
  };

  if (article) {
    if (article.title) {
      initialValues[title.name] = article.title || "";
    }

    initialValues[model.coverImage.name] = parseCoverImage(article);

    if (article.category) {
      initialValues[category.name] =
        categoryOptions.find((item) => item.label === article.category) || "";
    }

    if (article.readTime) {
      initialValues[readTime.name] =
        readTimeOptions.find((item) => item.label === article.readTime) || "";
    }

    if (article.content.length > 0) {
      initialValues[newsContent.name] = article.content.map((item) => {
        switch (item.type) {
          case NewsContentType.Text: {
            const { type, textDescription, textHeading, ...rest } = item;
            return {
              type: item.type,
              data: {
                title: textHeading || "",
                text: textDescription || "",
                ...rest,
              },
            };
          }

          case NewsContentType.Image: {
            return {
              type: item.type,
              data: {
                imageDescription: item.photoDescription || "",
                imageFile: item.lessonImg
                  ? parseArticleImage(item.lessonImg)
                  : "",
                ...item,
              },
            };
          }

          case NewsContentType.Video: {
            const { videoLink, videoResource } = item;

            return {
              type: item.type,
              data: {
                videoFile: videoResource
                  ? parseArticleVideo(videoResource)
                  : "",
                videoLink:
                  videoLink && videoLink !== "undefined" ? videoLink : "",
                ...item,
              },
            };
          }

          default:
            return null;
        }
      });
    }

    return initialValues;
  }

  return initialValues;
};
