import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import nav from './courseNav'
import './Courses.css'
import useGetFetchData from '../../utils/useGetFetchData'
import { CATEGORY } from '../../utils/urlConstants'

import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import CoursesCard from '../../components/coursesCard/CoursesCard'
import GroupModal from '../../components/groupModal/GroupModal'
import SimpleModal from '../../components/simpleModal/SimpleModal'

import CourseCreateModal from '../../components/courseCreateModal/CourseCreateModal'
import NewCourseCreateModal from '../../components/courseCreateModal/newCourseCreateModal/NewCourseCreateModal'
import { PurchaseModal } from '../../components/purchaseModal/PurchaseModal'
import SubHeader from '../../components/subHeader/SubHeader'

const Courses = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const [modalactive, setModalActive] = useState(false)
  const [newCollectionactive, setNewCollectionActive] = useState(false)
  const [createCourse, setCreateCourse] = useState(false)
  const [createNewCourse, setCreateNewCourse] = useState(false)
  const [purchaseModal, setPurchaseModal] = useState(false)
  const [purchaseSuccessModal, setPurchaseSuccessModal] = useState(false)
  const [search, setSearch] = useState(null)

  const { data, isLoading } = useGetFetchData('courseCategory', CATEGORY)
  if (isLoading) {
    return <span>Loading...</span>
  }

  function createNewCourseFunc () {
    setCreateNewCourse(true)
    setCreateCourse(false)
  }
  return (
    <>
      {purchaseModal && (
        <PurchaseModal
          clickHandler={setPurchaseModal}
          setPurchaseSuccessModal={setPurchaseSuccessModal}
        />
      )}
      {modalactive && (
        <GroupModal
          clickHandler={setModalActive}
          setNewCollection={setNewCollectionActive}
          name='Add to collection'
          btnName='Add to collection'
        />
      )}
      {newCollectionactive && (
        <SimpleModal setNewCollection={setNewCollectionActive} name='Courses' />
      )}
      {createCourse && (
        <CourseCreateModal
          setNewCollection={setNewCollectionActive}
          openModal={createCourse}
          closeModal={setCreateCourse}
          collectionAdded={createNewCourseFunc}
        />
      )}
      {createNewCourse && (
        <NewCourseCreateModal clickHandler={setCreateNewCourse} />
      )}
      <DashboardLayout title='All courses'>
        <div className='courses-main-container'>
          <SubHeader
            search={search}
            setSearch={setSearch}
            nav={nav}
            setCreateActive={setCreateCourse}
            btnName='Add Courses'
          />
        </div>
        {data?.results?.map((category) => {
          return (
            <CoursesCard
              category={category.name}
              setModalActive={setModalActive}
              key={category.id}
              setPurchaseModal={setPurchaseModal}
            />
          )
        })}
      </DashboardLayout>
    </>
  )
}

export default Courses
