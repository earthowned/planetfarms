import React, { useState } from 'react'
import Background from '../../../Components/Background/Background'
import CoursesHeader from '../../../Components/CoursesHeader/CoursesHeader'
import DashboardLayout from '../../../Layout/DashboardLayout/DashboardLayout'
import { Link } from 'react-router-dom'
import './course-collection.css'

const farming = Array(6).fill(
  {
    title: 'Farm 2020 courses collection',
    img: '/img/mountain.svg',
    subscribers: 65
  }
)

const mycollection = [
  {
    title: 'Farm 2020 courses collection',
    img: '/img/farmer.svg',
    subscribers: 365
  }
]

const CourseCollection = () => {
  const [active, setActive] = useState(false)

  return (
    <DashboardLayout title='All courses'>
      <div className='courses-main-container'>
        <CoursesHeader setActive={setActive} />
        <CourseUserCard name='My Courses' data={farming} btnName='Manage course' subName='subscribers' />
        <CourseUserCard name='My Collections' data={mycollection} btnName='Edit Collection' subName='users saved' />
      </div>
    </DashboardLayout>
  )
}

const CourseUserCard = ({ name, data, btnName, subName }) => {
  return (
    <>
      <h4 className='courses-users-collection-header'>{name}</h4>
      <div className={data.length === 1
        ? 'courses-collection-main-container single'
        : data.length === 2
          ? 'courses-collection-main-container double'
          : 'courses-collection-main-container'}
      >
        {
          data.map(item => {
            return (
              <BackgroundUserCard item={item} btnName={btnName} subName={subName} />
            )
          })
        }
      </div>
    </>
  )
}

export const BackgroundUserCard = ({ item, btnName, subName }) => {
  return (
    <Background image={item.img}>
      <button className='subs'>
        <span>{item.subscribers} {subName}</span>
      </button>
      <CourseUserContent item={item} btnName={btnName} />
    </Background>
  )
}

function CourseUserContent ({ item, btnName }) {
  const [savedActive, setSavedActive] = useState(false)
  return (
    <div className='courses-users-content'>
      <h3>{item.title}</h3>
      {btnName === 'Edit Collection'
        ? <Link className='nav-link' to='/courses/my-courses/edit-course'>
          <button className='trasnsparent-btn fixed-width courses-users-btn' onClick={() => setSavedActive(!savedActive)}>
            {btnName}
          </button>
        </Link>
        : <button className='trasnsparent-btn fixed-width courses-users-btn' onClick={() => setSavedActive(!savedActive)}>
          {btnName}
        </button>}
    </div>
  )
}

export default CourseCollection
