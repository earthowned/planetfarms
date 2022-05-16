import { LaptopUp, TabletUp } from "common/responsive";
import { ActionButton } from "common/buttons/action-button";

import "./styles.scss";

const ProgressContainer = ({ progress, onViewResults }) => (
  <div className="right-container">
    <TabletUp>
      <h3>{`${progress}%`}</h3>
    </TabletUp>

    <LaptopUp>
      <h1>{`${progress}%`}</h1>
    </LaptopUp>

    <ActionButton
      variant="transparent"
      onClick={onViewResults}
      title="View All Results"
    />
  </div>
);

export const UserTestListItem = ({
  title,
  onStart,
  progress,
  onViewResults,
}) => {
  return (
    <div className="test-list-item-container">
      <div className="left-container">
        <LaptopUp>
          <h3>{title}</h3>
        </LaptopUp>

        <TabletUp>
          <h4>{title}</h4>
        </TabletUp>

        <h5>
          Make a lesson test where you can use new information that you know
        </h5>

        <TabletUp>
          <ProgressContainer
            progress={progress}
            onViewResults={onViewResults}
          />
        </TabletUp>

        <ActionButton
          onClick={onStart}
          title={progress === 0 ? "Start" : "Retake"}
          variant={progress === 0 ? "primary" : "secondary"}
        />
      </div>

      <LaptopUp>
        {progress > 0 && (
          <ProgressContainer
            progress={progress}
            onViewResults={onViewResults}
          />
        )}
      </LaptopUp>
    </div>
  );
};
