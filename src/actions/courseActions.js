import { Axios, ADD_COURSE } from '../utils/urlConstants'
import { postCourseAPI } from '../utils/apiFunc'
import {
  COURSE_CREATE_REQUEST,
  COURSE_CREATE_SUCCESS,
  COURSE_CREATE_FAIL
} from '../constants/courseConstants'

export const createResource =
  ({
    title,
    category,
    description,
    price,
    thumbnail,
    isFree,
    creator,
    history
  }) =>
    async (dispatch) => {
      const formData = new FormData()
      formData.append('title', title)
      formData.append('category', category)
      formData.append('description', description)
      formData.append('price', price)
      formData.append('thumbnail', thumbnail)
      formData.append('isFree', isFree)
      formData.append('creator', creator)

      try {
        dispatch({ type: COURSE_CREATE_REQUEST })
        const headerContentType = 'multipart/form-data'
        const { data } = await postCourseAPI(
          ADD_COURSE,
          formData,
          headerContentType
        )
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
