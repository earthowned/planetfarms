import {
  CALENDAR_EVENT_LIST_REQUEST,
  CALENDAR_EVENT_LIST_SUCCESS,
  CALENDAR_EVENT_LIST_FAIL,
  CALENDAR_EVENT_CREATE_REQUEST,
  CALENDAR_EVENT_CREATE_SUCCESS,
  CALENDAR_EVENT_CREATE_FAIL
} from '../constants/calendarConstants'

export const eventListReducer = (state = { events: [] }, action) => {
  switch (action.type) {
    case CALENDAR_EVENT_LIST_REQUEST:
      return { loading: true, groups: [] }
    case CALENDAR_EVENT_LIST_SUCCESS:
      return {
        loading: false,
        events: action.payload.events,
        pages: action.payload.pages,
        page: action.payload.page
      }
    case CALENDAR_EVENT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const eventCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CALENDAR_EVENT_CREATE_REQUEST:
      return { loading: true }
    case CALENDAR_EVENT_CREATE_SUCCESS:
      return { loading: false, success: true, group: action.payload }
    case CALENDAR_EVENT_CREATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
