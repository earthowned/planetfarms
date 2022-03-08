/* eslint-disable no-underscore-dangle */

export const parseCoverImage = (news) => {
  if (news?._attachments) {
    return `${process.env.REACT_APP_CDN_BASE_URL}/news/${news._attachments}`;
  }

  return null;
};
