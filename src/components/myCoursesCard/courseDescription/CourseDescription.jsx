import React, { useState } from 'react'
import { useHistory } from 'react-router'
import Button from '../../Button/Button'
import './course-description.css'
import MoreCourse from './MoreCourse'
import useSizeFinder from '../../../utils/SizeFinder'

const CourseDescription = ({ setFeedbackModal, unpaid, setPurchaseModal }) => {
  return (
    <>
      <div className='course-page-container border-1px-onyx'>
        <CourseDetail setFeedbackModal={setFeedbackModal} unpaid={unpaid} setPurchaseModal={setPurchaseModal} />
        <LessonCourse unpaid={unpaid} setPurchaseModal={setPurchaseModal} />
      </div>
      <MoreCourse />
    </>
  )
}

export default CourseDescription

const lessons = [
  {
    name: 'Lesson 1',
    unlock: true
  },
  {
    name: 'Lesson 2',
    unlock: false
  },
  {
    name: 'Lesson 3',
    unlock: false
  },
  {
    name: 'Lesson 4',
    unlock: false
  },
  {
    name: 'Lesson 5',
    unlock: false
  }
]

const ProgressBar = () => {
  const lessonLength = lessons.filter(item => item.unlock === true).length
  const lessonIndicator = lessonLength * (115 / lessons.length)
  const accurateIndicator = lessonIndicator === 115 ? 92 : lessonIndicator
  const windowWidth = useSizeFinder()
  return (
    <div className='lesson-bar'>
      {windowWidth > 600
        ? <div style={{ width: `${accurateIndicator}%` }} className='lesson-progress-indicator' />
        : <div style={{ height: `${accurateIndicator}%` }} className='lesson-progress-indicator' />}
      {
        lessons && lessons.map(item => {
          return (
            <div className='lesson-progress-content' key={item}>
              <div className={item.unlock ? 'circle-wrapper-active' : 'circle-wrapper'}>
                {item.unlock && <div className='circle' />}
              </div>
              <h4 className={item.unlock ? 'lesson-progress-heading-active' : 'lesson-progress-heading'}>{item.name}</h4>
            </div>
          )
        })
      }
    </div>
  )
}

const CourseDetail = ({ setFeedbackModal, unpaid, setPurchaseModal }) => {

  return (
    <div className='description-course-page'>
      <div className='bg-image' />
      <div className='course-details-wrapper'>
        <div className='course-description'>
          <div className="course-description-header">
            <h1 className='course-title'>Jimmy Beam personal course</h1>
            {unpaid ? <div className='dropdown-course-container'><Button name="Buy Course" clickHandler={() => setPurchaseModal(true)} /></div> : <DropDownCourse setFeedbackModal={setFeedbackModal} />}
          </div>
          <p className='course-desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla.
          </p>
          {/* lesson progress bar */}
          <ProgressBar />
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
      <div className='dropdown-course-header' onClick={() => setCourseDropDown(!courseDropDown)}>
        <h4>You are subscriber</h4>
        <img src='/img/down-arrow.svg' alt='dropdown icon' />
      </div>
      {courseDropDown && <div className='dropdown-course-items'>
        <ul>
          <li>Ask a question</li>
          <li onClick={submitFeedback}>Feedback</li>
          <li>Leave Course</li>
        </ul>
      </div>}
    </div>
  )
}

const lessonData = [
  {
    _id: 1,
    name: '01. Introducing',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
    lesson: 'See lesson',
    bgImage: '/img/lesson-card.svg'
  },

  {
    _id: 2,
    name: '02.How to make new clients ?',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
    lesson: 'See lesson',
    bgImage: '/img/lesson-card1.svg',
    className1: 'unlock-lesson-container',
    className2: 'unlock-lesson-wrapper',
    className3: 'unlock',
    finish: 'Finish Lesson'
  },
  {
    _id: 3,
    name: '03. How to deals with new clients ?',
    description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
    lesson: 'See lesson',
    bgImage: '/img/lesson-card2.svg',
    className1: 'unlock-lesson-container',
    className2: 'unlock-lesson-wrapper',
    className3: 'unlock',
    finish: 'Finish Lesson'
  }
]

const LessonCourse = ({unpaid, setPurchaseModal}) => {
  return (
    <div className='lessons-container'>
      {unpaid && <div className="purchase-course-wrapper">
          <div className="purchase-course">
            <h4>Buy this course for <span>$59.99</span></h4>
            <div><Button name="Buy Course" clickHandler={() => setPurchaseModal(true)}/></div>
          </div>
        </div>}
      <h3>Lessons</h3>
      {
        lessonData.map(data => {
          return (<LessonCourseSingle data={data} />)
        })
      }
    </div>
  )
}

const LessonCourseSingle = ({ data }) => {
  const history = useHistory()
  return (
    <div className='lesson-card-wrapper'>
      {data.finish && <div className='lock-lesson'>
        <img src='/img/lesson-lock.svg' alt="lock icon"/>
        <h4>{data.finish}</h4>
      </div>}
      <div className={data.finish ? 'lesson-card lock-active' : 'lesson-card'}>
        <img className='lesson-card-img' src={data.bgImage} alt="background image" />
        <div className='lesson-card-content'>
          <h3>{data.name}</h3>
          <p>{data.description}</p>
          <button onClick={() => history.push('/mycoursepage/lesson-1')}>{data.lesson}</button>
        </div>
      </div>
    </div>
  )
}
