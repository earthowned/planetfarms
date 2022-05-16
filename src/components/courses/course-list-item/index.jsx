/* eslint-disable react/display-name */
import { forwardRef } from "react";

import { Avatar } from "common/avatar";
import { StarsRating } from "common/stars-rating";

import { CourseListType } from "constants/enums";

import "./styles.scss";

export const CoursesListItem = forwardRef(
  (
    {
      title,
      price,
      avatar,
      rating,
      onClick,
      variant,
      members,
      progress,
      description,
      //   category,
    },
    ref
  ) => {
    const priceComponent = () => {
      if (variant !== CourseListType.All) return null;
      const coursePrice = price ? parseFloat(price).toFixed(2) : "0.00";
      return <h4 className="price">{`$${coursePrice}`}</h4>;
    };

    const progressComponent = () => {
      if (variant !== CourseListType.Paid) return null;
      const courseProgress = progress ? `${progress}%` : "0%";
      return <h4 className="price">{courseProgress}</h4>;
    };

    const membersComponent = () => {
      if (variant !== CourseListType.My) return null;
      const courseMembers = members ? `${members} students` : "0 students";
      return <h4 className="members">{courseMembers}</h4>;
    };

    return (
      <div ref={ref} className="courses-list-item-container" onClick={onClick}>
        <Avatar src={avatar} placeholderIcon="graduation-cap" />

        <div className="content-container">
          <div className="top-container">
            <p className="course-title-text">{title}</p>
            <StarsRating rate={rating} />
          </div>

          <div className="bottom-container">
            {priceComponent()}
            {progressComponent()}
            {membersComponent()}
            <h5 className="course-list-description">{description}</h5>
          </div>
        </div>
      </div>
    );
  }
);
