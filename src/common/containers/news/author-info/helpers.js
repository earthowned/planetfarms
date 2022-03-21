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

export const parseAuthor = (author) => ({
  username: parseUserName(author),
  avatar: parseUserAvatar(author?.attachments),
});
