export function checkArrayForFilledValue(arr) {
  let empty = 0;
  arr.forEach((el) => {
    if (el.type === "subjective") {
      if (!el.question) empty++;
    }

    if (el.type === "mcq") {
      console.log(el.type);
      if (!el.question || !el.answer || el.options.includes("")) empty++;
    }
  });
  console.log(empty);
  if (empty === 0) {
    return true;
  }
  return false;
}
