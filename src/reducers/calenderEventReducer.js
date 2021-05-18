import {
  CALENDER_EVENT_LIST_REQUEST,
  CALENDER_EVENT_LIST_SUCCESS,
  CALENDER_EVENT_LIST_FAIL,
  CALENDER_EVENT_CREATE_REQUEST,
  CALENDER_EVENT_CREATE_SUCCESS,
  CALENDER_EVENT_CREATE_FAIL
} from '../constants/CalenderConstants'

export const eventList = (state = { events: [] }, action) => {
  switch (action.type) {
    case CALENDER_EVENT_LIST_REQUEST:
      return { loading: true, groups: [] }
    case CALENDER_EVENT_CREATE_SUCCESS:
      return {
        loading: false,
        events: action.payload.events,
        pages: action.payload.pages,
        page: action.payload.page
      }
  }
}
