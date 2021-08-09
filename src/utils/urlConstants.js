import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_BASE_URL + '/api/'
const CDN_URL = process.env.REACT_APP_CDN_BASE_URL

export const Axios = axios.create({
  baseURL: BASE_URL
})

// categories
export const CATEGORY = BASE_URL + 'categories'

// library
export const GET_LIBRARY = BASE_URL + 'resources'

// course
export const GET_COURSE = BASE_URL + 'courses'
export const ADD_COURSE = BASE_URL + 'courses/add'
export const COURSE = BASE_URL + 'courses'
export const ADD_COURSE_VIEW = BASE_URL + 'course-views/add'

// lesson
export const GET_LESSONS = BASE_URL + 'lessons'
export const LESSONS = 'lessons'
export const ADD_LESSONS = BASE_URL + 'lessons/add'
export const GET_COURSE_LESSONS = BASE_URL + 'lessons/course/'

// videos
export const GET_VIDEOS = BASE_URL + 'videos'
export const ADD_VIDEOS = BASE_URL + 'videos/add'

// lesson photos
export const GET_LESSON_PHOTO = BASE_URL + 'photos'
export const ADD_LESSON_PHOTO = BASE_URL + 'photos/add'

// lesson Text
export const GET_LESSON_TEXT = BASE_URL + 'texts'
export const ADD_LESSON_TEXT = BASE_URL + 'texts/add'

// lesson progress
export const LESSON_PROGRESS = BASE_URL + 'lesson-progress/'
export const ADD_LESSON_PROGRESS = BASE_URL + 'lesson-progress/add'

// lesson material
export const GET_MATERIAL = BASE_URL + 'materials'
export const ADD_MATERIAL = BASE_URL + 'materials/add'

// enroll
export const GET_ENROLL = BASE_URL + 'enrolls'
export const ADD_ENROLL = BASE_URL + 'enrolls/add'

// get files
export const GET_THUMBNAIL = CDN_URL + '/thumbnail/'
export const GET_COVERIMG = CDN_URL + '/coverImg/'
export const GET_VIDEO = CDN_URL + '/videoResource/'
export const VIDEO_COVER = CDN_URL + '/videoCover/'
export const LESSON_IMG = CDN_URL + '/img/'
export const MATERIAL = CDN_URL + '/material/'

// members
export const GET_MEMBERS = BASE_URL + 'communities-users/community/'
export const ATTACHMENT = CDN_URL + '/attachments/'
