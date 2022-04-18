import { useField } from "formik";

import "./styles.scss";

export const Switch = ({
  leftLabel,
  rightLabel,
  onChangeValue,
  value = false,
  name = "switch",
  disabled = false,
}) => {
  const handleClick = () => {
    if (!disabled && onChangeValue) {
      const currentValue = !!value;
      onChangeValue(!currentValue);
    }
  };

  return (
    <div className="switch-container">
      {leftLabel && <h4>{leftLabel}</h4>}

      <input
        id={name}
        name={name}
        type="checkbox"
        checked={!!value}
        disabled={disabled}
        defaultChecked={!!value}
        className="switch-input"
      />

      <div className="switch-checkbox-container" onClick={handleClick}>
        <div className="switch" />
      </div>

      {rightLabel && <h4>{rightLabel}</h4>}
    </div>
  );
};

export const SwitchField = ({
  name,
  disabled,
  leftLabel,
  rightLabel,
  labelPosition,
}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <Switch
      value={field.value}
      error={meta?.error}
      disabled={disabled}
      leftLabel={leftLabel}
      rightLabel={rightLabel}
      labelPosition={labelPosition}
      onChangeValue={helpers.setValue}
    />
  );
};
