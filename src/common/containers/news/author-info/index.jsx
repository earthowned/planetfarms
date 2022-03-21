import { Avatar } from "common/avatar";

import { parseAuthor } from "utils/parsers/news";

import "./styles.scss";

export const NewsAuthorInfo = ({ author }) => {
  const { username, avatar } = parseAuthor(author);

  return (
    <div className="news-author-container">
      <Avatar src={avatar} placeholderIcon="person" />
      <h4>{username}</h4>
    </div>
  );
};
