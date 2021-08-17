import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { MATERIAL, GET_COURSE } from '../../../utils/urlConstants'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'

import lessonProgressFnc from './lessonProgressFnc'
import {
  updateLessonProgress,
  createLessonProgress
} from '../../../actions/lessonProgressActions'
import useGetLessonData from '../../../utils/useGetLessonData'
import useGetFetchData from '../../../utils/useGetFetchData'
import LessonDetail from './LessonDetail'
import BackButton from '../../../components/backButton/BackButton'
import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import Material from '../../../components/material/Material'
import Button from '../../../components/button/Button'

import './LessonPage.scss'

const LessonPage = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [isCreator, setIsCreator] = useState()
  const [isCompleted, setIsCompleted] = useState(false)
  const [isPassed, setIsPassed] = useState(false)
  const [isTest, setIsTest] = useState(false)
  const [materialData, setMaterialData] = useState([])
  const [cData, setCData] = useState([])
  const [cDataForCreator, setCDataForCreator] = useState('')
  const [courseId, setCourseId] = useState('')
  const [path, setPath] = useState('')
  const { id } = useParams()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const userId = userInfo.id
  const [progressData, setProgress] = useState()

  const { isLoading, data, refetch } = useGetLessonData(
    id,
    setMaterialData,
    userId,
    setPath,
    { id },
    setProgress
  )

  useEffect(() => {
    if (data?.data?.courseId !== undefined) {
      setCourseId(data?.data?.courseId)
    }
    setIsCompleted(
      (progressData !== undefined && progressData[0]?.isCompleted) || false
    )
    setIsTest(data?.data?.test !== null)
  }, [data])

  const { data: courseData } = useGetFetchData(
    'fetchedSingleDataWTHOrder',
    GET_COURSE + '/' + courseId,
    { courseId }
  )
  const isEnroll = courseData?.data?.enrolls?.filter(
    (enroll) => enroll?.userId === userId
  )

  useEffect(() => {
    setCDataForCreator(courseData?.data?.creator)
  }, [courseData])

  useEffect(() => {
    if (
      courseData?.data?.creator !== undefined &&
      courseData?.data?.creator !== userId
    ) {
      if (isEnroll !== undefined && !isEnroll[0]?.isEnroll) {
        return history.push(`/course/${courseId}`)
      } else {
        if (data?.data?.order !== 1) {
          if (
            progressData !== undefined &&
            progressData[0]?.startTime !== null
          ) {
            return history.push(`/course/${courseId}`)
          }
        }
      }
    }
    setIsCreator(courseData?.data?.creator === userId && true)
    const order = data?.data?.order + 1
    setCData(
      courseData?.data?.lessons?.filter((lesson) => lesson.order === order)
    )
  }, [courseData])

  const time = moment().toDate().getTime().toString()
  useEffect(async () => {
    if (
      courseData?.data?.creator !== undefined &&
      courseData?.data?.creator !== userId
    ) {
      if (progressData !== undefined && progressData?.length === 0) {
        await lessonProgressFnc({
          dispatch,
          action: createLessonProgress,
          lessonId: id,
          userId,
          isCompleted: false,
          startTime: time,
          refetch
        })
      }
    }
  }, [courseData, progressData])
  const nextPageWithOutTest = () => {
    const progressId = progressData !== undefined && progressData[0]?.id
    lessonProgressFnc({
      dispatch,
      action: updateLessonProgress,
      lessonId: id,
      userId,
      isCompleted: true,
      endTime: time,
      progressId,
      nextId:
        courseData?.data?.lessons?.length === data?.data?.order
          ? `/course/${courseId}`
          : `/lesson/${cData[0]?.id}`,
      history,
      refetch
    })
  }
  const lastLesson = courseData?.data?.lessons?.length === data?.data?.order
  const nextPage = () => {
    const passedAndProgress = () => {
      if (
        progressData !== undefined &&
        progressData[0]?.isCompleted === false
      ) {
        nextPageWithOutTest()
      }
      history.push(
        lastLesson ? `/course/${courseId}` : `/lesson/${cData[0]?.id}`
      )
    }

    if (progressData !== undefined && progressData[0]?.isCompleted === false) {
      if (isPassed && isCompleted) {
        passedAndProgress()
      }
      nextPageWithOutTest()
    } else {
      passedAndProgress()
    }
  }
  const creatorNextLesson = () => {
    history.push(
      lastLesson ? `/admin/course/${courseId}` : `/lesson/${cData[0].id}`
    )
  }
  
  return (
    <>
      {isLoading ? (
        <span>Loading</span>
      ) : (
        <DashboardLayout title='Course page'>
          <BackButton location={path} />
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
          <Button
            className='nextBtn'
            name='Next'
            disabled={
              isCreator || data?.data?.test === null ? false : !isPassed
            }
            onClick={isCreator ? creatorNextLesson : nextPage}
          />
        </DashboardLayout>
      )}
    </>
  )
}

export default React.memo(LessonPage)
