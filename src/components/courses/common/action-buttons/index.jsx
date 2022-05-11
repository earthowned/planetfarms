import { useHistory } from "react-router-dom";

import { ActionButton } from "common/buttons/action-button";

import "./styles.scss";

export const ActionButtonsContainer = ({ submitProps }) => {
  const history = useHistory();

  return (
    <div className="course-action-buttons-container">
      <ActionButton
        type="button"
        title="Cancel"
        variant="secondary"
        onClick={() => history.goBack()}
      />

      <ActionButton type="submit" variant="primary" {...submitProps} />
    </div>
  );
};
