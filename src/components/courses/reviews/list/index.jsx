import { useMemo } from "react";
import dayjs from "dayjs";

import { Avatar } from "common/avatar";
import { StarsRating } from "common/stars-rating";

import "./styles.scss";

const Review = ({ text, stars, author, createdAt }) => {
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
    </div>
  );
};

export const ReviewsList = ({ maxLength, reviews = [] }) => {
  if (reviews.length === 0) return null;

  const list = maxLength ? reviews.slice(0, maxLength) : reviews;

  const renderReview = (item, index) => {
    return (
      <Review
        id={item.id}
        text={item.text}
        stars={item.stars}
        author={item.author}
        createdAt={item.createdAt}
        key={`review-list-item-${index.toString()}`}
      />
    );
  };

  return <div className="reviews-list-container">{list.map(renderReview)}</div>;
};
