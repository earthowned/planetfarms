import { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { createLesson } from '../../../actions/lessonActions'

import AddContent from './AddContent'
import LessonMaterial from './LessonMaterial'
import LessonSaveModal from './LessonSaveModal'
import AddTestModal from '../../../components/addTestModal/AddTestModal'
import BackButton from '../../../components/backButton/BackButton'
import NewsCreateModal from '../../../components/newsCreateModal/NewsCreateModal'
import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import './AddLesson.scss'

const AddLesson = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { courseId } = useParams()

  const [videoModal, setVideoModal] = useState(false)
  const [imageModal, setImageModal] = useState(false)
  const [textModal, setTextModal] = useState(false)
  const [testModal, setTestModal] = useState(false)
  const [lessonData, setLessonData] = useState([])
  const [lessonCover, setLessonCover] = useState(null)
  const [material, setMaterial] = useState([])

  const { register, errors, handleSubmit } = useForm()

  const submitLessonForm = ({ title, lessonDesc }) => {
    const coverImg = lessonCover
    dispatch(
      createLesson({
        title,
        courseId,
        coverImg,
        lessonDesc,
        lessonData,
        material,
        history
      })
    )
  }

  return (
    <>
      {videoModal && (
        <NewsCreateModal
          type='video'
          videoActive={videoModal}
          setVideoActive={setVideoModal}
          lessonData={lessonData}
          setLessonData={setLessonData}
        />
      )}
      {imageModal && (
        <NewsCreateModal
          type='image'
          imageActive={imageModal}
          setImageActive={setImageModal}
          lessonData={lessonData}
          setLessonData={setLessonData}
        />
      )}
      {testModal && <AddTestModal setTestModal={setTestModal} />}
      {textModal && (
        <NewsCreateModal
          type='text'
          textActive={textModal}
          setTextActive={setTextModal}
          lessonData={lessonData}
          setLessonData={setLessonData}
        />
      )}
      <DashboardLayout title='Add new lesson'>
        <BackButton location={`/admin/course/${courseId}`} />
        <AddContent
          setVideoModal={setVideoModal}
          setImageModal={setImageModal}
          setTextModal={setTextModal}
          setTestModal={setTestModal}
          register={register}
          errors={errors}
          setLessonCover={setLessonCover}
          lessonCover={lessonCover}
          lessonData={lessonData}
        />
        <LessonMaterial material={material} setMaterial={setMaterial} />
        <LessonSaveModal
          pathId={courseId}
          onClick={handleSubmit(submitLessonForm)}
        />
      </DashboardLayout>
    </>
  )
}

export default AddLesson
