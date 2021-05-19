import {
  CALENDER_EVENT_LIST_REQUEST,
  CALENDER_EVENT_LIST_SUCCESS,
  CALENDER_EVENT_LIST_FAIL,
  CALENDER_EVENT_CREATE_REQUEST,
  CALENDER_EVENT_CREATE_SUCCESS,
  CALENDER_EVENT_CREATE_FAIL
} from '../constants/CalenderConstants'

export const eventListReducer = (state = { events: [] }, action) => {
  switch (action.type) {
    case CALENDER_EVENT_LIST_REQUEST:
      return { loading: true, groups: [] }
    case CALENDER_EVENT_LIST_SUCCESS:
      return {
        loading: false,
        events: action.payload.events,
        pages: action.payload.pages,
        page: action.payload.page
      }
    case CALENDER_EVENT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const eventCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CALENDER_EVENT_CREATE_REQUEST:
      return { loading: true }
    case CALENDER_EVENT_CREATE_SUCCESS:
      return { loading: false, success: true, group: action.payload }
    case CALENDER_EVENT_CREATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
