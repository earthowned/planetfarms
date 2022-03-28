import { parseCoverImage } from "utils/parsers/news";
import newsPlaceholderImage from "assets/images/news-placeholder.png";
import { isFileInstanse } from "utils/parsers/file";

export const getCoverImageUrl = ({ article, isPreviewMode }) => {
  const { coverImage } = article || {};

  if (isPreviewMode && coverImage) {
    return isFileInstanse(coverImage)
      ? URL.createObjectURL(article.coverImage)
      : parseCoverImage(article);
  }

  return newsPlaceholderImage;
};
