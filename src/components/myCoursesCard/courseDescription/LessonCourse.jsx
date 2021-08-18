import React, { useState } from 'react'
import { GET_COVERIMG } from '../../../utils/urlConstants'
import Button from '../../button/Button'
import LessonCourseSingle, { UnbluredLessonCard } from './LessonCourseSingle'

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

  return (
    <div className='lessons-container'>
      {data?.data?.isFree === false && lessonLen >= 1 ? (
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
        <UnbluredLessonCard data={data?.data?.lessons[0]} />
        {data?.data?.lessons
        .sort((a, b) => (a.order > b.order ? 1 : -1))
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
                />
          </React.Fragment>
        ))}
        </>
      : data?.data?.lessons
        .sort((a, b) => (a.order > b.order ? 1 : -1))
        .map((data) => (
          <React.Fragment key={data.id}>
           <LessonCourseSingle
                  data={data}
                  userInfo={userInfo}
                  creator={creator}
                  isEnroll={isEnroll}
                  joinCourse={joinCourse}
                  enrolls={enrolls}
                />
          </React.Fragment>
        ))
        }
    </div>
  )
}
export default LessonCourse
