import React, {useState} from 'react'
import { useLocation, useHistory } from 'react-router';
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout';

import "./calendar-screen.css";
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
    return (
        <DashboardLayout title="Calendar">
            <div className="calendar-top-header">
                <ul>
                    {
                    nav.map(item => <NavItem item={item} />)
                    }
                </ul>
            </div>
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

export default CalendarScreen
