import React, { useState, useEffect } from 'react'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout'
import './calendar.css'
import { useSelector, useDispatch } from 'react-redux'
import { listCalendarEvents } from '../../actions/calendarActions'
import CalendarBlock from '../../Components/Calendar/CalendarBlock'

const Calendar = () => {
  const data = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listCalendarEvents())
  }, [dispatch])

  return (
    <DashboardLayout>
      <CalendarBlock />
    </DashboardLayout>
  )
}

export default Calendar
