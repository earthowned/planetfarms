function isSelected(day, value) {
        return value.isSame(day, "day")
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

export default function dayStyles(day, value) {
        if(beforeMonth(day, value)) return "before";
        if(afterMonth(day, value)) return "before";
        if(isSelected(day, value)) return "selected";
        if(isToday(day)) return "today";
        return ""
    }