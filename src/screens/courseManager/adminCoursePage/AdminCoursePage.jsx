import React from 'react'
import BackButton from '../../../components/backButton/BackButton'
import Filter from '../../../components/filter/Filter'
import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import { useHistory } from 'react-router-dom'
import './AdminCoursePage.scss'

const AdminCoursePage = () => {
  return (
    <DashboardLayout title='Course page'>
      <BackButton location='/admin/courses' />
      <CourseDescription />
      <LessonBlock />
      <div className='study-course-wrapper'>
        <h3>Also study this course</h3>
        <p>You dont have any users on you course yet.
          Share your course in your groups to find new users!
        </p>
        <button className='secondary-btn'>Share my course</button>
      </div>
    </DashboardLayout>
  )
}

const CourseDescription = () => {
  return (
    <div className='admin-course-page-container'>
      <div className='admin-course-img-wrapper'>
        <img src='/img/course-banner.png' alt='course wrapper' />
      </div>
      <div className='admin-course-details-wrapper'>
        <div className='admin-course-details'>
          <div className='admin-course-details--header'>
            <h1>Business course 2020</h1>
            <div className='admin-filter-container'>
              <Filter name='Course settings' />
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
        </div>
        <div className='admin-lesson-progress-container'>
          <div>
            <div className='admin-lesson-indicator'><div className='inner-circle' /></div>
            <span>Lesson 1</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const LessonBlock = () => {
  const history = useHistory()
  return (
    <div className='admin-course-page-container'>
      <div className='admin-lesson-lists-container'>
        <h3>Lessons</h3>
        <div className='admin-lesson'>
          <div>
            <img src='/img/lesson-card2.svg' className='lesson image' />
            <div>
              <h4>01.Introducing</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
              <button className='text-btn'>See lesson</button>
            </div>
          </div>
          <button className='secondary-btn lesson-btn'><img src='/img/more-horizontal.svg' alt='horizontal icon' /></button>
        </div>
        <div className='add-lesson-btn secondary-btn' onClick={() => history.push('/admin/lesson-page')}>
          <img src='/img/plus.svg' alt='lesson add' />
          <span>Add new lesson for users</span>
        </div>
      </div>
    </div>
  )
}

export default AdminCoursePage
