import { useCallback } from "react";
import dayjs from "dayjs";

import { Avatar } from "common/avatar";
import { Divider } from "common/divider";
import { StarsRating } from "common/stars-rating";

import "./styles.scss";

const Review = ({ text, stars, author, createdAt, withDivider }) => {
  return (
    <div className="review-container">
      <div className="author-container">
        <Avatar src={author.avatar} placeholderIcon="person" />
        <h4>{author.name}</h4>
      </div>

      <StarsRating rate={stars || 0} />

      <div className="text-container">
        <p className="review-text">{text}</p>
        <p className="date-text">
          {dayjs(createdAt).format("MMM DD, YYYY at HH:MM A")}
        </p>
      </div>

      {withDivider && (
        <Divider
          withLeftGradient
          withRightGradient
          backgroundColor="rgba(238, 239, 239, 0.1)"
        />
      )}
    </div>
  );
};

export const ReviewsList = ({ maxLength, reviews = [], withSeparator }) => {
  if (reviews.length === 0) return null;

  const list = maxLength ? reviews.slice(0, maxLength) : reviews;

  const renderReview = useCallback(
    (item, index) => {
      return (
        <Review
          id={item.id}
          text={item.text}
          stars={item.stars}
          author={item.author}
          createdAt={item.createdAt}
          key={`review-list-item-${index.toString()}`}
          withDivider={withSeparator && index !== reviews.length - 1}
        />
      );
    },
    [reviews, withSeparator]
  );

  return <div className="reviews-list-container">{list.map(renderReview)}</div>;
};
