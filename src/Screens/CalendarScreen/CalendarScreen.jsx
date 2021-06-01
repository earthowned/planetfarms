import moment from 'moment';
import React, {useState} from 'react'
import { useLocation, useHistory } from 'react-router';
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout';
import {prevMonth, currMonthName, currYearName, nextMonth} from '../../Components/Calendar/dateFunctions';

import "./calendar-screen.css";
import Button from '../../Components/Button/Button';
const nav = [
    {
        name: "My events",
        slug: "/calendar/my-events"
    },
    {
        name: "Enterprises events",
        slug: "/calendar/enterprise-events"
    },
    {
        name: "Groups events",
        slug: "/calendar/groups-events"
    },
    
]
const CalendarScreen = () => {
    const [value, setValue] = useState(moment())
    return (
        <DashboardLayout title="Calendar">
            <CalendarHeader value={value} />
        </DashboardLayout>
    )
}

const NavItem = ({item}) => {
    const {pathname} = useLocation()
    const history = useHistory()
    const [active, setActive] = useState(pathname === item.slug);
    return (
        <li 
        className={active ? "calendar-nav-item active" : "calendar-nav-item"} 
        key={item.name}
        onClick={() => history.push(item.slug)}
        >{item.name}</li>
    )
}

const CalendarHeader = ({value}) => {
    return (
        <>
        <div className="calendar-top-header">
                <ul>
                    {
                    nav.map(item => <NavItem item={item} />)
                    }
                </ul>
            </div>
            <div className="calendar-second-header">
                <div className="main-calendar-header">
                    <div className="row-1">
                        <h3>{currMonthName(value)} {currYearName(value)}</h3>
                        <div className="date-indicator">
                            <span>{String.fromCharCode(60)}</span><span>{String.fromCharCode(62)}</span>
                        </div>
                        <button className="secondary-btn main-cal-btn">Today</button>
                    </div>
                    <div className="row-2">
                        <Button name="Add new event" clickHandler={() => console.log('hello event')} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CalendarScreen
