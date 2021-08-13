import { LESSON_PROGRESS } from '../utils/urlConstants'
import { postApi, putApi } from '../utils/apiFunc'
import * as lessonProgress from '../constants/lessonProgressConstants'

export const createLessonProgress =
  ({ lessonId, userId, isCompleted, startTime, endTime, history, refetch }) =>
    async (dispatch) => {
      const progressData = { lessonId, userId, isCompleted, startTime, endTime }
      try {
        dispatch({ type: lessonProgress.LESSON_PROGRESS_CREATE_REQUEST })
        const { data } = await postApi(
          dispatch,
          LESSON_PROGRESS + '/add',
          progressData
        )
        dispatch({
          type: lessonProgress.LESSON_PROGRESS_CREATE_SUCCESS,
          payload: data
        })
        history.push(`/lesson/${lessonId}`)
        refetch()
      } catch (error) {
        dispatch({
          type: lessonProgress.LESSON_PROGRESS_CREATE_FAIL,
          payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
      }
    }

export const updateLessonProgress =
  ({ lessonId, progressId, isCompleted, startTime, endTime, history }) =>
    async (dispatch) => {
      const progressData = { lessonId, isCompleted, startTime, endTime }
      try {
        dispatch({ type: lessonProgress.LESSON_PROGRESS_UPDATE_REQUEST })
        const { data } = await putApi(
          dispatch,
          LESSON_PROGRESS + `/${progressId}`,
          progressData
        )
        dispatch({
          type: lessonProgress.LESSON_PROGRESS_UPDATE_SUCCESS,
          payload: data
        })
        history.push(`/lesson/${lessonId}`)
      } catch (error) {
        dispatch({
          type: lessonProgress.LESSON_PROGRESS_UPDATE_FAIL,
          payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
      }
    }
