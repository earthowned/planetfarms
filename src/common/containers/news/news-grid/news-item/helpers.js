/* eslint-disable no-underscore-dangle */

export const parseCoverImage = (news) => {
  const attachment = news?._attachments;

  if (attachment === ".webp") return null;

  if (news?._attachments) {
    return `${process.env.REACT_APP_CDN_BASE_URL}/news/${news._attachments}`;
  }

  return null;
};
