import { Avatar } from "common/avatar";

import { StarsRating } from "common/stars-rating";

import "./styles.scss";

export const CourseItemType = {
  My: "My",
  All: "All",
  Paid: "Paid",
};

export const CoursesListItem = ({
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
}) => {
  const priceComponent = () => {
    if (variant !== CourseItemType.All) return null;
    const coursePrice = price ? Number(price) / 100 : "0.00";
    return <h4 className="price">{`$${coursePrice}`}</h4>;
  };

  const progressComponent = () => {
    if (variant !== CourseItemType.Paid) return null;
    const courseProgress = progress ? `${progress}%` : "0%";
    return <h4 className="price">{courseProgress}</h4>;
  };

  const membersComponent = () => {
    if (variant !== CourseItemType.My) return null;
    const courseMembers = members ? `${members} students` : "0 students";
    return <h4 className="members">{courseMembers}</h4>;
  };

  return (
    <div className="courses-list-item-container" onClick={onClick}>
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
};
