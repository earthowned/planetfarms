import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import { GET_COVERIMG } from '../../../utils/urlConstants'
import LessonActions from './LessonActions'

const LessonBlock = ({ data, courseId, refetch }) => {
  const lessonData = data?.data?.lessons
  const history = useHistory()
  return (
    <div className='admin-course-page-container'>
      <div className='admin-lesson-lists-container'>
        {lessonData ? (
          <>
            <h3 className='lessonHead'>Lessons</h3>
            {lessonData
              .map((lesson) => {
                return (
                  <React.Fragment key={lesson.id}>
                    <div className='admin-lesson'>
                      <div className='lessonBlock'>
                        {lesson.coverImg ? (
                          <div className='coverImg coverImg__img'>
                            <img
                              src={`${GET_COVERIMG}${lesson.coverImg}`}
                              className='lesson image'
                              alt='lesson_card'
                            />
                          </div>
                        ) : (
                          <div className='coverImg coverImg__text'>
                            <div>
                              <p>{lesson.title}</p>
                            </div>
                          </div>
                        )}
                        <div className='lessonInfo'>
                          <h3 className='lessonTitle'>{lesson.title}</h3>
                          {lesson?.lessonDesc && (
                            <p className='lessonDescText'>
                              {lesson?.lessonDesc}
                            </p>
                          )}
                          <Link to={`/lesson/${lesson.id}`}>
                            <button className='text-btn'>See lesson</button>
                          </Link>
                        </div>
                      </div>
                      <LessonActions id={lesson.id} courseId={courseId} refetch={refetch} />
                    </div>
                  </React.Fragment>
                )
              })}
          </>
        ) : (
          ''
        )}
        <div
          className='add-lesson-btn secondary-btn' onClick={() => history.push({
            pathname: '/admin/lesson/add',
            state: {
              courseId
            }
          })}
        >
          <img src='/img/plus.svg' alt='lesson add' />
          <span>Add new lesson for users</span>
        </div>
      </div>
    </div>
  )
}

export default LessonBlock
