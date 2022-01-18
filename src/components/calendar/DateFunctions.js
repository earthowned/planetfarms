export function currMonthName(value) {
  return value.format("MMMM");
}

export function currYearName(value) {
  return value.format("YYYY");
}

export function prevMonth(value) {
  return value.clone().subtract(1, "month");
}

export function nextMonth(value) {
  return value.clone().add(1, "month");
}
