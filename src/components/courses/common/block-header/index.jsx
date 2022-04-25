import { ActionButton } from "common/buttons/action-button";

import "./styles.scss";

export const BlockHeader = ({ title, onViewAll }) => {
  return (
    <div className="block-header-container">
      <h3>{title}</h3>

      {onViewAll && (
        <ActionButton
          title="View All"
          onClick={onViewAll}
          variant="transparent"
        />
      )}
    </div>
  );
};
