import "./styles.scss";

const LabelPosition = {
  Left: "left",
  Right: "right",
};

export const Switch = ({
  label,
  onChangeValue,
  value = false,
  name = "switch",
  disabled = false,
  labelPosition = LabelPosition.Left,
}) => {
  const handleClick = () => {
    if (!disabled && onChangeValue) {
      onChangeValue(!value);
    }
  };

  return (
    <div className="switch-container">
      {label && labelPosition === LabelPosition.Left && <h4>{label}</h4>}

      <input
        id={name}
        name={name}
        type="checkbox"
        checked={value}
        disabled={disabled}
        className="switch-input"
      />

      <div className="switch-checkbox-container" onClick={handleClick}>
        <div className="switch" />
      </div>

      {label && labelPosition === LabelPosition.Right && <h4>{label}</h4>}
    </div>
  );
};
