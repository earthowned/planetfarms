import React, { useState } from 'react'
import Background from '../../../Components/Background/Background'
import CoursesHeader from '../../../Components/coursesHeader/CoursesHeader'
import CardLayout from '../../../Layout/cardLayout/CardLayout'
import DashboardLayout from '../../../Layout/DashboardLayout/DashboardLayout'
import './CourseUsers.css'

export const farming = [
  {
    title: 'Farm 2020 courses collection',
    img: '/img/farmer.svg'
  }
]

const CourseUsers = () => {
  const [active, setActive] = useState(false)
  return (
    <DashboardLayout title='All courses'>
      <div className='courses-main-container'>
        <CoursesHeader setActive={setActive} />
        <CourseUserCard name='Farming Collections' />
        <CourseUserCard name='Branding Collections' />
      </div>
    </DashboardLayout>
  )
}

const CourseUserCard = ({ name }) => {
  return (
    <>
      <h4 className='courses-users-collection-header'>{name}</h4>
      <CardLayout data={farming}>
        {
          farming.map(item => {
            return (
              <BackgroundUserCard item={item} />
            )
          })
        }
      </CardLayout>
    </>
  )
}

export const BackgroundUserCard = ({ item }) => {
  const [savedActive, setSavedActive] = useState(false)
  return (
    <Background image={item.img}>
      <div className='courses-users-inner-container'>
        <div className='courses-users-content'>
          <h3>{item.title}</h3>
          <button className='trasnsparent-btn fixed-width courses-users-btn' onClick={() => setSavedActive(!savedActive)}>
            {savedActive ? <><img src='/img/check-circle.svg' alt='circle-icon' /> <span>Saved</span></> : 'Save Collection'}
          </button>
        </div>
      </div>
    </Background>
  )
}

export default CourseUsers
