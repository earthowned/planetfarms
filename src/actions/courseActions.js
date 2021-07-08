import { Axios, ADD_COURSE } from '../utils/urlConstants'
import {
  COURSE_CREATE_REQUEST,
  COURSE_CREATE_SUCCESS,
  COURSE_CREATE_FAIL
} from '../constants/courseConstants'

export const createResource =
  ({ title, category, description, price, thumbnail, isFree, history }) =>
    async (dispatch) => {
      const formData = new FormData()
      formData.append('title', title)
      formData.append('category', category)
      formData.append('description', description)
      formData.append('price', price)
      formData.append('thumbnail', thumbnail)
      formData.append('isFree', isFree)

      try {
        dispatch({ type: COURSE_CREATE_REQUEST })
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        const { data } = await Axios.post(ADD_COURSE, formData, config)
        dispatch({ type: COURSE_CREATE_SUCCESS, payload: data })
        const id = data?.data?.id
        history.push(`/admin/course/${id}`)
      } catch (error) {
        const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
        dispatch({ type: COURSE_CREATE_FAIL, payload: message })
      }
    }
