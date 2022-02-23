import InputMask from "react-input-mask";

export const DateInput = ({ name, value, onChange }) => {
  const formatCharecters = {
    Y: "[0-9]",
    d: "[0-3]",
    D: "[0-9]",
    m: "[0-1]",
    M: "[1-9]",
  };

  const handleMaskedValueChange = (nextState) => {
    const { value: nextValue, selection } = nextState;

    if (!nextValue) return { value: nextValue, selection };

    const dateParts = nextValue.split("/");
    const dayPart = dateParts[1];
    const monthPart = dateParts[0];

    // Conditional mask for the 2nd digit of day based on the first digit
    if (dayPart.startsWith("3")) formatCharecters.D = "[0-1]";
    // To block 39, 32, etc.
    else if (dayPart.startsWith("0")) formatCharecters.D = "[1-9]";
    // To block 00.
    else formatCharecters.D = "[0-9]"; // To allow 05, 15, 25  etc.

    // Conditional mask for the 2nd digit of month based on the first digit
    if (monthPart.startsWith("1")) formatCharecters.M = "[0-2]";
    // To block 15, 16, etc.
    else formatCharecters.M = "[1-9]"; // To allow 05, 06  etc - but blocking 00.

    return { value: nextValue, selection };
  };

  return (
    <InputMask
      name={name}
      type="text"
      value={value}
      mask="mM/dD/YYYY"
      onChange={onChange}
      alwaysShowMask={false}
      formatChars={formatCharecters}
      beforeMaskedValueChange={handleMaskedValueChange}
    />
  );
};
