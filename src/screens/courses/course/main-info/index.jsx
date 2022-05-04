import { Avatar } from "common/avatar";
import { StarsRating } from "common/stars-rating";
import { TabletUp, LaptopUp } from "common/responsive";
import { ModalOptionsButton } from "common/buttons/modal-options-button";

import { MoreOption } from "constants/enums";
import { createMoreOption } from "utils/createMoreOption";

import "./styles.scss";

const moreOptions = [
  createMoreOption(MoreOption.Review),
  createMoreOption(MoreOption.Archive),
];

export const CourseMainInfo = ({
  title,
  price,
  avatar,
  rating,
  isPaid,
  members,
  onAddReview,
  onAddToArchive,
}) => {
  const coursePrice = price
    ? `$${parseFloat(parseFloat(price) / 100).toFixed(2)}`
    : "$00.00";

  const courseMembers = `${members.length || 0} people tried`;

  const handleMoreOptionClick = (option) => {
    if (option === MoreOption.Review && onAddReview) onAddReview();
    if (option === MoreOption.Archive && onAddToArchive) onAddToArchive();
  };

  return (
    <div className="course-main-info-container">
      <Avatar src={avatar} placeholderIcon="graduation-cap" />

      <div className="info-column-container">
        <div className="title-container">
          <LaptopUp>
            <h2>{title}</h2>
          </LaptopUp>

          <TabletUp>
            <h4>{title}</h4>
          </TabletUp>

          {isPaid && (
            <ModalOptionsButton
              icon="more"
              options={moreOptions}
              variant="transparent-white"
              onOptionSelect={handleMoreOptionClick}
            />
          )}
        </div>

        <LaptopUp>
          <h3>{coursePrice}</h3>
        </LaptopUp>

        <TabletUp>
          <h4>{coursePrice}</h4>
        </TabletUp>

        <div className="bottom-container">
          <LaptopUp>
            <h5>{courseMembers}</h5>
          </LaptopUp>

          <TabletUp>
            <h6>{courseMembers}</h6>
          </TabletUp>

          <StarsRating rate={rating || 0} />
        </div>
      </div>
    </div>
  );
};
