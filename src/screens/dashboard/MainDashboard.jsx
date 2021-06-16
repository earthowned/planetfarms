import { useState, useRef, useEffect } from 'react'
import './MainDashboard.scss'
import { Link } from 'react-router-dom'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import useSizeFinder from '../../utils/sizeFinder'
import useScroll from '../../utils/scrollFunc'

function DashboardComponent () {
  const windowWidth = useSizeFinder()
  return (
    <DashboardLayout title='My Dashboard'>
      <div className='x10-1-0-my-dashboard'>
        <div className='flex-col-5'>
          <div className='dashboard-hero border-1px-onyx'>
            <div className='dashboard-info'>
              <img className='dashboard-profile-pic' src='/img/DashboardProfilePic.png' alt='dashboard-profile' />
              <div className='flex-col-6'>
                <div className='info-my-detail'>
                  <div className='mikhail-ugryumov ibmplexsans-semi-bold-quarter-spanish-white-24px'>
                    Mikhail Ugryumov
                  </div>
                  <p className='text-1 ibmplexsans-regular-normal-monsoon-16px'>Last visit: 5 hours ago</p>
                </div>
                <div className='info-my-community'>
                  <div className='text-1 ibmplexsans-regular-normal-monsoon-16px'>Follow 8 communities</div>
                  <div className='my-communities'>My communities</div>
                </div>
              </div>
            </div>

            <div className='dashboard-my-profile-side-header'>
              {/* my-profile  */}
              <Link to='/myProfile' className='dasboard-my-profile-box'>
                <HeaderContent title='My Profile' image='/img/user.svg' />
              </Link>
              {/* achivements  */}
              <Link to='/achievements' className='dasboard-my-profile-box'>
                <HeaderContent title='Achievements' image='/img/award.svg' />
              </Link>
              {/* surveys */}
              <Link to='/mysurvey' className='dasboard-my-profile-box'>
                <HeaderContent title='Surveys' image='/img/check-square.svg' />
              </Link>
            </div>

          </div>
          {windowWidth < 721
            ? <div className='mobile-container-dasboard-my-profile-box'>
              <Link to='/mylibrary' className='dasboard-my-profile-box'>
                <MobileViewHeaderContent title='My library' image='/img/book-outlined.svg' />
              </Link>
              <Link to='/mycourse' className='dasboard-my-profile-box'>
                <MobileViewHeaderContent title='My courses' image='/img/book-open-1.svg' />
              </Link>
              <Link to='#/mygroups' className='dasboard-my-profile-box'>
                <MobileViewHeaderContent title='My groups' image='/img/my-group.svg' />
              </Link>
            </div>
            : <MainContainer />}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default DashboardComponent

function HeaderContent ({ title, image }) {
  const windowWidth = useSizeFinder()
  return (
    <>
      <div className='dasboard-my-profile-box--content'>
        <img src={image} alt={title} />
        <h4>{title}</h4>
      </div>
      {windowWidth < 721 && <img src='/img/right-arrow.svg' alt='arrow right' />}
    </>
  )
}

function MobileViewHeaderContent ({ title, image }) {
  return (
    <>
      <div>
        <img src={image} alt='user' />
        <h4>{title}</h4>
      </div>
      <img src='/img/right-arrow.svg' alt='arrow right' />
    </>
  )
}

function SeeAllButton ({ children }) {
  return (
    <div className='frame-4 border-0-5px-quarter-spanish-white'>
      <div className='default-i905517 ibmplexsans-semi-bold-quarter-spanish-white-16px'>
        {children}
      </div>
    </div>
  )
}

const DashboardData = [
  {
    category: 'farming',
    title: "How to farm in 2020 and don't lose you business",
    img: '/img/man-cap.svg'
  },
  {
    category: 'farming',
    title: 'Be happy and find your self! Motivation 2020',
    img: '/img/man-cap.svg',
    type: 'video'
  },
  {
    category: 'farming',
    title: "How to farm in 2020 and don't lose you business",
    img: '/img/man-cap.svg'
  },
  {
    category: 'farming',
    title: 'Be happy and find your self! Motivation 2020',
    img: '/img/man-cap.svg',
    type: 'video'
  },
  {
    category: 'farming',
    title: "How to farm in 2020 and don't lose you business",
    img: '/img/man-cap.svg'
  }

]

const MyCourseData = [
  {
    category: 'farming',
    title: "How to farm in 2020 and don't lose you business",
    img: '/img/man-cap.svg'
  },
  {
    category: 'farming',
    title: 'Be happy and find your self! Motivation 2020',
    img: '/img/man-cap.svg'
  }
]

const headers = [
  {
    name: 'My library',
    image: '/img/book-outlined.svg',
    slug: '/mylibrary',
    data: DashboardData,
    btnName: 'Add Library'
  },
  {
    name: 'My courses',
    image: '/img/book-open-1.svg',
    slug: '/mycourse',
    data: MyCourseData,
    btnName: 'Add Course'
  },
  {
    name: 'My groups',
    image: '/img/my-group.svg',
    slug: '/mygroups',
    data: DashboardData,
    btnName: 'Add Groups'
  }
]

function MainContainer () {
  return (
    <div className='dashboard-main-container border-1px-onyx'>
      <div className='dashboard-inner-container'>
        {
          headers.map(head => {
            return (
              <div className='mylibrary-container' key={head.name}>
                <div className='mylibrary-container--header'>
                  <img src={head.image} alt={head.name} />
                  <h4>{head.name}</h4>
                  <Link to={head.slug} className='link-decoration'>
                    <SeeAllButton>See all items</SeeAllButton>
                  </Link>
                </div>
                <ScrollItems head={head} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

function ScrollItems ({ head }) {
  const scrollRef = useRef()
  const { scrollLeftActive, scrollActive, scrollRight, scrollLeft } = useScroll(scrollRef)
  return (
    <>
      <div className='mylibrary-container--tiles' ref={scrollRef}>
        <Tiles data={head.data} title={head.btnName} />
      </div>
      {scrollActive && <img className='scroll-dashboard-icon' onClick={() => scrollRight(scrollRef)} src='/img/scroll-icon.svg' alt='scroll-icon' />}
      {
        scrollLeftActive &&
          <img
            className='scroll-dashboard-left-icon' src='/img/scroll-icon.svg'
            onClick={() => scrollLeft(scrollRef)} alt='scroll-icon'
          />
      }
    </>
  )
}

function Tiles ({ data, title }) {
  return (
    <>
      {
        data.map(item => {
          return (
            <div className='tiles-container' key={item.title}>
              <div className='tiles-container-img-wrapper'>
                <img src={item.img} alt={item.title} />
              </div>
              <h4>{item.title}</h4>
              {item.type && <img className='video-icon' src='/img/video-icon.svg' alt={item.type} />}
            </div>
          )
        })
      }
      <div className='add-container'>
        <img src='/img/plus-icon.svg' alt='add-icon' />
        <h4>{title}</h4>
      </div>
    </>
  )
}
