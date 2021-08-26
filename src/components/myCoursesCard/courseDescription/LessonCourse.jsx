import moment from 'moment'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { postApi } from '../../../utils/apiFunc'
import { ADD_LESSON_PROGRESS } from '../../../utils/urlConstants'
import Button from '../../button/Button'
import LessonCourseSingle, { BluredLessonCard, UnbluredLessonCard } from './LessonCourseSingle'

const LessonCourse = ({
  data,
  setPurchaseModal,
  isEnroll,
  userInfo,
  creator,
  joinCourse,
  enrolls
}) => {
  const lessonLen = data?.data?.lessons.length
  const dispatch = useDispatch()
  const history = useHistory()
  const seeLessonHandler = async (lessonId) => {
    history.push(`/lesson/${lessonId}`)
  }
  return lessonLen < 1 ? 
    <></> :
    <div className='lessons-container'>
      {data?.data?.isFree === false ? (
        <div className='purchase-course-wrapper'>
          <div className='purchase-course'>
            <h4>
              Buy this course for <span>${data?.data?.price}</span>
            </h4>
            <div>
              <Button
                name='Buy Course'
                onClick={() => setPurchaseModal(true)}
              />
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
      <h3>Lessons</h3>
      {
      isEnroll
        ? <>
          <UnbluredLessonCard data={data?.data?.lessons[0]} seeLessonHandler={seeLessonHandler} />
          {data?.data?.lessons
            .slice(1)
            .map((data) => (
              <React.Fragment key={data.id}>
                <LessonCourseSingle
                  data={data}
                  userInfo={userInfo}
                  creator={creator}
                  isEnroll={isEnroll}
                  joinCourse={joinCourse}
                  enrolls={enrolls}
                  seeLessonHandler={seeLessonHandler}
                />
              </React.Fragment>
            ))}
          </>
        : data?.data?.lessons
          .map((data) => (
            <React.Fragment key={data.id}>
              <BluredLessonCard data={data} />
            </React.Fragment>
          ))
        }
    </div>
}
export default LessonCourse
