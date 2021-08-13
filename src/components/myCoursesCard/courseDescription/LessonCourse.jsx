import React, { useState, useEffect } from 'react'
import Button from '../../button/Button'
import LessonCourseSingle from './LessonCourseSingle'

const LessonCourse = ({
  data,
  setPurchaseModal,
  isEnroll,
  userInfo,
  creator,
  joinCourse,
  enrolls,
  refetch
}) => {
  const lessonLen = data?.data?.lessons.length
  const [clickLessonId, setClickLessonId] = useState('')
  const [progressData, setProgressData] = useState([])
  useEffect(() => {
    setProgressData(
      data?.data?.lessons
        ?.filter((lesson) => lesson.id === clickLessonId)
        .map((progress) => progress.lesson_progresses)
    )
  }, [clickLessonId])

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
      {data?.data?.lessons
        .sort((a, b) => (a.order > b.order ? 1 : -1))
        .map((data) => (
          <React.Fragment key={data.id}>
            {isEnroll === false ? (
              <div className='purchase-course-wrapper enroll-course' />
            ) : (
              ''
            )}
            <LessonCourseSingle
              data={data}
              userInfo={userInfo}
              creator={creator}
              isEnroll={isEnroll}
              joinCourse={joinCourse}
              enrolls={enrolls}
              clickLessonId={clickLessonId}
              setClickLessonId={setClickLessonId}
              progressData={progressData}
              refetch={refetch}
            />
          </React.Fragment>
        ))}
    </div>
  )
}
export default LessonCourse
