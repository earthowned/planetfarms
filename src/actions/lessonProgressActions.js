import { LESSON_PROGRESS } from '../utils/urlConstants'
import { postApi } from '../utils/apiFunc'
import * as lessonProgress from '../constants/lessonProgressConstants'

export const createLessonProgress =
  (lessonId, userId, isCompleted, history) => async (dispatch) => {
    const progressData = { lessonId, userId, isCompleted }
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
