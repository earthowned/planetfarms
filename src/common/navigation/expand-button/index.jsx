import React from "react";
import cx from "classnames";

import { Icon } from "common/icon";

import "./styles.scss";

export const ExpandButton = ({ isExpanded, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={cx("expand-button", { "expand-button-expanded": isExpanded })}
  >
    <Icon icon="chevrons-right" />
  </button>
);
