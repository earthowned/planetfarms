import cx from "classnames";

import { Avatar } from "common/avatar";

import "./styles.scss";

export const NewsItem = ({ variant, news }) => {
  const containerClassName = cx("news-item-container", {
    [`news-item-container-${variant}`]: true,
  });

  return (
    <div className={containerClassName}>
      <div className="cover-image-container">
        <img src={news.image} alt="" />
      </div>

      <div className="news-data-container">
        <div className="top-container">
          {news.tag && <h6>{news.tag}</h6>}

          {news.createdAt && (
            <div className="dot-container">
              <div className="dot" />
              <h6 className="grey">{news.createdAt}</h6>
            </div>
          )}

          {news.readTime && (
            <div className="dot-container read-time-text">
              <div className="dot" />
              <h6 className="grey">{news.readTime}</h6>
            </div>
          )}
        </div>

        {variant === "default" && <h3>{news.title}</h3>}
        {variant === "big" && <h2>{news.title}</h2>}
        {variant === "mobile" && <h4>{news.title}</h4>}

        <h5>{news.smallText}</h5>

        <div className="news-author-container">
          <Avatar placeholderIcon="person" />
          <h4>{news.authorName}</h4>
        </div>
      </div>
    </div>
  );
};
