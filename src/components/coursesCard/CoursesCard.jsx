import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import useGetFetchData from '../../utils/useGetFetchData'
import { GET_COURSE } from '../../utils/urlConstants'

import CardContent from './CardContent'
import AddCollection from './AddCollection'
import CardLayout from '../../layout/cardLayout/CardLayout'
import Background from '../background/Background'
import './CoursesCard.scss'

const CoursesCard = ({ category, setModalActive, setPurchaseModal, setCourseData, pageNumber }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const { data: courseData, isLoading } = useGetFetchData(
    'ALL_COURSE_DATA',
    GET_COURSE + '?pageNumber=' + pageNumber,
    pageNumber
  )
  useEffect(() => {
    if (courseData) setCourseData(courseData)
  }, [courseData])
  if (isLoading) {
    return <span>Loading</span>
  }

  return (
    <div className='course-card-wrapper'>
      <div className='courses-card-container'>
        {courseData?.data
          .filter((cat) =>
            cat.category.toLowerCase().includes(category.toLowerCase())
          )
          .slice(0, 1)
          .map((catge) => (
            <h4 key={catge.id}>{catge.category}</h4>
          ))}
        <CardLayout data={courseData}>
          {courseData?.data
            .filter((cat) =>
              cat.category.toLowerCase().includes(category.toLowerCase())
            )
            .map((course) => {
              return (
                <Background
                  image={course?.thumbnail}
                  key={course.id}
                  tag='thumbnail'
                >
                  <div className='courses-card'>
                    <AddCollection
                      item={course}
                      setModalActive={setModalActive}
                    />
                    <CardContent
                      item={course}
                      userInfo={userInfo}
                      setPurchaseModal={setPurchaseModal}
                    />
                  </div>
                </Background>
              )
            })}
        </CardLayout>
      </div>
    </div>
  )
}

export default React.memo(CoursesCard)
