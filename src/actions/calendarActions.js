import { getApi, postApi } from '../utils/apiFunc'
import {
  CALENDAR_EVENT_LIST_REQUEST,
  CALENDAR_EVENT_LIST_SUCCESS,
  CALENDAR_EVENT_LIST_FAIL,
  CALENDAR_EVENT_CREATE_REQUEST,
  CALENDAR_EVENT_CREATE_SUCCESS,
  CALENDAR_EVENT_CREATE_FAIL
} from '../constants/calendarConstants'

export const listCalendarEvents = (sort = '', pageNumber = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: CALENDAR_EVENT_LIST_REQUEST })
    const { data } = await getApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/calendar`)
    console.log('calendar', data)
    dispatch({
      type: CALENDAR_EVENT_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: CALENDAR_EVENT_LIST_FAIL,
      payload:
                error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message
    })
  }
}

export const createCalendarEvent = (newCalendarEvent) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CALENDAR_EVENT_CREATE_REQUEST
    })
    const { data } = await postApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/calendar/add`, newCalendarEvent)
    dispatch({
      type: CALENDAR_EVENT_CREATE_SUCCESS,
      payload: data
    })
  } catch (error) {
    const message =
           error.response && error.response.data.message
             ? error.response.data.message
             : error.message
    dispatch({
      type: CALENDAR_EVENT_CREATE_FAIL,
      payload: message
    })
  }
}
