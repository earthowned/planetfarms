import React, { useState } from 'react'
import './Courses.css'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import CoursesHeader from '../../components/coursesHeader/CoursesHeader'
import CoursesCard from '../../components/coursesCard/CoursesCard'
import GroupModal from '../../components/groupModal/GroupModal'
import SimpleModal from '../../components/simpleModal/SimpleModal'

import CourseCreateModal from '../../components/courseCreateModal/CourseCreateModal'
import NewCourseCreateModal from '../../components/courseCreateModal/newCourseCreateModal/NewCourseCreateModal'
import CollectionModal from '../../components/collectionModal/CollectionModal'

const Courses = () => {
  const [active, setActive] = useState(false)
  const [modalactive, setModalActive] = useState(false)
  const [newCollectionactive, setNewCollectionActive] = useState(false)
  const [createCourse, setCreateCourse] = useState(false)
  const [createNewCourse, setCreateNewCourse] = useState(false)
  function createNewCourseFunc () {
    setCreateNewCourse(true)
    setCreateCourse(false)
  }
  return (
    <>
      {modalactive && <GroupModal clickHandler={setModalActive} setNewCollection={setNewCollectionActive} name='Add to collection' btnName='Add to collection' />}
      {newCollectionactive && <SimpleModal setNewCollection={setNewCollectionActive} name='Courses' />}
      {createCourse && <CourseCreateModal setNewCollection={setNewCollectionActive} clickHandler={setCreateCourse} collectionAdded={createNewCourseFunc} />}
      {createNewCourse && <NewCourseCreateModal clickHandler={setCreateNewCourse} />}
      <DashboardLayout title='All courses'>
        <div className='courses-main-container'>
          <CoursesHeader setActive={setActive} setCreateCourse={setCreateCourse} />
        </div>
        <CoursesCard category='Business Courses' setModalActive={setModalActive} />
        <CoursesCard category='Farming Courses' setModalActive={setModalActive} />
      </DashboardLayout>
    </>
  )
}

export default Courses
