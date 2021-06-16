function isSelected (day, value) {
  return value.isSame(day, 'day')
}

function beforeMonth (day, value) {
  return value.isAfter(day, 'month')
}

function afterMonth (day, value) {
  return value.isBefore(day, 'month')
}

function isToday (day) {
  return day.isSame(new Date(), 'day')
}

export default function dayStyles (day, value) {
  return (beforeMonth(day, value) && 'before') ||
    (afterMonth(day, value) && 'after') ||
    (isSelected(day, value) && 'selected') ||
    (isToday(day) && 'today') || ''
}
