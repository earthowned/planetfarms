/* eslint-disable no-underscore-dangle */

export const parseCoverImage = (news) => {
  const attachment = news?._attachments;

  if (attachment === ".webp") return null;

  if (news?._attachments) {
    return `${process.env.REACT_APP_CDN_BASE_URL}/news/${news._attachments}`;
  }

  return null;
};

const parseUserName = (user) => {
  const { firstName, lastName, email } = user || {};
  if (firstName && lastName) return `${firstName} ${lastName}`;
  return firstName || lastName || email || "Unknown author";
};

const parseUserAvatar = (attachment) => {
  if (attachment)
    return `${process.env.REACT_APP_CDN_BASE_URL}/attachments/${attachment}`;
  return null;
};

export const parseUser = (user) => ({
  userName: parseUserName(user),
  avatar: parseUserAvatar(user?.attachments),
});

export const parseCategory = (category) => {
  return category || "No category";
};
