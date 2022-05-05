import InputMask from "react-input-mask";
import CurrencyInput from "react-currency-input-field";

import { DateInput } from "../date-input";

export const InputComponent = ({
  type,
  onBlur,
  onFocus,
  onChange,
  ...props
}) => {
  if (type === "date") {
    return <DateInput {...props} />;
  }

  if (type === "tel") {
    return (
      <InputMask
        type={type}
        alwaysShowMask={false}
        mask="+1 (999) 999-99-99"
        onChange={(event) => onChange(event.target.value)}
        {...props}
      />
    );
  }

  if (type === "email-code") {
    return (
      <InputMask
        type="text"
        mask="999999"
        alwaysShowMask={false}
        onChange={(event) => onChange(event.target.value)}
        {...props}
      />
    );
  }

  if (type === "currency") {
    return (
      <CurrencyInput
        prefix="$"
        maxLength={4}
        onValueChange={(value) => onChange(value)}
        {...props}
      />
    );
  }

  return (
    <input
      type={type}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={(event) => onChange(event.target.value)}
      {...props}
    />
  );
};
