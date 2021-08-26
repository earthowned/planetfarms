import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { GET_COVERIMG, MATERIAL, LESSON_PROGRESS, GET_COURSE_LESSONS, ADD_LESSON_PROGRESS, GET_COURSE, GET_LESSONS } from '../../../utils/urlConstants'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import useGetLessonData from '../../../utils/useGetLessonData'
import BackButton from '../../../components/backButton/BackButton'
import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import Material from '../../../components/material/Material'
import Button from '../../../components/button/Button'

import './LessonPage.scss'
import { getApi, postApi, putApi } from '../../../utils/apiFunc'
import LessonTest from './LessonTest'
import RichTextView from '../../../components/richTextView/RichTextView'

const LessonPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [isCreator, setIsCreator] = useState(true)
  const [isEnrolled, setIsEnrolled] = useState(false)
  const [progressId, setProgressId] = useState()
  const [isPassed, setIsPassed] = useState(false)
  const [isTest, setIsTest] = useState(false)
  const [materialData, setMaterialData] = useState([])
  const [courseId, setCourseId] = useState('')
  const [path, setPath] = useState('')
  const { id } = useParams()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const userId = userInfo.id
  const [start, setStart] = useState(false)
  const [finish, setFinish] = useState(false)
  const [next, setNext] = useState({})
  const [prev, setPrev] = useState()

  const { isLoading, data, refetch } = useGetLessonData(
    id,
    setMaterialData,
    userId,
    setPath,
    { id }
  )

  // for next and prev button
  const getAllLessons = async () => {
    const { data: { lessons } } = await getApi(dispatch, GET_COURSE_LESSONS + courseId)
    // getting the position of lesson
    const lessonPos = lessons.map(item => item.id).indexOf(data?.data?.id)
    if (lessonPos === 0) setStart(true)
    if (lessonPos === (lessons.length - 1)) setFinish(true)

    // getting the id of the prev and next lesson
    setNext(lessons[lessonPos + 1])
    setPrev(lessons[lessonPos - 1])
  }

  useEffect(() => {
  if (data?.data?.courseId) {
    setCourseId(data?.data?.courseId)
    }
    if (data?.data?.lesson_progresses.length > 0) {
      setProgressId(data?.data?.lesson_progresses[0].id)
    }
    setIsTest(data?.data?.test !== null)
    setIsCreator(data?.data?.course?.creator === userInfo.id)
  }, [data])

  useEffect(() => {
    if (courseId) {
      getAllLessons()
    }
    if (!isCreator) {
      checkEnrolled(data?.data?.courseId)
    }
  }, [courseId, isCreator])

  const checkEnrolled = async (id) => {
    const { data } = await getApi(dispatch, GET_COURSE + '/' + id)
    if (data?.status) {
      if (data?.data?.enrolledUser.length == 0 || !data?.data.enrolledUser[0].enrolls.isEnroll) {
        history.push(`/course/${id}`)
      }
      setIsEnrolled(true)
    }
  }

  const checkPrevLessonCompletion = async () => {
    // checking if the previous lesson is conplete or not
    const { data: { data: lesson } } = await getApi(dispatch, GET_LESSONS + '/' + prev.id)
    if (lesson.lesson_progresses.length === 0 || !lesson.lesson_progresses[0].isCompleted) {
      return history.push(`/course/${data?.data?.courseId}`)
    }
    addLessonProgress()
  }

  useEffect(() => {
    if (!isCreator && isEnrolled) {
      if (start) {
        addLessonProgress()
      } else if (prev) {
        checkPrevLessonCompletion()
      }
    }
  }, [prev, start, isEnrolled, isCreator])

  const addLessonProgress = async () => {
    const startTime = moment().toDate().getTime().toString()
    const { data } = await postApi(dispatch, ADD_LESSON_PROGRESS, { lessonId: id, startTime })
    if (data?.data?.id) {
      setProgressId(data?.data?.id)
    }
  }

  const nextPageHandler = async () => {
    const endTime = moment().toDate().getTime().toString()
    const { data: updateLesson } = await putApi(dispatch, LESSON_PROGRESS + `${progressId}`, { isCompleted: true, endTime })
    if (updateLesson.success) {
      if (finish) return history.push(`/course/${data?.data?.courseId}`)
      const startTime = moment().toDate().getTime().toString()
      const { data: addLesson } = await postApi(dispatch, ADD_LESSON_PROGRESS, { lessonId: next.id, startTime })

      if (addLesson.success) {
        document.location.href = `${next.id}`
      }
    }
  }

  const nextPage = () => {
    if (!isTest || isPassed) {
      nextPageHandler()
    }
  }

  const prevPage = () => {
    document.location.href = `${prev.id}`
  }

  const creatorNextLesson = () => {
    document.location.href = `${next.id}`
  }

  const creatorCompleteLesson = () => {
    history.push(`/admin/course/${courseId}`)
  }
  return (
    <>
      {isLoading ? (
        <span>Loading</span>
      ) : (
        <DashboardLayout title='Course page'>
          <BackButton location={isCreator ? `/admin/course/${courseId}` : `/course/${courseId}`} />
          <RichTextView data={data?.data} />
          <LessonTest setIsPassed={setIsPassed} />
          {materialData.length !== 0 ? (
          <div className='admin-lesson-materials-container'>
            <h1>Materials</h1>
            <div className='material'>
              {materialData.map((mater) => {
                return (
                  <Material key={mater.id} name={mater?.name}>
                    <a
                      href={`${MATERIAL}${mater?.material}`}
                      download={mater.name}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <div>
                        <img src='/img/book-outlined.svg' alt='library icon' />{' '}
                        <span>Add to my library</span>
                      </div>
                      </a>
                       {/* <div>
                          <img
                            src='/img/download-icon.svg'
                            alt='download icon'
                          />{' '}
                          <span>Download</span>
                        </div>
                      </a> */}
                    </Material>
                  )
                })}
              </div>
            </div>
          ) : (
            ''
          )}
          <div className='lesson-btn-container'>
            {!start && <Button
              className='nextBtn'
              name='Prev'
              onClick={prevPage}
                       />}
            {
              finish
                ? <Button
                    className='nextBtn'
                    name='Course Complete'
                    onClick={isCreator ? creatorCompleteLesson : nextPage}
                  />
                : <Button
                    className='nextBtn'
                    name='Next'
                    disabled={
                  (isCreator || data?.data?.test === null) ? false : !isPassed
                }
                    onClick={isCreator ? creatorNextLesson : nextPage}
                  />
           }
          </div>
        </DashboardLayout>
      )}
    </>
  )
}

export default React.memo(LessonPage)
