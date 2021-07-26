import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import useGetFetchData from '../../../utils/useGetFetchData'
import { GET_COURSE } from '../../../utils/urlConstants'

import BackButton from '../../../components/backButton/BackButton'
import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import CourseDescription from './CourseDescription'
import LessonBlock from './LessonBlock'
import './AdminCoursePage.scss'

const AdminCoursePage = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const { courseId } = useParams()

  const { data, isLoading, refetch } = useGetFetchData(
    'recentCourse',
    GET_COURSE + '/' + courseId
  )
  if (isLoading) {
    return <span>Loading..</span>
  }
  const creator = data?.data?.creator
  const userId = userInfo.id
  if (userId !== creator) {
    return <Redirect to='/courses' />
  }

  return (
    <DashboardLayout title='Course page'>
      <BackButton location='/admin/courses' />
      <CourseDescription data={data} isLoading={isLoading} />
      <LessonBlock courseId={courseId} data={data} refetch={refetch} />
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
