import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_BASE_URL + '/api/'
const CDN_URL = process.env.REACT_APP_CDN_BASE_URL

export const Axios = axios.create({
  baseURL: BASE_URL
})

// categories
export const CATEGORY = 'categories'

// course
export const GET_COURSE = 'courses'
export const ADD_COURSE = 'courses/add'

// lesson
export const GET_LESSONS = 'lessons'
export const ADD_LESSONS = 'lessons/add'

// videos
export const GET_VIDEOS = 'videos'
export const ADD_VIDEOS = 'videos/add'

// lesson photos
export const GET_LESSON_PHOTO = 'lesson-photos'
export const ADD_LESSON_PHOTO = 'lesson-photos/add'

// lesson Text
export const GET_LESSON_TEXT = 'lesson-text'
export const ADD_LESSON_TEXT = 'lesson-text/add'

// lesson material
export const GET_MATERIAL = 'materials'
export const ADD_MATERIAL = 'materials/add'

// enroll
export const GET_ENROLL = 'enrolls'
export const ADD_ENROLL = 'enrolls/add'

// get files
export const GET_THUMBNAIL = CDN_URL + '/thumbnail/'
export const GET_COVERIMG = CDN_URL + '/coverImg/'
export const GET_VIDEO = CDN_URL + '/videoResource/'
export const VIDEO_COVER = CDN_URL + '/videoCover/'
export const LESSON_IMG = CDN_URL + '/lessonImg/'
export const MATERIAL = CDN_URL + '/material/'
