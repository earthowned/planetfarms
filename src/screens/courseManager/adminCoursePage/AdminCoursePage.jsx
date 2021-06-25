import React from 'react'
import BackButton from '../../../components/backButton/BackButton'
import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import './AdminCoursePage.scss'
import { useParams } from 'react-router-dom'
import { GET_COURSE } from '../../../utils/urlConstants'
import useGetFetchData from '../../../utils/useGetFetchData'
import CourseDescription from './CourseDescription'
import LessonBlock from './LessonBlock'

const AdminCoursePage = () => {
  const { courseId } = useParams()
  const { data } = useGetFetchData('recentCourse', GET_COURSE + '/' + courseId)

  return (
    <DashboardLayout title='Course page'>
      <BackButton location='/admin/courses' />
      <CourseDescription data={data} />
      <LessonBlock courseId={courseId} />
      <div className='study-course-wrapper'>
        <h3>Also study this course</h3>
        <p>
          You dont have any users on you course yet. Share your course in your
          groups to find new users!
        </p>
        <button className='secondary-btn'>Share my course</button>
      </div>
    </DashboardLayout>
  )
}

export default AdminCoursePage
