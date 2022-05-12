import { Icon } from "common/icon";
import { Avatar } from "common/avatar";
import { HorizontalProgressBar } from "common/progress-bar";

import "./styles.scss";

export const LessonHeader = ({ title, thumbnail, progress }) => {
  return (
    <div className="lesson-header-container">
      <Avatar src={thumbnail} placeholderIcon="graduation-cap" />

      <div className="right-block">
        <div className="title-container">
          <h2>{title}</h2>
          {progress && progress >= 80 ? <Icon icon="checkmark-round" /> : null}
        </div>

        <HorizontalProgressBar progress={progress} />
      </div>
    </div>
  );
};
