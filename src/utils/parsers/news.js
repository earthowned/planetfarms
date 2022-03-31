/* eslint-disable no-underscore-dangle */
import { NewsContentType } from "constants/enums";
import { GET_VIDEO, LESSON_IMG } from "utils/urlConstants";

const filesUrl = process.env.REACT_APP_CDN_BASE_URL;

export const parseCoverImage = (news) => {
  const attachment = news?._attachments;
  if (attachment === ".webp") return null;
  return attachment ? `${filesUrl}/news/${attachment}` : null;
};

export const parseAuthor = (author) => {
  const parseUserName = (user) => {
    const { firstName, lastName, email } = user || {};
    if (firstName && lastName) return `${firstName} ${lastName}`;
    return firstName || lastName || email || "Unknown author";
  };

  const parseUserAvatar = (attachment) => {
    return attachment ? `${filesUrl}/attachments/${attachment}` : null;
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
        return { ...item, type: NewsContentType.Text };
      }

      if (lessonImg) {
        return { ...item, type: NewsContentType.Image };
      }

      if (videoResource || videoLink) {
        return { ...item, type: NewsContentType.Video };
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
