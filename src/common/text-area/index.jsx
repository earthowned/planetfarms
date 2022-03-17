import { useMemo } from "react";
import cx from "classnames";
import { useField } from "formik";
import TextareaAutosize from "react-textarea-autosize";

import "./styles.scss";

export const TextArea = ({
  name,
  error,
  maxLength,
  value = "",
  placeholder,
  onChangeValue,
  minHeight = "72px",
}) => {
  const className = useMemo(
    () =>
      cx("text-area-container", {
        "text-area-container-error": error,
      }),
    [error]
  );

  return (
    <div className={className} style={{ minHeight }}>
      <TextareaAutosize
        name={name}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={(e) => onChangeValue(e.target.value)}
      />

      {maxLength && (
        <div className="characters-count-container">
          <h6>{`${value.length}/${maxLength}`}</h6>
        </div>
      )}
    </div>
  );
};

export const TextAreaField = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <TextArea
      name={name}
      error={meta?.error}
      value={field.value}
      onChangeValue={(value) => helpers.setValue(value)}
      {...props}
    />
  );
};
