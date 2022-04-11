import { Icon } from "common/icon";

import "./styles.scss";

export const BackButton = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className="pf-back-button">
      <Icon icon="chevron-left" />
      Back
    </button>
  );
};
