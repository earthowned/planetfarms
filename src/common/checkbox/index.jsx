import React from "react";
import cx from "classnames";

import { Icon } from "common/icon";

import "./styles.scss";

export const Checkbox = ({ value = false, onChange, title, error }) => {
  return (
    <div className="pf-checkbox" onClick={() => onChange(!value)}>
      <input type="checkbox" checked={value} />

      <div className={cx("checkbox", { "checkbox-error": !!error })}>
        <Icon icon="checkmark" />
      </div>

      {title && <p className="checkbox-title">Checkbox title</p>}
    </div>
  );
};
