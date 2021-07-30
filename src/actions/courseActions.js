import { ADD_COURSE, COURSE } from '../utils/urlConstants'
import { postApi, putApi, deleteApi } from '../utils/apiFunc'
import * as course from '../constants/courseConstants'

export const createResource = ({
  title,
  category,
  description,
  price,
  thumbnail,
  isFree,
  creator,
  history
}) => async (dispatch) => {
  const formData = new FormData()
  formData.append('title', title)
  formData.append('category', category)
  formData.append('description', description)
  formData.append('price', price)
  formData.append('thumbnail', thumbnail)
  formData.append('isFree', isFree)
  formData.append('creator', creator)

  try {
    dispatch({ type: course.COURSE_CREATE_REQUEST })
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    const { data } = await postApi(dispatch, ADD_COURSE, formData, config)
    dispatch({ type: course.COURSE_CREATE_SUCCESS, payload: data })
    const id = data?.data?.id
    history.push(`/admin/course/${id}`)
  } catch (error) {
    const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    dispatch({ type: course.COURSE_CREATE_FAIL, payload: message })
  }
}

export const updateCourse = ({
  courseId,
  title,
  category,
  description,
  price,
  thumbnail,
  isFree,
  refetch,
  setIsEditCourse
}) => async (dispatch) => {
  const formData = new FormData()
  formData.append('title', title)
  formData.append('category', category)
  formData.append('description', description)
  formData.append('price', price)
  formData.append('thumbnail', thumbnail)
  formData.append('isFree', isFree)

  try {
    dispatch({ type: course.COURSE_UPDATE_REQUEST })
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    const { data } = await putApi(
      dispatch,
      COURSE + `/${courseId}`,
      formData,
      config
    )
    dispatch({ type: course.COURSE_UPDATE_SUCCESS, payload: data })
    refetch()
    setIsEditCourse(false)
  } catch (error) {
    const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    dispatch({ type: course.COURSE_UPDATE_FAIL, payload: message })
  }
}

export const deleteCourse = (courseId, history) => async (dispatch) => {
  try {
    dispatch({ type: course.COURSE_DELETE_REQUEST })
    const { data } = await deleteApi(COURSE + `/${courseId}`)
    dispatch({ type: course.COURSE_DELETE_SUCCESS, payload: data })
    history.push('/courses')
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({ type: course.COURSE_DELETE_FAIL, payload: message })
  }
}
