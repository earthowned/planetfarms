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

function buildDates(calendar, startDay) {
  calendar.push(
    Array(7)
      .fill(0)
      .map(() => startDay.add(1, "day").clone())
  );
}

export function buildCalendar(value) {
  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").endOf("week");
  const calendar = [];
  while (startDay.isBefore(endDay, "day")) {
    buildDates(calendar, startDay);
  }
  if (calendar.length === 5) {
    buildDates(calendar, startDay);
  }
  return calendar;
}

function isSelected(day, value) {
  return value.isSame(day, "day");
}

function beforeMonth(day, value) {
  return value.isAfter(day, "month");
}

function afterMonth(day, value) {
  return value.isBefore(day, "month");
}

function isToday(day) {
  return day.isSame(new Date(), "day");
}

export function dayStyles(day, value) {
  return (
    (beforeMonth(day, value) && "before") ||
    (afterMonth(day, value) && "after") ||
    (isSelected(day, value) && "selected") ||
    (isToday(day) && "today") ||
    ""
  );
}
