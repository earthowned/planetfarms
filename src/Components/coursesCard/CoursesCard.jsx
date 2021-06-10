import React from 'react'
import { useHistory } from 'react-router'
import Background from '../Background/Background'
import './CoursesCard.css'

const data = [
  {
    title: 'Find your inner power',
    author: 'J.McBell course',
    image: '/img/bg-image1.svg',
    stars: 3,
    total: 13,
    added: false,
    enroll: false,
    cost: 25.99
  },
  {
    title: 'Find your inner power',
    author: 'J.McBell course',
    image: '/img/bg-image2.svg',
    stars: 4.5,
    total: 5,
    added: false,
    enroll: true,
    cost: 'Free'
  },
  {
    title: 'Find your inner power',
    author: 'J.McBell course',
    image: '/img/bg-image1.svg',
    stars: 4,
    total: 13,
    added: false,
    enroll: false,
    cost: 25.99
  },
  {
    title: 'Find your inner power',
    author: 'J.McBell course',
    image: '/img/bg-image2.svg',
    stars: 1,
    total: 5,
    added: false,
    enroll: true,
    cost: 55
  },
  {
    title: 'Find your inner power',
    author: 'J.McBell course',
    image: '/img/bg-image1.svg',
    stars: 3,
    total: 13,
    added: false,
    enroll: false,
    cost: 'Free'
  },
  {
    title: 'Find your inner power',
    author: 'J.McBell course',
    image: '/img/bg-image1.svg',
    stars: 3,
    total: 13,
    added: false,
    enroll: false,
    cost: 'Free'
  }
]
const CoursesCard = ({ category, setModalActive }) => {
  return (
    <div className='course-card-wrapper'>
      <div className='courses-card-container'>
        <h4>{category}</h4>
        <div>
          {
            data.map(item => {
              return (
                  <Background image={item.image}>
                    <div className="courses-card">
                  <AddCollection item={item} setModalActive={setModalActive}/>
                  <CardContent item={item} />
                  </div>
                </Background>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default CoursesCard

function Star ({ num }) {
  const stars = [0, 1, 2, 3, 4]
  return (
    <>
      {
        stars.map(item => {
          return (
            <svg width='22' height='21' viewBox='0 0 22 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z'
                fill={num < 6 && num > item ? '#00C688' : '#fff'} stroke={num < 6 && num > item ? '#00C688' : '#fff'} stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'
              />
            </svg>
          )
        })
      }
    </>
  )
}

function CardContent ({item}) {
  return (
    <div className='card-content'>
      <h3>{item.title}</h3>
      <h3>{item.author}</h3>
          <div className='course-stars'>
              <Star num={item.stars} />
              <p>({item.total} total)</p>
           </div>
      <EnrollContainer item={item}/>
    </div>
  )
}

function EnrollContainer ({item}) {
  const history = useHistory()
  return (
     <div className='enroll-container'>
        {
          item.enroll 
          ? <button className='join-btn' onClick={() => history.push('/mycoursepage')}><span>You're subscriber</span></button>
          : <button className='join-btn' onClick={() => history.push('/coursepage')}><span>Join Course</span></button>
        }
        <h4>{item.cost === 'Free' ? item.cost : `$ ${item.cost}`}</h4>
    </div>
  )
}

function AddCollection ({item, setModalActive}) {
  return (
      <button className='collection-btn' onClick={() => setModalActive(true)}>{item.added
        ? <><img src='/img/close-outline.svg' alt='close icon' /><span>Remove from collection</span></>
        : <><img src='/img/plus.svg' alt='add icon' /><span>Add to collection</span></>}
      </button>
  )
}
