import React, { useState, useEffect } from 'react'
import { useHistory, useParams} from 'react-router-dom'
import { MATERIAL, LESSON_PROGRESS, GET_COURSE_LESSONS, ADD_LESSON_PROGRESS, GET_COURSE } from '../../../utils/urlConstants'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import useGetLessonData from '../../../utils/useGetLessonData'
import LessonDetail from './LessonDetail'
import BackButton from '../../../components/backButton/BackButton'
import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import Material from '../../../components/material/Material'
import Button from '../../../components/button/Button'

import './LessonPage.scss'
import { configFunc, getApi, postApi, putApi } from '../../../utils/apiFunc'
import useGetFetchData from '../../../utils/useGetFetchData'
import axios from 'axios'


const LessonPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [isCreator, setIsCreator] = useState()
  const [progressId, setProgressId] = useState();
  const [isPassed, setIsPassed] = useState(false)
  const [isTest, setIsTest] = useState(false)
  const [materialData, setMaterialData] = useState([])
  const [courseId, setCourseId] = useState('')
  const [path, setPath] = useState('')
  const { id } = useParams()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const userId = userInfo.id
  const [start, setStart] = useState(false);
  const [finish, setFinish] = useState(false);
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();

  const { isLoading, data, refetch } = useGetLessonData(
    id,
    setMaterialData,
    userId,
    setPath,
    { id },
  )

  // for next and prev button
  const getAllLessons = async () => {
    const {data:{lessons}} = await getApi(dispatch, GET_COURSE_LESSONS + data?.data?.courseId)
    getCourse(data?.data?.courseId)
    // getting the position of lesson
    const lessonPos = lessons.map(item => item.id).indexOf(data?.data?.id);
    if(lessonPos === 0) setStart(true)
    if(lessonPos === (lessons.length - 1)) setFinish(true)

    // getting the id of the prev and next lesson
    setNext(lessons[lessonPos + 1])
    setPrev(lessons[lessonPos - 1])
  }

  useEffect(() => {
    if (data?.data?.courseId) {
      setCourseId(data?.data?.courseId)
    }
    if(data?.data?.lesson_progresses.length > 0) {
      setProgressId(data?.data?.lesson_progresses[0].id)
    }
    setIsTest(data?.data?.test !== null)
  }, [data, dispatch])

  useEffect(() => {
    getAllLessons()
  }, [courseId, dispatch, courseId])

  // checking creator
  useEffect(() => {
    if(data?.data?.course.creator) {
      setIsCreator(data?.data?.course.creator  === userInfo.id)
    }
  }, [data, dispatch, courseId])

  // checking the enrollment
  // useEffect(() => {
  //   getCourses()
  // }, [])
  const getCourse = async (id) => {
    const {data} = getApi(dispatch, GET_COURSE + '/' + id)    
    if(data?.data?.enrolledUser.length == 0 || !data?.data.enrolledUser[0].enrolls.isEnroll) {
      history.push(`/course/${id}`)
    }
  }

  const nextPageHandler = () => {
    const endTime = moment().toDate().getTime().toString()
    putApi(dispatch, LESSON_PROGRESS + `${progressId}`, {isCompleted: true, endTime})
    const startTime = moment().toDate().getTime().toString()
    postApi(dispatch, ADD_LESSON_PROGRESS, {lessonId: next.id, startTime})
    document.location.href = `${next.id}`
  }

  const nextPage = () => {
    if(!isTest) {
      nextPageHandler()
    }

    if(isTest && isPassed) {
      nextPageHandler()
    }
  }

  const prevPage = () => {
    document.location.href = `${prev.id}`
  }

  const creatorNextLesson = () => {
    document.location.href = `${next.id}`
  }

  const creatorPrevLesson = () => {
    document.location.href = `${prev.id}`
  }
  return (
    <>
      {isLoading ? (
        <span>Loading</span>
      ) : (
        <DashboardLayout title='Course page' >
          <BackButton location={`/course/${courseId}`} />
          <LessonDetail data={data?.data} id={id} setIsPassed={setIsPassed} />
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
                          <img
                            src='/img/download-icon.svg'
                            alt='download icon'
                          />{' '}
                          <span>Download</span>
                        </div>
                      </a>

                      <div>
                        <img src='/img/book-outlined.svg' alt='library icon' />{' '}
                        <span>Add to my library</span>
                      </div>
                    </Material>
                  )
                })}
              </div>
            </div>
          ) : (
            ''
          )}
          <div className="btn-container" style={{width: '40%'}}>
            <Button
            className='nextBtn'
            name="Prev"
            disabled={start && true}
            onClick={isCreator ? creatorPrevLesson : prevPage}
            />
          <Button
            className='nextBtn'
            name='Next'
            disabled={
              finish ? true : (isCreator || data?.data?.test === null ? false : !isPassed) 
            }
            onClick={isCreator ? creatorNextLesson : nextPage}
          />
          </div>
        </DashboardLayout>
      )}
    </>
  )
}

export default React.memo(LessonPage)
