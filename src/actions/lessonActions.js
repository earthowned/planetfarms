import { Axios, ADD_LESSONS, GET_LESSONS } from '../utils/urlConstants'
import { postApi } from '../utils/apiFunc'
import { addText } from '../screens/courseManager/addLesson/addText'
import { addVideo } from '../screens/courseManager/addLesson/addVideo'
import { addImage } from '../screens/courseManager/addLesson/addImage'
import { addMaterial } from '../screens/courseManager/addLesson/addMaterial'

import {
  LESSON_CREATE_REQUEST,
  LESSON_CREATE_SUCCESS,
  LESSON_CREATE_FAIL,
  LESSON_UPDATE_REQUEST,
  LESSON_UPDATE_SUCCESS,
  LESSON_UPDATE_FAIL,
  LESSON_DELETE_REQUEST,
  LESSON_DELETE_SUCCESS,
  LESSON_DELETE_FAIL
} from '../constants/lessonConstants'
import axios from 'axios'

export const createLesson =
  ({
    courseId,
    title,
    lessonDesc,
    order,
    coverImg,
    lessonData,
    material,
    history
  }) =>
    async (dispatch) => {
      const lessonFormData = new FormData()
      lessonFormData.append('courseId', courseId)
      lessonFormData.append('title', title)
      lessonFormData.append('lessonDesc', lessonDesc)
      lessonFormData.append('coverImg', coverImg)
      lessonFormData.append('order', order)
      try {
        dispatch({ type: LESSON_CREATE_REQUEST })
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }

        const richText = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/richtexts`)
        const richtextId = richText?.data?.richtext?.id

        if (richtextId) {
          lessonFormData.append('richtextId', richtextId)
          console.log(richtextId)
          const { data } = await postApi(
            dispatch,
            ADD_LESSONS,
            lessonFormData,
            config
          )
          console.log(lessonFormData)
          dispatch({ type: LESSON_CREATE_SUCCESS, payload: data })
          const lessonId = data?.data?.id

          for (let i = 0; i < lessonData.length; i++) {
            if (lessonData[i]?.videoLink || lessonData[i]?.videoResource) {
              await addVideo({ data: lessonData[i], richtextId, dispatch })
            }
            if (lessonData[i]?.lessonImg) {
              await addImage({ data: lessonData[i], richtextId, dispatch })
            }
            if (lessonData[i]?.textHeading || lessonData[i]?.textDescription) {
              await addText({ data: lessonData[i], richtextId, dispatch })
            }
          }

          for (let i = 0; i < material.length; i++) {
            if (material[i].mData) {
              await addMaterial({ material: material[i], lessonId, dispatch })
            }
          }
          history.push(`/lesson/${lessonId}`)
        }
      } catch (error) {
        dispatch({
          type: LESSON_CREATE_FAIL,
          payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
      }
    }

export const updateLesson =
  (title, coverImg, lessonId, lessonDesc, history, lessonData = [], material = [], richtextId) =>
    async (dispatch) => {
      const updateLessonFormData = new FormData()
      updateLessonFormData.append('title', title)
      updateLessonFormData.append('coverImg', coverImg)
      updateLessonFormData.append('lessonDesc', lessonDesc)

      try {
        dispatch({ type: LESSON_UPDATE_REQUEST })
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }

        const { data } = await Axios.put(
          GET_LESSONS + '/' + lessonId,
          updateLessonFormData,
          config
        )
        dispatch({ type: LESSON_UPDATE_SUCCESS, payload: data })

        for (let i = 0; i < lessonData.length; i++) {
          if (lessonData[i]?.videoLink || lessonData[i]?.videoResource) {
            await addVideo({ data: lessonData[i], richtextId, dispatch })
          }
          if (lessonData[i]?.lessonImg) {
            await addImage({ data: lessonData[i], richtextId, dispatch })
          }
          if (lessonData[i]?.textHeading || lessonData[i]?.textDescription) {
            await addText({ data: lessonData[i], richtextId, dispatch })
          }
        }

        for (let i = 0; i < material.length; i++) {
          if (material[i].mData) {
            await addMaterial({ material: material[i], lessonId, dispatch })
          }
        }
        history.push(`/lesson/${lessonId}`)
      } catch (error) {
        dispatch({
          type: LESSON_UPDATE_FAIL,
          payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
      }
    }

export const deleteLesson = (id, refetch) => async (dispatch) => {
  try {
    dispatch({ type: LESSON_DELETE_REQUEST })
    const { data } = await Axios.delete(GET_LESSONS + `/${id}`)
    dispatch({ type: LESSON_DELETE_SUCCESS, payload: data })
    refetch()
  } catch (error) {
    dispatch({
      type: LESSON_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
