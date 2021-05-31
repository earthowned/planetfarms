import moment from 'moment';
import React, {useState, useEffect} from 'react'

import buildCalendar from "./build";

import './calendar.css';
import CalendarHeader from './Header';
import dayStyles from './styles';

const Calendar = () => {
    const [calendar, setCalendar] = useState([])
    const [value, setValue] = useState(moment());
    
    useEffect(() => {
        setCalendar(buildCalendar(value))
    }, [value])

    return (
        <div className="calendar">
            <CalendarHeader value={value} setValue={setValue} />
            <div className="body">
                <div className="day-names">
                    {
                        ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map(d => <div className="week">{d}</div>)
                    }
                </div>
                {
            calendar.map(week => <div>
                {
                    week.map(day => <div className="day" onClick={() => setValue(day)}>
                        <div className={dayStyles(day, value)}>
                            {day.format("D").toString()}
                        </div>
                    </div>)
                }
                </div>)
            }
            </div>
            <div className="calendar-footer">
                <button className="calendar-btn">View Calendar</button>
            </div>
        </div>
    )
}

export default Calendar
