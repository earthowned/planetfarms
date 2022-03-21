import dayjs from "dayjs";

import "./styles.scss";

export const NewsArticleInfo = ({ category, createdAt, readTime }) => {
  return (
    <div className="news-article-info-container">
      <h6>{category || "No category"}</h6>

      {createdAt && (
        <div className="dot-container">
          <div className="dot" />
          <h6 className="grey">{dayjs(createdAt).format("MMMM DD, YYYY")}</h6>
        </div>
      )}

      {readTime && (
        <div className="dot-container read-time-text">
          <div className="dot" />
          <h6 className="grey">{readTime}</h6>
        </div>
      )}
    </div>
  );
};
