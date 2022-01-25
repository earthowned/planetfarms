import React from "react";
import cx from "classnames";
import { useField } from "formik";

import { Icon } from "common/icon";

import "./styles.scss";

export const Checkbox = ({ value = false, onChange, title, error }) => {
  return (
    <div className="pf-checkbox" onClick={onChange}>
      <input type="checkbox" checked={value} onChange={onChange} />

      <div className={cx("checkbox", { "checkbox-error": !!error })}>
        <Icon icon="checkmark" />
      </div>

      {title && <p className="checkbox-title">{title}</p>}
    </div>
  );
};

export const CheckboxField = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <Checkbox
      value={field.value}
      error={meta?.error}
      onChange={() => helpers.setValue(!field.value)}
      {...props}
    />
  );
};
