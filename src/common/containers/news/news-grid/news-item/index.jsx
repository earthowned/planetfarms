/* eslint-disable no-underscore-dangle */
/* eslint-disable react/display-name */
import { forwardRef } from "react";
import cx from "classnames";

import newsPlaceholderImage from "assets/images/news-placeholder.png";
import { NewsAuthorInfo, NewsArticleInfo } from "common/containers/news";

import { parseCoverImage } from "utils/parsers/news";

import "./styles.scss";

export const NewsItem = forwardRef(({ variant, news, onClick }, ref) => {
  const containerClassName = cx("news-item-container", {
    [`news-item-container-${variant}`]: true,
  });

  return (
    <div ref={ref} className={containerClassName} onClick={onClick}>
      <div className="cover-image-container">
        <img alt="" src={parseCoverImage(news) || newsPlaceholderImage} />
      </div>

      <div className="news-data-container">
        <NewsArticleInfo
          category={news?.category}
          createdAt={news?.createdAt}
          readTime={variant !== "mobile" && news?.readTime}
        />

        {variant === "big" && <h2>{news.title}</h2>}
        {variant === "default" && <h3>{news.title}</h3>}
        {variant === "mobile" && <h4>{news.title}</h4>}

        <h5>{news.smallText}</h5>
        {variant !== "mobile" && <NewsAuthorInfo author={news?.user} />}
      </div>
    </div>
  );
});
