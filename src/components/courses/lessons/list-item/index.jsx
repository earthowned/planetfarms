import { Avatar } from "common/avatar";
import { TabletUp, LaptopUp } from "common/responsive";

import "./styles.scss";

export const LessonListItem = ({ thumbnail, title, subtitle }) => {
  return (
    <div className="lesson-item">
      <LaptopUp>
        <Avatar src={thumbnail} placeholderIcon="graduation-cap" />
      </LaptopUp>

      <LaptopUp>
        <div className="info-block">
          <h3>{title}</h3>
          <h5>{subtitle}</h5>
        </div>
      </LaptopUp>

      <TabletUp>
        <div className="mobile-row-container">
          <Avatar src={thumbnail} placeholderIcon="graduation-cap" />
          <h4>{title}</h4>
        </div>

        <div className="info-block">
          <h5>{subtitle}</h5>
        </div>
      </TabletUp>
    </div>
  );
};
