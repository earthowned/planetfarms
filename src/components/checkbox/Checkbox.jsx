import React, { useEffect, useState } from "react";
import "./Checkbox.scss";
import { ErrorMessage } from "@hookform/error-message";
import { ReactComponent as Tick } from "../../assets/images/tick.svg";

// TODO: Remove after common/checkbox will be implemented in all files;

// eslint-disable-next-line react/display-name
const Checkbox = React.forwardRef(
  ({ label, name, value, errors, onChange }, ref) => {
    const [checked, setChecked] = useState(false);

    function changeCheckbox() {
      setChecked(!checked);
    }

    useEffect(() => {
      if (onChange) {
        onChange(checked);
      }
    }, [checked]);

    return (
      <div className="checkboxAndError">
        <div className="terms">
          <div
            className={checked ? "outer-box active" : "outer-box"}
            onClick={() => changeCheckbox()}
          >
            <input
              type="checkbox"
              style={{ display: "none" }}
              value={value}
              name={name}
              ref={ref}
              checked={checked}
              onChange={(e) => {
                setChecked(e.target.checked);
              }}
            />
            {checked && <Tick alt="checkbox-for-terms" />}
          </div>
          <p>{label}</p>
        </div>
        {errors?.[`${name}`] && (
          <p className="error-message">
            <ErrorMessage
              errors={errors}
              name={name}
              render={({ message }) => <span>{message}</span>}
            />
          </p>
        )}
      </div>
    );
  }
);

export default Checkbox;
