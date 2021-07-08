import {
  MATERIAL_CREATE_REQUEST,
  MATERIAL_CREATE_SUCCESS,
  MATERIAL_CREATE_FAIL,
  MATERIAL_CREATE_RESET
} from '../constants/materialConstants'

export const materialCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case MATERIAL_CREATE_REQUEST:
      return { loading: true }
    case MATERIAL_CREATE_SUCCESS:
      return { loading: false, success: true, data: action.payload }
    case MATERIAL_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case MATERIAL_CREATE_RESET:
      return {}
    default:
      return state
  }
}
