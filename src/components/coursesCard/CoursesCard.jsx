import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import useGetFetchData from '../../utils/useGetFetchData'
import { GET_COURSE } from '../../utils/urlConstants'

import CardContent from './CardContent'
import AddCollection from './AddCollection'
import CardLayout from '../../layout/cardLayout/CardLayout'
import Background from '../background/Background'
import './CoursesCard.scss'

import Pagination from '../../components/pagination/Pagination'

const CoursesCard = ({ category, setModalActive, setPurchaseModal }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const [pageNumber, setPageNumber] = useState(1)
  const { userInfo } = userLogin
  const { data: courseData, isLoading } = useGetFetchData(
    'ALL_COURSE_DATA',
    GET_COURSE + '?category=' + category.id,
    { category }
  )
  if (isLoading) {
    return <span>Loading</span>
  }

  return (
    <div className='course-card-wrapper'>
      <div className='courses-card-container'>
        {courseData?.data.length !== 0 &&
          <h4>{category?.name}</h4>}
        <CardLayout data={courseData}>
          {courseData?.data
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
        {courseData?.data.length !== 0 && <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} resourceList={courseData} />}
      </div>
    </div>
  )
}

export default React.memo(CoursesCard)
