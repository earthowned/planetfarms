import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import useGetFetchData from '../../utils/useGetFetchData'
import { GET_COURSE } from '../../utils/urlConstants'

import CardLayout from '../../layout/cardLayout/CardLayout'
import Background from '../background/Background'
import './CoursesCard.scss'

const CoursesCard = ({ category, setModalActive }) => {
  const { data: courseData } = useGetFetchData('course', GET_COURSE)
  return (
    <div className='course-card-wrapper'>
      <div className='courses-card-container'>
        {courseData?.courses
          .filter((cat) =>
            cat.category.toLowerCase().includes(category.toLowerCase())
          )
          .slice(0, 1)
          .map((catge) => (
            <h4 key={catge.id}>{catge.category}</h4>
          ))}
        <CardLayout data={courseData}>
          {courseData?.courses
            .filter((cat) =>
              cat.category.toLowerCase().includes(category.toLowerCase())
            )
            .map((course) => {
              return (
                <Background image={course?.thumbnail} key={course.id} tag="thumbnail">
                  <div className='courses-card'>
                    <AddCollection
                      item={course}
                      setModalActive={setModalActive}
                    />
                    <CardContent item={course} />
                  </div>
                </Background>
              )
            })}
        </CardLayout>
      </div>
    </div>
  )
}

export default CoursesCard

function Star ({ num }) {
  const stars = [0, 1, 2, 3, 4]
  return (
    <>
      {stars.map((item, index) => {
        return (
          <svg
            width='22'
            height='21'
            viewBox='0 0 22 21'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            key={index}
          >
            <path
              d='M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z'
              fill={num < 6 && num > item ? '#00C688' : '#fff'}
              stroke={num < 6 && num > item ? '#00C688' : '#fff'}
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        )
      })}
    </>
  )
}

function CardContent ({ item }) {
  return (
    <div className='card-content'>
      <Link to={`/course/${item.id}`}>
        <h1>{item.title}</h1>
        <h3>{item.author}</h3>
      </Link>
      <div className='course-stars'>
        <Star num={item.stars} />
        <p>({item.total} total)</p>
      </div>
      <EnrollContainer item={item} />
    </div>
  )
}

function EnrollContainer ({ item }) {
  const history = useHistory()
  return (
    <div className='enroll-container'>
      {item.enroll ? (
        <button
          className='join-btn'
          onClick={() => history.push('/mycoursepage')}
        >
          <span>You're subscriber</span>
        </button>
      ) : (
        <button className='join-btn'>
          <span>Join Course</span>
        </button>
      )}
      <h4>{item.isFree === true ? 'Free' : `$ ${item.price}`}</h4>
    </div>
  )
}

function AddCollection ({ item, setModalActive }) {
  return (
    <button className='collection-btn' onClick={() => setModalActive(true)}>
      {item.added ? (
        <>
          <img src='/img/close-outline.svg' alt='close icon' />
          <span>Remove from collection</span>
        </>
      ) : (
        <>
          <img src='/img/plus.svg' alt='add icon' />
          <span>Add to collection</span>
        </>
      )}
    </button>
  )
}
