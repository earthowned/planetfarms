import React, { useState } from 'react'
import { useHistory } from 'react-router'
import Button from '../../button/Button'
import './CourseDescription.scss'
import MoreCourse from './MoreCourse'
import useSizeFinder from '../../../utils/sizeFinder'
import { GET_THUMBNAIL, GET_COVERIMG } from '../../../utils/urlConstants'

const CourseDescription = ({
  setFeedbackModal,
  unpaid,
  setPurchaseModal,
  data,
  isLoading
}) => {
  return (
    <>
      <div className='course-page-container border-1px-onyx'>
        <CourseDetail
          setFeedbackModal={setFeedbackModal}
          unpaid={unpaid}
          setPurchaseModal={setPurchaseModal}
          data={data}
          isLoading={isLoading}
        />
        <LessonCourse data={data} setPurchaseModal={setPurchaseModal} />
      </div>
      <MoreCourse />
    </>
  )
}

export default CourseDescription

const ProgressBar = ({ data, isLoading }) => {
  isLoading && console.log('Loading....')
  const courseData = data?.data
  const lessonData = courseData?.lessons

  const lessonLength = 5
  const lessonIndicator = lessonLength * (115 / lessonLength)
  const accurateIndicator = lessonIndicator === 115 ? 92 : lessonIndicator
  const windowWidth = useSizeFinder()
  return (
    <div className='lesson-bar'>
      {windowWidth > 600 ? (
        <div
          style={{ width: `${accurateIndicator}%` }}
          className='lesson-progress-indicator'
        />
      ) : (
        <div
          style={{ height: `${accurateIndicator}%` }}
          className='lesson-progress-indicator'
        />
      )}
      {lessonData &&
        lessonData?.map((item, index) => {
          return (
            <div className='lesson-progress-content' key={index}>
              <div
                className={
                  courseData.isFree === false
                    ? 'circle-wrapper-active'
                    : 'circle-wrapper'
                }
              >
                {courseData.isFree === false && <div className='circle' />}
              </div>
              <h4
                className={
                  courseData.isFree === false
                    ? 'lesson-progress-heading-active'
                    : 'lesson-progress-heading'
                }
              >
                {item.title}
              </h4>
            </div>
          )
        })}
    </div>
  )
}

const CourseDetail = ({
  setFeedbackModal,
  unpaid,
  setPurchaseModal,
  data,
  isLoading
}) => {
  return (
    <div className='description-course-page'>
      <img
        className='bg-image'
        src={`${GET_THUMBNAIL}${data?.data?.thumbnail}`}
        alt=''
      />
      <div className='course-details-wrapper'>
        <div className='course-description'>
          <div className='course-description-header'>
            <h1 className='course-title'>{data?.data?.title}</h1>
            {data?.data?.isFree === false ? (
              <div className='dropdown-course-container'>
                <Button
                  name='Buy Course'
                  clickHandler={() => setPurchaseModal(true)}
                />
              </div>
            ) : (
              <DropDownCourse setFeedbackModal={setFeedbackModal} />
            )}
          </div>
          <p className='course-desc'>{data?.description}</p>
          {/* lesson progress bar */}
          <ProgressBar data={data} isLoading={isLoading} />
        </div>
      </div>
    </div>
  )
}

const DropDownCourse = ({ setFeedbackModal }) => {
  const [courseDropDown, setCourseDropDown] = useState(false)

  function submitFeedback () {
    setFeedbackModal(true)
    setCourseDropDown(false)
  }

  return (
    <div className='dropdown-course-container'>
      <div
        className='dropdown-course-header'
        onClick={() => setCourseDropDown(!courseDropDown)}
      >
        <h4>You are subscriber</h4>
        <img src='/img/down-arrow.svg' alt='dropdown icon' />
      </div>
      {courseDropDown && (
        <div className='dropdown-course-items'>
          <ul>
            <li>Ask a question</li>
            <li onClick={submitFeedback}>Feedback</li>
            <li>Leave Course</li>
          </ul>
        </div>
      )}
    </div>
  )
}

const LessonCourse = ({ data, setPurchaseModal }) => {
  return (
    <div className='lessons-container'>
      {data?.data?.isFree === false && (
        <div className='purchase-course-wrapper'>
          <div className='purchase-course'>
            <h4>
              Buy this course for <span>$59.99</span>
            </h4>
            <div>
              <Button
                name='Buy Course'
                onClick={() => setPurchaseModal(true)}
              />
            </div>
          </div>
        </div>
      )}
      <h3>Lessons</h3>
      {data?.data?.lessons.map((data, index) => {
        return <LessonCourseSingle data={data} key={index} />
      })}
    </div>
  )
}

const LessonCourseSingle = ({ data }) => {
  console.log(data)
  const history = useHistory()
  return (
    <div className='lesson-card-wrapper'>
      <div className='lock-lesson'>
        <img src='/img/lesson-lock.svg' alt='lock icon' />
        <h4>Finish Lesson</h4>
      </div>
      <div className={data.finish ? 'lesson-card lock-active' : 'lesson-card'}>
        <div className='lessonCoverImg'>
          <img
            className='lesson-card-img'
            src={`${GET_COVERIMG}${data.coverImg}`}
            alt='background image'
          />
        </div>
        <div className='lesson-card-content'>
          <h3>{data.title}</h3>
          {/* TODO:Need to add lesson description */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed totam
            non dolorem nam ex ipsam?
          </p>
          <button onClick={() => history.push(`/mycoursepage/${data.id}`)}>
            See Lesson
          </button>
        </div>
      </div>
    </div>
  )
}
