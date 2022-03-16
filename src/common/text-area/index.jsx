import TextareaAutosize from "react-textarea-autosize";

import "./styles.scss";

export const TextArea = ({
  name,
  maxLength,
  value = "",
  placeholder,
  onChangeValue,
  minHeight = "72px",
}) => {
  return (
    <div className="text-area-container" style={{ minHeight }}>
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
