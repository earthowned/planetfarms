import axios from 'axios'
import {
  CALENDER_EVENT_LIST_REQUEST,
  CALENDER_EVENT_LIST_SUCCESS,
  CALENDER_EVENT_LIST_FAIL,
  CALENDER_EVENT_CREATE_REQUEST,
  CALENDER_EVENT_CREATE_SUCCESS,
  CALENDER_EVENT_CREATE_FAIL
} from '../constants/CalenderConstants'

export const listCalenderEvents = (sort = '', pageNumber = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: CALENDER_EVENT_LIST_REQUEST })
    const { data } = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/api/calender`
    )
    console.log('calender', data)
    dispatch({
      type: CALENDER_EVENT_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: CALENDER_EVENT_LIST_FAIL,
      payload:
                error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message
    })
  }
}

export const createCalenderEvent = (newCalenderEvent) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CALENDER_EVENT_CREATE_REQUEST
    })
    const { data } = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/calender/add`, newCalenderEvent)
    dispatch({
      type: CALENDER_EVENT_CREATE_SUCCESS,
      payload: data
    })
  } catch (error) {
    const message =
           error.response && error.response.data.message
             ? error.response.data.message
             : error.message
    dispatch({
      type: CALENDER_EVENT_CREATE_FAIL,
      payload: message
    })
  }
}
