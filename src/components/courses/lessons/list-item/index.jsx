import { Avatar } from "common/avatar";
import { ModalOptionsButton } from "common/buttons/modal-options-button";
import { TabletUp, LaptopUp } from "common/responsive";

import { MoreOption } from "constants/enums";
import { createMoreOption } from "utils/createMoreOption";

import "./styles.scss";

const moreOptions = [
  createMoreOption(MoreOption.Edit),
  createMoreOption(MoreOption.Delete),
];

export const LessonListItem = ({
  thumbnail,
  title,
  subtitle,
  isMyCourse = true,
}) => {
  const handleOptionSelect = (option) => {};

  return (
    <div className="lesson-item">
      <LaptopUp>
        <Avatar src={thumbnail} placeholderIcon="graduation-cap" />
      </LaptopUp>

      <LaptopUp>
        <div className="info-block">
          <div className="title-container">
            <h3>{title}</h3>
            {isMyCourse && (
              <ModalOptionsButton
                icon="more"
                options={moreOptions}
                variant="transparent-white"
                onOptionSelect={handleOptionSelect}
              />
            )}
          </div>

          <h5>{subtitle}</h5>
        </div>
      </LaptopUp>

      <TabletUp>
        <div className="mobile-row-container">
          <Avatar src={thumbnail} placeholderIcon="graduation-cap" />

          <div className="title-container">
            <h4>{title}</h4>
            {isMyCourse && (
              <ModalOptionsButton
                icon="more"
                options={moreOptions}
                variant="transparent-white"
                onOptionSelect={handleOptionSelect}
              />
            )}
          </div>
        </div>

        <div className="info-block">
          <h5>{subtitle}</h5>
        </div>
      </TabletUp>
    </div>
  );
};
