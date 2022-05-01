import { Avatar } from "common/avatar";
import { StarsRating } from "common/stars-rating";
import { TabletUp, LaptopUp } from "common/responsive";

import "./styles.scss";

export const CourseMainInfo = ({ avatar, title, price, members, rating }) => {
  const coursePrice = price
    ? `$${parseFloat(parseFloat(price) / 100).toFixed(2)}`
    : "$00.00";

  const courseMembers = `${members || 0} people tried`;

  return (
    <div className="course-main-info-container">
      <Avatar src={avatar} placeholderIcon="graduation-cap" />

      <div className="info-column-container">
        <LaptopUp>
          <h2>{title}</h2>
        </LaptopUp>

        <TabletUp>
          <h4>{title}</h4>
        </TabletUp>

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
