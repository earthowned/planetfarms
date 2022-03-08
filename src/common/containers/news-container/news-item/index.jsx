/* eslint-disable react/display-name */
import { forwardRef } from "react";
import dayjs from "dayjs";
import cx from "classnames";

import { Avatar } from "common/avatar";
import newsPlaceholderImage from "assets/images/news-placeholder.png";

import { parseCoverImage } from "./helpers";

import "./styles.scss";

export const NewsItem = forwardRef(({ variant, news, onClick }, ref) => {
  const containerClassName = cx("news-item-container", {
    [`news-item-container-${variant}`]: true,
  });

  return (
    <div ref={ref} className={containerClassName} onClick={onClick}>
      <div className="cover-image-container">
        <img src={parseCoverImage(news) || newsPlaceholderImage} alt="" />
      </div>

      <div className="news-data-container">
        <div className="top-container">
          {news.category && <h6>{news.category}</h6>}

          {news.createdAt && (
            <div className="dot-container">
              <div className="dot" />
              <h6 className="grey">
                {dayjs(news.createdAt).format("MMMM DD, YYYY")}
              </h6>
            </div>
          )}

          {news.readTime && (
            <div className="dot-container read-time-text">
              <div className="dot" />
              <h6 className="grey">{news.readTime}</h6>
            </div>
          )}
        </div>

        {variant === "big" && <h2>{news.title}</h2>}
        {variant === "default" && <h3>{news.title}</h3>}
        {variant === "mobile" && <h4>{news.title}</h4>}

        <h5>{news.smallText}</h5>

        <div className="news-author-container">
          <Avatar placeholderIcon="person" />
          <h4>{news.authorName || "Unknown author"}</h4>
        </div>
      </div>
    </div>
  );
});
