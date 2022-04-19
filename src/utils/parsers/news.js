/* eslint-disable no-underscore-dangle */
import { ContentBuilderAction } from "constants/enums";
import {
  GET_NEWS,
  GET_VIDEO,
  LESSON_IMG,
  ATTACHMENT,
} from "utils/urlConstants";

export const parseCoverImage = (news) => {
  const { _attachments: attachment, coverImage } = news ?? {};

  if (attachment) {
    if (attachment === ".webp") return null;
    return `${GET_NEWS}${attachment}`;
  }

  if (coverImage) {
    return `${GET_NEWS}${coverImage}`;
  }

  return null;
};

export const getAttachmentUrl = (article) => {
  const attachment = article?._attachments;
  if (attachment === ".webp") return null;
  return attachment;
};

export const parseAuthor = (author) => {
  const parseUserName = (user) => {
    const { firstName, lastName, email } = user || {};
    if (firstName && lastName) return `${firstName} ${lastName}`;
    return firstName || lastName || email || "Unknown author";
  };

  const parseUserAvatar = (attachment) => {
    return attachment ? `${ATTACHMENT}${attachment}` : null;
  };

  return {
    username: parseUserName(author),
    avatar: parseUserAvatar(author?.attachments),
  };
};

export const parseArticleContent = (article) => {
  const { rich_text: data } = article || {};
  const { texts, photos, videos } = data || {};

  const content = [...texts, ...photos, ...videos]
    .sort((a, b) => Number(a?.order) - Number(b?.order))
    .map((item) => {
      const {
        lessonImg,
        videoLink,
        textHeading,
        videoResource,
        textDescription,
      } = item;

      if (textDescription || textHeading) {
        return { ...item, type: ContentBuilderAction.Text };
      }

      if (lessonImg) {
        return { ...item, type: ContentBuilderAction.Image };
      }

      if (videoResource || videoLink) {
        return { ...item, type: ContentBuilderAction.Video };
      }

      return item;
    });

  return content;
};

export const parseArticleImage = (fileName) => {
  return `${LESSON_IMG}${fileName}`;
};

export const parseArticleVideo = (fileName) => {
  return `${GET_VIDEO}${fileName}`;
};

export const parsePreviewArticle = (article) => {
  const data = {};

  if (!article) return {};

  data.title = article.title || "";
  data.category = article.category?.label || "";
  data.community = article.community?.label || "";
  data.readTime = article.readTime?.label || "";
  data.coverImage = article.coverImage || null;

  data.content = article.newsContent?.map((item) => ({
    ...item.data,
    type: item.type,
  }));

  return data;
};
