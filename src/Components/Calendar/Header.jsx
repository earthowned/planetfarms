import React from 'react'

const CalendarHeader = ({value, setValue}) => {
     function currMonthName () {
        return value.format("MMMM");
    }

    function prevMonth () {
        return value.clone().subtract(1, "month");
    }

    function nextMonth () {
        return value.clone().add(1, "month");
    }

    return (
        <div className="header">
            <div className="previous"
                onClick={() => setValue(prevMonth())}
            >{String.fromCharCode(60)}</div>
            <div className="current">
                {currMonthName()}
            </div>
            <div 
                onClick={() => setValue(nextMonth())}
                className="next">{String.fromCharCode(62)}</div>
        </div>
    )
}

export default CalendarHeader
