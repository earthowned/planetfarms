import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { MATERIAL, GET_COURSE } from '../../../utils/urlConstants'
import { useSelector, useDispatch } from 'react-redux'

import { createLessonProgress } from '../../../actions/lessonProgressActions'
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
  const [isCreator, setIsCreator] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [isPassed, setIsPassed] = useState(false)
  const [materialData, setMaterialData] = useState([])
  const [cData, setCData] = useState([])
  const [courseId, setCourseId] = useState('')
  const [path, setPath] = useState('')
  const { id } = useParams()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const userId = userInfo.id

  const { isLoading, data } = useGetLessonData(
    id,
    setMaterialData,
    userId,
    setPath,
    { id }
  )
  useEffect(() => {
    if (data?.data?.courseId !== undefined) {
      setCourseId(data?.data?.courseId)
    }
    setIsCompleted(data?.data?.lesson_progresses[0]?.isCompleted || false)
  }, [data])

  const { data: courseData } = useGetFetchData(
    'fetchedSingleDataWTHOrder',
    GET_COURSE + '/' + courseId,
    { courseId }
  )

  useEffect(() => {
    setIsCreator(courseData?.data?.creator === userId)
    const order = data?.data?.order + 1
    setCData(
      courseData?.data?.lessons?.filter((lesson) => lesson.order === order)
    )
  }, [courseData])

  const nextPage = () => {
    const passedButNoProgress = () => {
      dispatch(createLessonProgress(cData[0]?.id, userId, true, history))
    }
    const passedAndProgress = () => {
      history.push(`/lesson/${cData[0]?.id}`)
    }
    isPassed && isCompleted ? passedAndProgress() : passedButNoProgress()
  }
  console.log(isCompleted)
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
          {courseData?.data?.lessons?.length === data?.data?.order ? (
            ''
          ) : isPassed || isCompleted ? (
            <Button className='nextBtn' name='Next' onClick={nextPage} />
          ) : (
            ''
          )}
        </DashboardLayout>
      )}
    </>
  )
}

export default React.memo(LessonPage)
