import { useState } from 'react'
import Background from '../../../Components/Background/Background'
import CoursesHeader from '../../../Components/CoursesHeader/CoursesHeader'
import DashboardLayout from '../../../Layout/DashboardLayout/DashboardLayout'
import './saved-course-collection.css'

const farming = [
  {
    title: 'Business collection',
    img: '/img/farmer.svg',
    category: 'Farming'
  },
  {
    title: 'Business courses collection for begginers',
    img: '/img/farmer.svg',
    category: 'Farming'
  }
]

const branding = [
  {
    title: 'Business collection for beginners',
    img: '/img/farmer.svg',
    category: 'branding'
  }
]

const SavedCourseCollection = () => {
  const [active, setActive] = useState(false)
  return (
    <DashboardLayout title='All courses'>
      <div className='courses-main-container'>
        <CoursesHeader setActive={setActive} />
      </div>
      <CourseUserCard name='Farming Collections' data={farming} />
      <CourseUserCard name='Brandig Collections' data={branding} />
    </DashboardLayout>
  )
}

const CourseUserCard = ({ name, data }) => {
  return (
    <>
      <h4 className='courses-saved-collection-header'>{name}</h4>
      <div className='courses-saved-main-container'>
        {
          data.map(item => {
            return (
              <BackgroundUserCard item={item} />
            )
          })
        }
      </div>
    </>
  )
}

export const BackgroundUserCard = ({ item }) => {
  return (
    <Background image={item.img}>
      <button className='trasnsparent-btn fixed-width courses-saved-btn'>
        <img src='/img/trash.svg' alt='circle-icon' /> <span>Remove collection</span>
      </button>
      <div className='courses-saved-content'>
        <h4>{item.category}</h4>
        <h3>{item.title}</h3>
      </div>
    </Background>
  )
}

export default SavedCourseCollection
