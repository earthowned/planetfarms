import React from 'react'
import { useHistory, Link } from 'react-router-dom'

import { GET_COVERIMG } from '../../../utils/urlConstants'
import LessonActions from './LessonActions'

const LessonBlock = ({ data, courseId }) => {
  const history = useHistory()
  const lessonData = data?.data?.lessons

  return (
    <div className='admin-course-page-container'>
      <div className='admin-lesson-lists-container'>
        {lessonData ? (
          <>
            <h3>Lessons</h3>
            {lessonData.map((lesson) => {
              return (
                <React.Fragment key={lesson.id}>
                  <div className='admin-lesson'>
                    <div>
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
                        <h4 className='lessonTitle'>{lesson.title}</h4>
                        {/* TODO:need to add new lesson desc col in db and update   */}
                        <p>
                          lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Delectus, odio! Architecto, aspernatur
                          similique. Expedita, ullam error reiciendis eos
                          dolorum id?
                        </p>
                        <Link to={`/lesson/${lesson.id}`}>
                          <button className='text-btn'>See lesson</button>
                        </Link>
                      </div>
                    </div>
                    <LessonActions id={lesson.id} />
                  </div>
                </React.Fragment>
              )
            })}
          </>
        ) : (
          ''
        )}
        <Link to={`/admin/add-lesson/${courseId}`}>
          <div className='add-lesson-btn secondary-btn'>
            <img src='/img/plus.svg' alt='lesson add' />
            <span>Add new lesson for users</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default LessonBlock
