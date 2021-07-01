import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_BASE_URL + '/api/'

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
export const ADD_VIDEOS = 'videos/add'

// lesson photos
export const ADD_LESSON_PHOTO = 'lessonPhotos/add'

// get files
export const GET_THUMBNAIL = BASE_URL + '../thumbnail/'
