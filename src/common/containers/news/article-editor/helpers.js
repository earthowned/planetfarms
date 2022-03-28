import { getAttachmentUrl } from "utils/parsers/news";
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
    if (article.isFromPreview) return article;

    if (article.title) {
      initialValues[title.name] = article.title || "";
    }

    initialValues[model.coverImage.name] = getAttachmentUrl(article);

    if (article.category) {
      initialValues[category.name] =
        categoryOptions.find((item) => item.label === article.category) || "";
    }

    if (article.readTime) {
      initialValues[readTime.name] =
        readTimeOptions.find((item) => item.label === article.readTime) || "";
    }

    if (article.content && article.content.length > 0) {
      initialValues[newsContent.name] = article.content.map(
        ({ type, ...props }) => ({
          type,
          data: { ...props },
        })
      );
    }

    if (article.newsContent && article.newsContent > 0) {
      initialValues[newsContent.name] = [...article.newsContent];
    }

    return initialValues;
  }

  return initialValues;
};
